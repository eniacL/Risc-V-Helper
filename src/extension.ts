// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { HdboTrans } from "./Hover/HdboTrans";
import news from "./Webview/UVMclassmap/uvmMap";


'use strict';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	//	********************************************  //
	//	*************** webview part ***************  //
	//	********************************************  //
	const uvmMap = vscode.commands.registerCommand('mvp.mv.uvmclassmap', () => {
		news(context, 'WebViewUvmClassMap', 'UVM类库地图');
	});

	context.subscriptions.push(uvmMap);

	//	******************************************  //
	//	*************** hover part ***************	//
	//	******************************************  //
	context.subscriptions.push(
		vscode.languages.registerHoverProvider(
		  [
			{ language: 'rv_assembly', scheme: '*' }
		  ],
		  new HdboTrans()
		)
	  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
