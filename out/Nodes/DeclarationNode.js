"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclarationNode = void 0;
const path = require("path");
const vscode = require("vscode");
class DeclarationNode extends vscode.TreeItem {
    // #endregion
    // #region Constructors (1)
    constructor() {
        super("", vscode.TreeItemCollapsibleState.Expanded);
        // #region Properties (8)
        this.imageDir = path.join(__filename, "..", "..", "..", "resources", "images", "tree_icons");
        this.children = [];
        this.end = new vscode.Position(0, 0);
        this.name = null;
        this.parent = null;
        this.start = new vscode.Position(0, 0);
    }
    // #endregion
    // #region Public Accessors (1)
    //@ts-ignore
    get tooltip() {
        //@ts-ignore
        return this.label;
    }
}
exports.DeclarationNode = DeclarationNode;
//# sourceMappingURL=DeclarationNode.js.map