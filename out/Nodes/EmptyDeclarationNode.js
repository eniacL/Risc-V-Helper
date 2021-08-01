"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyDeclarationNode = void 0;
const vscode = require("vscode");
const DeclarationNode_1 = require("./DeclarationNode");
class EmptyDeclarationNode extends DeclarationNode_1.DeclarationNode {
    // #region Constructors (1)
    constructor() {
        super();
        this.label = "no elements found";
        this.start = new vscode.Position(0, 0);
        this.end = new vscode.Position(0, 0);
        this.parent = null;
        this.children = [];
        this.command = undefined;
        this.iconPath = undefined;
        this.collapsibleState = vscode.TreeItemCollapsibleState.None;
    }
}
exports.EmptyDeclarationNode = EmptyDeclarationNode;
//# sourceMappingURL=EmptyDeclarationNode.js.map