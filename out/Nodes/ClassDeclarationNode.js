"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDeclarationNode = void 0;
const path = require("path");
const DeclarationNode_1 = require("./DeclarationNode");
class ClassDeclarationNode extends DeclarationNode_1.DeclarationNode {
    // #region Constructors (1)
    constructor(className, isExport, isAbstract, parent, children, command, start, end) {
        super();
        this.name = className;
        this.label = className;
        this.start = start;
        this.end = end;
        this.parent = parent;
        this.children = children;
        this.command = command;
        this.iconPath = {
            light: path.join(this.imageDir, 'Class_light.svg'),
            dark: path.join(this.imageDir, 'Class_dark.svg')
        };
        if (!isExport) {
            this.label += " ";
        }
    }
}
exports.ClassDeclarationNode = ClassDeclarationNode;
//# sourceMappingURL=ClassDeclarationNode.js.map