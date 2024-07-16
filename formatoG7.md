# **Formato G7 para hojas de estilo CSS**

Las propiedades de cada selector serán ordenadas de acuerdo al orden proporcionado en la siguiente tabla:

| **#** | **Categoría**                         | **Propiedades**                                                                                                              |
|-------|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
|   1   | Propiedades de tamaño y forma         | width, height, max-width, max-height, min-width, min-height                                                                  |
|   2   | Propiedades de fondo                  | background-color, background-image, background-repeat, background-position, background-size                                  |
|   3   | Propiedades de color                  | color, opacity                                                                                                               |
|   4   | Propiedades de relleno y margen       | padding, margin                                                                                                              |
|   5   | Propiedades de fuente                 | font-family, font-size, font-weight, font-style, font-variant, line-height, text-align, text-transform, text-decoration      |
|   6   | Propiedades de borde                  | border, border-width, border-style, border-color, border-top, border-right, border-bottom, border-left, border-radius        |
|   7   | Propiedades de sombra                 | box-shadow, text-shadow                                                                                                      |
|   8   | Propiedades de visualización          | display, visibility, overflow, position, top, right, bottom, left, z-index                                                   |
|   9   | Propiedades de diseño de flexbox      | flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content, order, flex-grow, flex-shrink, flex-basis |
|  10   | Propiedades de transición y animación | transition, animation                                                                                                        |
|  11   | Propiedades misceláneas               | cursor, user-select, pointer-events, white-space, word-wrap, word-break, text-overflow, resize, outline, appearance          |

Las propiedades que no aparezcan en esta tabla se ubicarán al final de la categoría correspondiente o una propia en caso de no estar listada, siguiendo un orden según su relevancia.

### Ejemplo

```css
.my-element {
  /* Tamaño y forma */
  width: 300px;
  height: 200px;

  /* Fondo */
  background-color: #f0f0f0;
  background-image: url("my-image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* Color */
  color: #333;
  opacity: 0.8;

  /* Relleno y margen */
  padding: 20px;
  margin: 10px auto;

  /* Fuente */
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;

  /* Borde */
  border: 1px solid #ccc;
  border-radius: 5px;

  /* Sombra */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  /* Visualización */
  display: block;
  visibility: visible;
  overflow: hidden;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  /* Transición y animación */
  transition: all 0.3s ease;
  animation: my-animation 2s linear infinite;

  /* Propiedad que no aparece en la lista */
  list-style-type: none;
}
```