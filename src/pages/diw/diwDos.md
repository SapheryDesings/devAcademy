---
layout: ../../layouts/PlantillaMd.astro
---

## Tema 2.- Uso de estilos

Las hojas de estilo son la parte del diseño de aplicaciones web.

Ahorran tiempo al diseñar sitios web y se pueden conseguir efectos potentes soportados por los navegadores.

Una ventaja es que permiten separar el contenido (información) del diseño (apariencia), lo que permite un mantenimiento más eficiente.

Resumiendo, se utiliza la etiqueta *body* para definir la *estructura* HTML, y por otro, un *archivo externo* o en el *head* para definir la apariencia. Así es posible modificar el contenido sin afectar al aspecto y viceversa.

Otra ventaja es la adaptación a los diferentes dispositivos, móvil, tablet, pc, desktop..


### 2.1. Estilos en línea basados en etiquetas, en clases y en identificadores

CSS está formado por reglas.

#### Selectores basados en etiquetas

Para definir una regla tenemos que usar las propias etiquetas del documento HTML como selectores.

```
selector { atributo: valor }
```

El *atributo* son las características que se pretenden modificar del *selector*.

```css
h1 { color: blue }
```

Para hacer referencia a un selector, lo definimos sin las llaves < >, la declaración debe ir entre { }.

Es posible definir atributos para varios selectores y varios atributos.

```css
selector1, selector2 { atributo1: valor1; atributo2: valor2}
```

o aplicar el mismo estilo a dos selectores diferentes

```css
h1, h2 { color: blue}
```

Dentro del fichero HTML las declaraciones las insertaremos entre las etiquetas style y /style que se incluirá en el head.

```css
<head>
  <style>
    h1 { color:blue; background-color:red }
  </style>
</head>
```

#### Selectores basados en clases

Si lo que pretendemos es establecer estilos diferentes para unos mismos selectores podemos usar clases. Así es posible definir un estilo directamente a una etiqueta HTML. Hay diferentes tipos:

+ Las clases asociadas directamente a una etiqueta HTML:
```css
h1.color1 { color: green }
```
+ Las clases genéricas aplicadas a cualquier etiqueta:
```css
.color2 { color: blue }
```

Las clases asociadas a las etiquetas HTML se definen de la siguiente manera:

```css
Etiqueta.clase { atributo:valor; atributo:valor;... }
```

Esta alternativa permite aplicar a una misma etiqueta diferentes estilos.

```css
<head>
  <style>
    h1.color1 { color:green }
    h1.color2 {color:blue}
    h1.color3 {color:red}
  </style>
</head>
```

Para indicar a una etiqueta h1 qué estilo se pretende aplicar:

```css
<body>
  <h1 class=”color1”> Texto color verde </h1>
  <h1 class=”color2”> Texto color azul </h1>
  <h1 class=”color3”> Texto color rojo </h1>
</body>
```

Las clases genéricas no se aplican directamente a una etiqueta HTML:

```css
nombreclase { atributo:valor; atributo:valor;... }
```

Así, una clase es posible aplicarla a cualquier elemento:

```css
<p class=”color1”> … </p>
<h1 class=”color1”> … </h1>
<div class=”color1”> … </div>
```

Se realiza mediante la siguiente declaración:

```css
<head>
  <style>
    .color1 { color:green }
    .color2 {color:blue}
    .color3 {color:red}
  </style>
</head>
```

Es posible aplicarla de la siguiente forma:

```css
<body>
  <h1 class=”color1”> Texto color verde </h1>
  <p class=”color2”> Texto color azul </p>
  <h2 class=”color3”> Texto color rojo </h2>
</body>
```

Otra de las ventajas es que permiten asignar más de una clase a la misma etiqueta, siempre y cuando no haya conflicto entre ellas:

```css
<head>
  <style>
    .color2 { color:blue }
    .fondo1 {background-color:red}
  </style>
</head>
```

Se aplica de la siguiente forma:

```css
<h1 class=”color2 fondo1”> Título en color azul y
fondo rojo </h1>
<p class=”color2”> Párrafo en color rojo y fondo
predefinido por la página </p>
```

#### Selectores basados en identificadores

Este tipo de selector tiene una sintaxis parecida, pero con la diferencia de que estos *solo* pueden utilizarse por un *único* elemento.
```css
Etiqueta#nombre {atributo:valor; atributo:valor; …}

#nombre {atributo:valor; atributo:valor; …}
```

Para indicar a una etiqueta qué estilo se pretende aplicar se utiliza el atributo *id* en la etiqueta:
```css
<head>
  <style>
    #color1 { color:green }
  </style>
</head>

<body>
  <p id=”color1”> El párrafo se muestra en color
  verde </p>
</body>
```

Las clases se utilizarán cuando se pretende aplicar un estilo a *uno o más elementos*, mientras que los identificadores se definirán para aplicar en un *único elemento*.

Los identificadores se utilizan para bloques o secciones principales, como la cabecera, el contenido y el pie de página.

Otro uso es definir un enlace hacia un elemento de la página.
```css
<head>
  <style>
    #color1 {
      background: #CCC;
      border: 1px solid black;
      margin: 10px;
    }
  </style>
</head>

<body>
  <div id=”cabecera”> Cabecera de la página </div>
  …
  …
  <a href=”#cabecera”> Ir a la cabecera </a>
</body>
```
#### Agrupación de selectores

Es posible agrupar los selectores o anidarlos para conseguir un fichero más optimizado, concreto y definido, que resulte más sencillo detectar posibles errores y solucionarlos.
```css
Selector1, selector2 {atributo1:valor1; atributo2:valor2; …}
```

Así, es posible aplicar el mismo estilo a un conjunto de selectores:
```css
h1, p, h2 {font-family:Verdana}
```

Es posible agrupar los selectores de clase y los de identificador aplicando las siguientes reglas:
```css
.color1, .color2, .color3 {font-family:Verdana}
```
```css
#cabecera, #contenido, #piepagina {font-family:Verdana}
```

Es posible realizar una agrupación con los diferentes grupos de selectores:
```css
#cabecera, h1, .color1 {font-family:Verdana}
```

#### Anidamiento de selectores

Para un estilo más definido y concreto, es posible anidar los selectores permitiendo aplicar un estilo a un elemento dependiendo de los elementos de su alrededor.

##### Selector anidado común

Se aplica sobre los elementos que se encuentran en el interior de otros elementos:
```css
Selector1 selector2 {atributo1:valor1; atributo2:valor2; …}
```
Entre los selectores *hay un espacio en blanco*.

##### Selector hijo anidado

En el anterior se comporta de la misma manera independientemente de si tiene una etiqueta anterior. Si queremos restringir las etiquetas y solamente se muestre la etiqueta situada dentro sin ningún elemento entre medias:
```css
Selector1 > selector2 {atributo1:valor1; atributo2:valor2; …}
```

#### Atributos

Tenemos cuatro formas diferentes de seleccionar:

+ [atributo]: selecciona los elementos que tienen ese mismo atributo, sin importar su valor.
+ [atributo = valor]: selecciona los elementos que tienen ese mismo atributo con el valor que se pasa.
+ [atributo ~= valor]: selecciona los elementos que tienen ese mismo atributo con al menos un valor igual al especificado.
+ [atributo|= valor]: selecciona los elementos que tienen ese mismo atributo y la palabra debe comenzar por el valor que se pasa.

#### Pseudoclases

Permite seleccionar elementos según las indicaciones del usuario. Las más frecuentes son:

+ :link: los enlaces que nunca se visitan.
+ :visited: los enlaces que se han visitado una vez como mínimo.
+ :hover: los elementos indicados por el usuario, pero sin necesidad de ser activados.
+ :active: los elementos que se activan.
+ :focus: los elementos que tienen el foco.
```css
a:visited { color: black;}
a:active { color: red;}
```

#### Pseudoelementos

Algunos de los pseudoelementos principales son:

+ :first-line: para referirnos a la primera línea de un texto.
+ :first-letter: para referirnos a la letra de un texto.
+ :before: genera texto antes del contenido de un elemento.
+ :after: genera texto después del contenido de un elemento.

Para poder utilizar estos pseudoelementos se utilizará "::" en lugar de ":".
```css
p::first-letter { color:red; }
p::first-line { color: blue; }
h1::after { content:”.”; }
h1::before { content:=”Ejemplo de ”; }

<div id=”ejemplo”>
  <h1>Pseudo-elementos</h1>
  <p> Ejemplo de código </p>
</div>
```

Es posible modificar el texto del título cuando el usuario seleccione una parte, para ello se añadirá un nuevo pseudoelemento ::selection.
```css
h1::selection

{
  color:green;
  background: yellow;
}
```

### 2.2. Crear y vincular hojas de estilo

Es posible insertar las propiedades de estilo de tres formas diferentes:

+ **CSS en línea:** el atributo **style** se encuentra en la misma línea de código que un elemento, afectado únicamente a este elemento.
```css
<p> Esto es un párrafo normal </p>
<p style=”background-color:red;”> Esto es un párrafo
con estilo </p>
```

+ **CSS interno:** la etiqueta **style** está situada al principio del documento, concretamente entre las etiquetas *head*, afectando de forma global a los elementos de esa misma página.
```css
<head>
  <title> Ilerna Online </title>
  <style>
    p { background-color:red; }
  <style>
</head>
```

+ **CSS externo:** los estilos están situados en un archivo externo al documento. Para poder hacer referencia a este archivo, se tiene que incluir un enlace link hacia la hoja de estilo. Las propiedades que se definan en esta hoja se aplican en todos los documentos que hagan referencia a la misma hoja.
```css
<head>
  <title> Ilerna Online </title>
  <link rel=”stylesheet” type=”text/css” href=”…/ruta/hoja/estilo.css”>
</head>
```

Es posible que una misma propiedad esté situada en diferentes sitios: si no entran en conflicto, el navegador aplicará todos los estilos. Pero existe la posibilidad de que entren en conflicto, en este caso, se aplicarán según su orden de preferencia:

1. Primero se aplicarán los estilos en línea.
2. En segundo lugar, se aplicarán los estilos internos.
3. Por último, se aplicarán los estilos situados en una hoja externa.

En un estilo en línea tiene la máxima prioridad, y al aplicarlo sobre un elemento anulará los estilos internos y externos.

Otra forma que tenemos de unir archivos es mediante la regla **@import**.
```css
<head>
  <title> Ilerna Online </title>
    <style>
      @import “…/css/estilo.css”;
    <style>
```

> En las tres formas definidas para insertar una propiedad de estilo, en caso de que se intente aplicar un estilo diferente al mismo elemento, **se aplicará la última regla indicada**.

Si queremos que una instrucción tenga la mayor prioridad y que las siguientes instrucciones no puedan modificarla. Para ello se utilizará la palabra reservada **!important**.
```css
<head>
  <title> Ilerna Online </title>
    <style>
      p { background-color:red !important; }
    <style>
</head>
```

### 2.3. Herramientas y test de verificación

Para que los desarrolladores puedan comprobar que los estilos cumplen el estándar, el consorcio de estándares **3WC** proporciona herramientas para validar tanto HTML como CSS.

Su enlace es https://jigsaw.w3.org/css-validator/

Si en el proceso no se encuentra ningún error es posible incluir un icono que certifique que se cumplen dichos entándares.

### 2.4. Guía de estilo

Hemos definido la guía de estilos como el documento de ayuda para diseñadores y desarrolladores, que ayuda a tomar decisiones en los aspectos relacionados con el diseño web. Recoge tanto los aspectos de combinación de color, texto o tipo de letra utilizados como las características de cada página.

La guía también detalla la implementación de las clases de CSS y la forma en la que se ha desarrollado.