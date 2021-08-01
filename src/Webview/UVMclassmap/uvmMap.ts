import * as vscode from 'vscode';
import * as path from 'path';

export default async function news (
    context: vscode.ExtensionContext,
    viewType: string,
    title: string
) {
        const webviewDir = path.join(context.extensionPath, 'resources');
        const panel = vscode.window.createWebviewPanel(
        viewType,
        title,
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: [vscode.Uri.file(webviewDir)]
        }
    );

    const onDiskPath = vscode.Uri.file(
        path.join(context.extensionPath,'resources/images/webview','uvmclassmap.png')
    );
    const uvmMapSrc = onDiskPath.with({ scheme: 'vscode-resource'});

    // const uvmMapSrc = panel.webview.asWebviewUri(onDiskPath);

    // const uvmMapSrc = onDiskPath.with({ scheme: 'vscode-resource'});

    panel.webview.html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
    
                background-color: #282828;
                color: rgb(255, 255, 255);
                overflow-x: auto;
            }
    
            .h3 {
                color: rgb(255, 255, 255);
            }
    
            .table {
                border-color: white;
            }
    
            .field_name {
    
                border-color: white;
            }
    
            .font-center {
                text-align: center
            }
    
            .modal-window {
                color: black;
                position: fixed;
                background-color: rgba(122, 115, 120, 0.8);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 999px;
                overflow-y: auto;
                visibility: hidden;
                opacity: 0;
                pointer-events: none;
                transition: all 0.3;
            }
    
            .modal-window:target {
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
            }
    
            .modal-window>div {
                height: 60%;
                width: 80%;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                padding: 2em;
                background: #ffffff;
                overflow: auto;
            }
    
            .modal-window header {
                font-weight: bold;
            }
    
            .modal-window h1 {
                font-size: 250%;
                margin: 0 0 15px;
            }
    
            .modal-close {
                color: #aaa;
                line-height: 70px;
                font-size: 150%;
                position: absolute;
                right: 2%;
                text-align: center;
                top: 0;
                width: 70px;
                text-decoration: none;
            }
    
            .modal-close:hover {
                color: black;
            }
    
            .modal-window h1 {
                color: black;
            }
    
            html,
            body {
                height: 100%;
            }
    
            a {
                color: tomato;
            }
    
            .container {
                display: grid;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
    
            .modal-window div:not(:last-of-type) {
                margin-bottom: 15px;
            }
    
            tag1 {
                color: #255e95;
                font-weight: bold;
            }
    
            tag2 {
                font-size: 80%;
                color: #541e24;
                text-indent: 15px;
            }
    
            .table_name {
                text-align: center;
                width: 100%;
            }
        </style>
        <title>LOAD-FP</title>
    </head>
    
    <body>
        <h3>Format for Vector Load Instructions under LOAD-FP major opcode</h3>
    
        <table width="100%" border="1" cellspacing="0" cellpadding="2">
            <tr>
                <td>31</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>29</td>
                <td>28</td>
                <td>27</td>
                <td>26</td>
                <td>25</td>
                <td>24</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>20</td>
                <td>19</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>15</td>
                <td>14</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>12</td>
                <td>11</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>7</td>
                <td>6</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>0</td>
            </tr>
            <tr>
                <td colspan="3" class="field_name font-center"><a href="">nf</a></td>
                <td class="field_name font-center"><a href="">mew</a></td>
                <td colspan="2" class="field_name font-center"><a href="">mop</a></td>
                <td class="field_name font-center"><a href="">vm</a></td>
                <td colspan="5" class="field_name font-center"><a href="">lumop</a></td>
                <td colspan="5" class="field_name font-center"><a href="">rs1</a></td>
                <td colspan="3" class="field_name font-center"><a href="">width</a></td>
                <td colspan="5" class="field_name font-center"><a href="">vd</a></td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">1</td>
                <td class="field_name font-center">1</td>
                <td class="field_name font-center">1</td>
            </tr>
            <tr>
                <td colspan="12">&nbsp;</td>
                <td colspan="5" class="field_description font-center">base addresss</td>
                <td colspan="3">&nbsp;</td>
                <td colspan="5" class="field_description font-center">&nbsp;&nbsp;destination of load&nbsp;&nbsp;</td>
                <td colspan="7" class="field_description font-center">VL* unit-stride</td>
            </tr>
        </table>
        <div>&nbsp;</div>
        <table width="100%" border="1" cellspacing="0" cellpadding="2">
            <tr>
                <td>31</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>29</td>
                <td>28</td>
                <td>27</td>
                <td>26</td>
                <td>25</td>
                <td>24</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>20</td>
                <td>19</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>15</td>
                <td>14</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>12</td>
                <td>11</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>7</td>
                <td>6</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>0</td>
            </tr>
            <tr>
                <td colspan="3" class="field_name font-center"><a href="">nf</a></td>
                <td class="field_name font-center"><a href="">mew</a></td>
                <td colspan="2" class="field_name font-center"><a href="">mop</a></td>
                <td class="field_name font-center"><a href="">vm</a></td>
                <td colspan="5" class="field_name font-center"><a href="">rs2</a></td>
                <td colspan="5" class="field_name font-center"><a href="">rs1</a></td>
                <td colspan="3" class="field_name font-center"><a href="">width</a></td>
                <td colspan="5" class="field_name font-center"><a href="">vd</a></td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">1</td>
                <td class="field_name font-center">1</td>
                <td class="field_name font-center">1</td>
            </tr>
            <tr>
                <td colspan="7">&nbsp;</td>
                <td colspan="5" class="field_description font-center">stride</td>
                <td colspan="5" class="field_description font-center">base addresss</td>
                <td colspan="3">&nbsp;</td>
                <td colspan="5" class="field_description font-center">&nbsp;&nbsp;destination of load&nbsp;&nbsp;</td>
                <td colspan="7" class="field_description font-center">VLS* stride</td>
            </tr>
        </table>
        <div>&nbsp;</div>
        <table width="100%" border="1" cellspacing="0" cellpadding="2">
            <tr>
                <td>31</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>29</td>
                <td>28</td>
                <td>27</td>
                <td>26</td>
                <td>25</td>
                <td>24</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>20</td>
                <td>19</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>15</td>
                <td>14</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>12</td>
                <td>11</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>7</td>
                <td>6</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>0</td>
            </tr>
            <tr>
                <td colspan="3" class="field_name font-center"><a href="">nf</a></td>
                <td class="field_name font-center"><a href="">mew</a></td>
                <td colspan="2" class="field_name font-center"><a href="">mop</a></td>
                <td class="field_name font-center"><a href="">vm</a></td>
                <td colspan="5" class="field_name font-center"><a href="">rs2</a></td>
                <td colspan="5" class="field_name font-center"><a href="">rs1</a></td>
                <td colspan="3" class="field_name font-center"><a href="">width</a></td>
                <td colspan="5" class="field_name font-center"><a href="">vd</a></td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">0</td>
                <td class="field_name font-center">1</td>
                <td class="field_name font-center">1</td>
                <td class="field_name font-center">1</td>
            </tr>
            <tr>
                <td colspan="7">&nbsp;</td>
                <td colspan="5" class="field_description font-center">address offsets</td>
                <td colspan="5" class="field_description font-center">base addresss</td>
                <td colspan="3">&nbsp;</td>
                <td colspan="5" class="field_description font-center">&nbsp;&nbsp;destination of load&nbsp;&nbsp;</td>
                <td colspan="7" class="field_description font-center">VLX* stride</td>
            </tr>
        </table>
        <div>&nbsp;</div>
        <table width="100%" border="1" cellspacing="0" cellpadding="10">
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>rs1[4:0]</td>
                <td>specifies x register holding base address</td>
            </tr>
            <tr>
                <td>rs2[4:0]</td>
                <td>specifies x register holding stride</td>
            </tr>
            <tr>
                <td>vs2[4:0]</td>
                <td>specifies v register holding address offsets</td>
            </tr>
            <tr>
                <td>vs3[4:0]</td>
                <td>specifies v register holding store data</td>
            </tr>
            <tr>
                <td>vd[4:0]</td>
                <td>specifies v register destination of load</td>
            </tr>
            <tr>
                <td>vm</td>
                <td>specifies whether vector masking is enabled (0 = mask enabled, 1 = mask disabled)</td>
            </tr>
            <tr>
                <td>width[2:0]</td>
                <td>specifies size of memory elements, and distinguishes from FP scalar</td>
            </tr>
            <tr>
                <td>mew</td>
                <td>extended memory element width.<a class="table_link" href="#vector_ls_width_encoding"> See Vector
                        Load/Store Width Encoding</a></td>
            </tr>
            <tr>
                <td>mop[1:0]</td>
                <td>specifies memory addressing mode</td>
            </tr>
            <tr>
                <td>nf[2:0]</td>
                <td>specifies the number of fields in each segment, for segment load/stores</td>
            </tr>
            <tr>
                <td>lumop[4:0]/sumop[4:0]</td>
                <td>are additional fields encoding variants of unit-stride instructions</td>
            </tr>
        </table>
        <div id="vector_ls_width_encoding" class="modal-window">
            <div>
                <a href="#" title="Close" class="modal-close">Close</a>
                <h1>Vector Load/Store Width Encoding</h1>
                <div>
                    &emsp;&emsp;Vector loads and stores have an EEW encoded directly in the instruction. The corresponding
                    EMUL is calculated as EMUL = (EEW/SEW)*LMUL. If the EMUL would be out of range (EMUL>8 or EMUL&lt;
                    &#60;1/8), the instruction encoding is reserved. The vector register groups must have legal register
                    specifiers for the selected EMUL; the instruction encoding is otherwise considered reserved.
                </div>
                <div>
                    &emsp;&emsp;Vector unit-stride and constant-stride use the EEW/EMUL encoded in the instruction for the
                    data values, while vector indexed loads and stores use the EEW/EMUL encoded in the instruction for the
                    index values and the SEW/LMUL encoded in vtype for the data values.
                </div>
                &emsp;&emsp;Vector loads and stores are encoded using width values that are not claimed by the standard
                scalar floating-point loads and stores.
                <div>
                    &emsp;&emsp;The mew bit (inst[28]) when set is expected to be used to encode expanded memory sizes of
                    128 bits and above, but these encodings are reserved at this point.
                </div>
                <div>
                    &emsp;&emsp;Vector loads and stores for EEWs of all supported SEW settings must be provided in an
                    implementation. Vector load/store encodings for unsupported EEW widths are reserved.
                </div>
                <table width="100%" border="0" cellspacing="0" cellpadding="10">
                    <tr>
                        <td class="table_name">
                            <h3>TABLE:&emsp;Width encoding for vector loads and stores.</h3>
                        </td>
                    </tr>
                </table>
                <table width="100%" border="1" cellspacing="0" cellpadding="10">
                    <tr>
                        <th>&emsp;</th>
                        <th>mew</th>
                        <th colspan="3">width [2:0]</th>
                        <th>Mem bits</th>
                        <th>Data Reg bits</th>
                        <th>Index bits</th>
                        <th>Opcodes</th>
                    </tr>
                    <tr>
                        <td>Standard scalar FP</td>
                        <td>x</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>FLH/FSH</td>
                    </tr>
                    <tr>
                        <td>Standard scalar FP</td>
                        <td>x</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>32</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>FLW/FSW</td>
                    </tr>
                    <tr>
                        <td>Standard scalar FP</td>
                        <td>x</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>FLD/FSD</td>
                    </tr>
                    <tr>
                        <td>Standard scalar FP</td>
                        <td>x</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>FLQ/FSQ</td>
                    </tr>
                    <tr>
                        <td>Vector 8b element</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxE8/VSxE8</td>
                    </tr>
                    <tr>
                        <td>Vector 16b element</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxE16/VSxE16</td>
                    </tr>
                    <tr>
                        <td>Vector 32b element</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxE32/VSxE32
    
                        </td>
                    </tr>
                    <tr>
                        <td>Vector 64b element</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxE64/VSxE64
    
                        </td>
                    </tr>
                    <tr>
                        <td>Vector 8b index</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxEI8/VSxEI8</td>
                    </tr>
                    <tr>
                        <td>Vector 16b index</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxEI16/VSxEI16</td>
                    </tr>
                    <tr>
                        <td>Vector 32b index</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>16</td>
                        <td>FLEN</td>
                        <td>-</td>
                        <td>VLxEI32/VSxEI32</td>
                    </tr>
                    <tr>
                        <td>Vector 64b index</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>SEW</td>
                        <td>SEW</td>
                        <td>64/td>
                        <td>VLxEI64/VSxEI64</td>
                    </tr>
                </table>
                <div>&emsp;&emsp;</div>
                <div>
                    &emsp;&emsp;Mem bits is the size of each element accessed in memory.
                </div>
                <div>
                    &emsp;&emsp;Data reg bits is the size of each data element accessed in register.
                </div>
                <div>
                    &emsp;&emsp;Index bits is the size of each index accessed in register.
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
}