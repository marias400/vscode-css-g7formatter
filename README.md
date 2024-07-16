# VS Code CSS G7 Formatter Extension

Esta extensión para Visual Studio Code permite formatear archivos CSS según un orden predefinido de propiedades.

## Características

- **Formateo Automático:** Formatea automáticamente archivos CSS según el orden de propiedades definido.
  
- **Personalización:** Se puede ajustar el orden de las propiedades en la configuración de la extensión.

## Cómo Usar

1. Abrir un archivo CSS en Visual Studio Code.
2. Seleccionar el texto CSS que se desee formatear o dejar la selección vacía para formatear todo el archivo.
3. Presionar `Ctrl+Shift+P` (Windows/Linux) o `Cmd+Shift+P` (Mac) para abrir el menú de comandos.
4. Escribir "Formatear CSS usando G7" y seleccionar la opción del mismo nombre para aplicar el formateo.

## Configuración

Se puede personalizar el orden de formateo de las propiedades CSS modificando la configuración de la extensión. Para hacerlo, se abre la paleta de comandos (`Ctrl+Shift+P` o `Cmd+Shift+P`) para buscar "Preferencias: Abrir configuración (JSON)". Luego, se añade o modifica el siguiente fragmento en el archivo `settings.json`:

```json
{
  "cssFormatter.propertyOrder": [
    "width", "height", "margin", "padding", "background-color", "color", "font-size", "font-family",
    "border", "border-radius", "box-shadow", "text-align", "display", "position", "top", "left"
    // Aca se añade o modifica el orden según se desee
  ]
}
```

## Licencia

Este proyecto está bajo la Licencia MIT. Consultar el archivo LICENSE para más detalles.