"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const HdboTrans_1 = require("./Hover/HdboTrans");
const uvmMap_1 = require("./Webview/UVMclassmap/uvmMap");
'use strict';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    //	********************************************  //
    //	*************** webview part ***************  //
    //	********************************************  //
    const uvmMap = vscode.commands.registerCommand('mvp.mv.uvmclassmap', () => {
        uvmMap_1.default(context, 'WebViewUvmClassMap', 'UVM类库地图');
    });
    context.subscriptions.push(uvmMap);
    //	******************************************  //
    //	*************** hover part ***************	//
    //	******************************************  //
    context.subscriptions.push(vscode.languages.registerHoverProvider([
        { language: 'rv_assembly', scheme: '*' }
    ], new HdboTrans_1.HdboTrans()));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map