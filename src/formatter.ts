import * as vscode from 'vscode';

const defaultPropertyOrder = [
    'width', 'height', 'max-width', 'max-height', 'min-width', 'min-height',
    'background-color', 'background-image', 'background-repeat', 'background-position', 'background-size',
    'color', 'opacity',
    'padding', 'margin',
    'font-family', 'font-size', 'font-weight', 'font-style', 'font-variant', 'line-height', 'text-align', 'text-transform', 'text-decoration',
    'border', 'border-width', 'border-style', 'border-color', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-radius',
    'box-shadow', 'text-shadow',
    'display', 'visibility', 'overflow', 'position', 'top', 'right', 'bottom', 'left', 'z-index',
    'flex-direction', 'flex-wrap', 'flex-flow', 'justify-content', 'align-items', 'align-content', 'order', 'flex-grow', 'flex-shrink', 'flex-basis',
    'transition', 'animation',
    'cursor', 'user-select', 'pointer-events', 'white-space', 'word-wrap', 'word-break', 'text-overflow', 'resize', 'outline', 'appearance'
];

/**
 * Función para formatear el contenido CSS según el orden de las propiedades definido.
 * @param cssContent El contenido CSS a formatear.
 * @param propertyOrderInc El orden personalizado de las propiedades CSS.
 * @returns El CSS formateado según el orden de propiedades.
 */

export function reorderProperties(cssContent: string, propertyOrderInc?: string[]): string {
    
    const propertyOrder = propertyOrderInc || defaultPropertyOrder;

    const blockPattern = /(@media[^{]+\{[^{}]*\}|[^{}]+)\s*\{([^{}]*)\}/g;

    function reorderSingleBlock(match: string, selector: string, properties: string): string {
        if (properties) {
            const propertiesList = properties.split(';').map(prop => prop.trim()).filter(prop => prop !== '');

            // Reordenar las propiedades según propertyOrder
            const orderedProperties: string[] = [];
            propertyOrder.forEach(prop => {
                const matchingProp = propertiesList.find(p => p.startsWith(prop + ':'));
                if (matchingProp) {
                    orderedProperties.push(matchingProp);
                }
            });

            // Agregar las propiedades que no están en propertyOrder
            propertiesList.forEach(prop => {
                if (!orderedProperties.includes(prop)) {
                    orderedProperties.push(prop);
                }
            });

            // Reconstruir el bloque con las propiedades ordenadas y conservando saltos de línea
            return `${selector} {\n    ${orderedProperties.join(';\n    ')};\n}`;
        } else {
            return `${selector} {}`;
        }
    }
    const reorderedCSS = cssContent.replace(blockPattern, reorderSingleBlock);

    return reorderedCSS;
}