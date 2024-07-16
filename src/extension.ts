import * as vscode from 'vscode';
import { reorderProperties } from './formatter';

export function activate(context: vscode.ExtensionContext) {
    console.log('La extensión "CSS G7 Formatter" está activada.');

    let disposable = vscode.commands.registerCommand('extension.formatG7CSS', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            let textToFormat = selection.isEmpty
                ? document.getText()
                : document.getText(selection);

            // Obtener la configuración del usuario para el orden de las propiedades CSS
            const propertyOrder = vscode.workspace.getConfiguration().get('cssG7Formatter.propertyOrder') as string[];

            // Formatear el texto utilizando la función reorderProperties
            const formattedText = reorderProperties(textToFormat, propertyOrder);

            // Reemplazar el texto en el editor con el texto formateado
            editor.edit(editBuilder => {
                if (selection.isEmpty) {
                    const documentStart = new vscode.Position(0, 0);
                    const documentEnd = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
                    editBuilder.replace(new vscode.Range(documentStart, documentEnd), formattedText);
                } else {
                    editBuilder.replace(selection, formattedText);
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('La extensión "CSS G7Formatter" está desactivada.');
}