"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxTreeNodeProvider = void 0;
const ts = require("typescript");
const vscode = require("vscode");
const ClassDeclarationNode_1 = require("./Nodes/ClassDeclarationNode");
const EmptyDeclarationNode_1 = require("./Nodes/EmptyDeclarationNode");
class SyntaxTreeNodeProvider {
    // #endregion
    // #region Constructors (1)
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
        // #region Properties (4)
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.editor = null;
        this.rootElements = [new EmptyDeclarationNode_1.EmptyDeclarationNode()];
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    // #endregion
    // #region Public Accessors (1)
    get rootElement() {
        return this.rootElements[0];
    }
    // #endregion
    // #region Public Methods (6)
    findNode(nodes, positionStart, positionEnd) {
        let result;
        // try to find a match among the child nodes
        for (let node of nodes) {
            result = this.findNode(node.children, positionStart, positionEnd);
            if (result) {
                return result;
            }
        }
        // try to find a match among the nodes
        for (let node of nodes) {
            if (node.start.isBeforeOrEqual(positionStart) &&
                node.end.isAfterOrEqual(positionEnd)) {
                return node;
            }
        }
        return null;
    }
    getChildren(element) {
        let children = [];
        if (this.workspaceRoot &&
            this.editor) {
            children = element ? element.children : this.rootElements;
        }
        return Promise.resolve(children);
    }
    getNode(positionStart, positionEnd) {
        return this.findNode(this.rootElements, positionStart, positionEnd);
    }
    getParent(element) {
        if (element) {
            return element.parent;
        }
        else {
            return null;
        }
    }
    getTreeItem(element) {
        return element;
    }
    refresh(editor) {
        this.editor = editor;
        if (this.editor) {
            this.rootElements = this.analyzeSyntaxTree(this.editor.document.getText());
        }
        else {
            this.rootElements = [new EmptyDeclarationNode_1.EmptyDeclarationNode()];
        }
        this._onDidChangeTreeData.fire();
    }
    // #endregion
    // #region Private Methods (18)
    analyzeSyntaxTree(sourceCode) {
        let rootElements = [];
        let sourceFile;
        // generate ast
        sourceFile = ts.createSourceFile("temp", sourceCode, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
        // analyze ast
        for (let node of sourceFile.getChildren(sourceFile)) {
            for (let rootElement of this.visitSyntaxTree(node, sourceFile, null)) {
                rootElements.push(rootElement);
            }
        }
        if (rootElements.length == 0) {
            // default item
            rootElements.push(new EmptyDeclarationNode_1.EmptyDeclarationNode());
        }
        return rootElements.sort((a, b) => this.compare(a, b));
    }
    compare(a, b) {
        let valueA = this.getOrder(a);
        let valueB = this.getOrder(b);
        if (valueA > valueB) {
            return 1;
        }
        else if (valueA < valueB) {
            return -1;
        }
        else {
            //@ts-ignore
            if (a.label.toLowerCase() > b.label.toLowerCase()) {
                return 1;
            } //@ts-ignore
            else if (a.label.toLowerCase() < b.label.toLowerCase()) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }
    getClassDeclarationNode(sourceFile, node, parentElement, childElements) {
        let identifier = node.name;
        let position = sourceFile.getLineAndCharacterOfPosition(identifier.getStart(sourceFile, false));
        let className = identifier.escapedText.toString();
        let isExport = false;
        let isAbstract = false;
        let start = this.editor.document.positionAt(node.getStart(sourceFile, false));
        let end = this.editor.document.positionAt(node.getEnd());
        // console.log(identifier);
        // console.log(position);
        // console.log(className);
        // console.log(isExport);
        // console.log(isAbstract);
        // console.log(start);
        // console.log(end);
        // class modifiers
        if (node.modifiers) {
            let tmp = node.modifiers.find((modifier, index, array) => modifier.kind == ts.SyntaxKind.ExportKeyword);
            if (tmp &&
                tmp.kind === ts.SyntaxKind.ExportKeyword) {
                isExport = true;
            }
            tmp = node.modifiers.find((modifier, index, array) => modifier.kind == ts.SyntaxKind.AbstractKeyword);
            if (tmp &&
                tmp.kind === ts.SyntaxKind.AbstractKeyword) {
                isAbstract = true;
            }
        }
        return new ClassDeclarationNode_1.ClassDeclarationNode(className, isExport, isAbstract, parentElement, childElements, this.getCommand(position), start, end);
    }
    getCommand(position) {
        let commandName = "mvp.goto";
        let position2 = new vscode.Position(position.line, position.character);
        let command = {
            command: commandName,
            title: '',
            arguments: [this.editor, position2]
        };
        return command;
    }
    getOrder(declarationNode) {
        if (declarationNode instanceof ClassDeclarationNode_1.ClassDeclarationNode) {
            return 102;
        }
        if (declarationNode instanceof EmptyDeclarationNode_1.EmptyDeclarationNode) {
            return 501;
        }
        return 601;
    }
    visitSyntaxTree(node, sourceFile, parentElement) {
        let elements = [];
        let childElements = [];
        // get element
        if (ts.isClassDeclaration(node)) {
            elements.push(this.getClassDeclarationNode(sourceFile, node, parentElement, childElements));
        }
        // get child elements
        for (let childNode of node.getChildren(sourceFile)) {
            for (let childElement of this.visitSyntaxTree(childNode, sourceFile, elements.length > 0 ? elements[0] : parentElement)) {
                childElements.push(childElement);
            }
        }
        if (elements.length == 0) {
            return childElements.sort((a, b) => this.compare(a, b));
        }
        else {
            elements.forEach(x => x.collapsibleState = x.children.length > 0 ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.None);
            return elements;
        }
    }
}
exports.SyntaxTreeNodeProvider = SyntaxTreeNodeProvider;
//# sourceMappingURL=SyntaxTreeNodeProvider.js.map