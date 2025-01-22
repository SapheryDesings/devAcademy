Sí, existen varias bibliotecas y enfoques en JavaScript que pueden ayudarte a gestionar las etiquetas `<pre>` o `<code>` en HTML, especialmente si deseas manipular o mejorar su funcionalidad, como resaltar sintaxis, formatear código o hacer que el contenido sea interactivo.

Algunas de las bibliotecas más populares son:

### 1. **Prism.js**
[Prism.js](https://prismjs.com/) es una librería ligera de resaltado de sintaxis para código HTML, JavaScript, CSS y muchos otros lenguajes. Es muy útil si estás trabajando con etiquetas `<pre><code>` y necesitas resaltar el código de una manera sencilla y eficiente.

- **Características principales**:
  - Resaltado de sintaxis para una gran variedad de lenguajes.
  - Temas de color configurables.
  - Funciona bien con etiquetas `<pre><code>`.
  - Soporte para plugins adicionales como el resaltado de líneas, autocompletado de código, etc.

- **Uso básico**:
  1. Incluye el archivo CSS y JS de Prism en tu HTML.
  2. Coloca el código dentro de las etiquetas `<pre><code class="language-javascript">...</code></pre>`.
  3. Prism aplicará automáticamente el resaltado de sintaxis.

- **Ejemplo**:
  ```html
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.css" rel="stylesheet"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.js"></script>
  
  <pre><code class="language-javascript">
    const greet = () => console.log('Hello, world!');
  </code></pre>
  ```

### 2. **Highlight.js**
[Highlight.js](https://highlightjs.org/) es otra librería muy popular para resaltar código en páginas web. Soporta una amplia gama de lenguajes de programación y es compatible con las etiquetas `<pre><code>`, y permite agregar resaltado automático de sintaxis.

- **Características principales**:
  - Resalta sintaxis automáticamente.
  - Soporta muchos lenguajes y temas de colores.
  - Es fácil de integrar en proyectos con solo incluir los archivos necesarios.

- **Uso básico**:
  1. Incluye los archivos CSS y JS de Highlight.js.
  2. Usa las etiquetas `<pre><code>` para envolver tu código y resaltar automáticamente.

- **Ejemplo**:
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

  <pre><code class="javascript">
    const greet = () => console.log('Hello, world!');
  </code></pre>

  <script>hljs.highlightAll();</script>
  ```

### 3. **CodeMirror**
[CodeMirror](https://codemirror.net/) es un editor de código que permite crear experiencias interactivas para trabajar con código. Aunque está más orientado a la creación de editores de código, también puedes usarlo para manejar `<pre><code>` y convertir estas etiquetas en áreas de texto interactivas con resaltado de sintaxis.

- **Características principales**:
  - Ofrece un editor de código interactivo con resaltado.
  - Permite resaltar la sintaxis para una amplia gama de lenguajes.
  - Ideal para sitios o aplicaciones donde los usuarios necesitan editar código.
  
- **Uso básico**:
  1. Incluye los archivos de CodeMirror en tu proyecto.
  2. Usa la API de CodeMirror para transformar un `<pre><code>` en un área de edición de código interactiva.

- **Ejemplo**:
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/javascript/javascript.min.js"></script>

  <textarea id="editor">const greet = () => console.log('Hello, world!');</textarea>

  <script>
    var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      mode: "javascript"
    });
  </script>
  ```

### 4. **Prettier**
[Prettier](https://prettier.io/) es una herramienta de formateo de código que puede ayudar a mantener un formato coherente y limpio para tu código dentro de las etiquetas `<pre><code>`. Aunque no es específicamente una librería para resaltar sintaxis, es útil si deseas formatear el código para que se vea más legible.

- **Características principales**:
  - Formatea el código automáticamente.
  - Compatible con muchos lenguajes de programación.
  - Se puede integrar fácilmente con herramientas de desarrollo como editores de texto y sistemas de construcción.

- **Uso básico**:
  1. Instala Prettier en tu proyecto.
  2. Usa Prettier para formatear el código antes de mostrarlo dentro de las etiquetas `<pre><code>`.

- **Ejemplo**:
  ```bash
  npm install --save-dev prettier
  ```

  Luego, puedes usar Prettier para formatear tu código y mostrarlo de forma legible en el navegador.

---

### Conclusión

Dependiendo de tus necesidades, puedes elegir entre varias opciones para gestionar el contenido dentro de las etiquetas `<pre><code>`. Aquí hay un resumen:

- **Prism.js** y **Highlight.js** son excelentes opciones si necesitas **resaltar sintaxis** de manera sencilla.
- **CodeMirror** es una opción robusta si necesitas **editar** código dentro de un área interactiva.
- **Prettier** es útil para **formatear el código** y asegurar que siempre siga las mejores prácticas de estilo.

Cada librería tiene su enfoque y caso de uso, por lo que la elección dependerá del tipo de proyecto y la experiencia de usuario que desees ofrecer.