---
layout: ../../layouts/PlantillaMd.astro
---

## Tema 4.- Integración de contenido interactivo

### 4.1. Herramientas para la inclusión de contenido multimedia interactivo

El lenguaje de marcas es el más utilizado para la creación de páginas web por su facilidad de escribir código en cualquier procesador de texto.

#### Editores simples

Cualquier SO dispone de unas herramientas básicas para escribir texto como el Bloc de notas en Windows.

Podemos utilizar esta herramienta _para escribir un código en HTML_ y guardarlo con la extensión .html.

Así podemos crear páginas web de forma sencilla, intuitiva y fácil.

#### Editores avanzados

_Cada vez es más complicada la implementación del código en este lenguaje de marcas._

El código de una página web incorpora numerosas línea de código, interacción con otros lenguajes, incrustaciones de códigos, enlaces externos, etc. Por estas características, cada vez es más complicada la identificación de distintas marcas, y para el desarrollador una tarea compleja.

Para solucionar estos inconvenientes, surgen los **editores de texto avanzado**, con una interfaz amigable y sencilla. Utilizan distintos colores, para diferenciar cada elemento del código, así se facilita la tarea al desarrollador. 

Otra ventaja es que ante cualquier incidencia o error, proporcionan opciones para su fácil identificación.

Ejemplos, **NotePad++** y **Sublime Text**. Son herramientas de código libre.

#### Gestores de lenguajes HTML

Cuando tenemos diseñado el código HTML, el último paso es visualizar el código en cualquier navegador de internet.

> Para crear cualquier página web, solo necesitamos un editor y un navegador web.

### 4.2. Configuración de navegadores

Los navegadores son herremientas para la visualización de las páginas web. Los navegadores deben estar configurados para su visualización, herramientas con Flash, la aplicación Java y otras deben estar instaladas para mostrar las páginas.

### 4.3. Elementos interactivos básicos y avanzados

La interacción se define como _"el proceso que establece un usuario con un dispositivo, sistema u objeto determinado. Es una acción recíproca entre el elemento con el que se interacciona y el usuario."_

El uso de Flash para crear interacciones está en deshuso. Actualmente suele hacer con HTML5, CSS3 y Javascript.

jQuery es una biblioteca de Javascript que permite realizar multitud de acciones, además es libre y de código abierto.

#### Introducción a jQuery

Lo primero es descargar la **librería**, ya sea de forma **comprimida**, más comoda y que ocupa menos espacio, o **descomprimida** para cuando estemos trabajando en desarrollo.

Después lo enlazamos en la página HTML:

```html
<head>
  <script type="text/javascript" src="jquery-3.4.1.min.js"></script>
</head>
```

Siempre debemos usar la siguiente instrucción:

```javascript
$(document).ready(function() (...) );
```

Mediante un lenguaje, debemos tener en cuenta el árbol _DOM_ que se ha generado. Esta instrucción indica que el código jQuery se ejecute cuando el código HTML se ha cargado completamente. Debemos poner atención a las características de la conexión, ya que esta cláusula no espera a que se cargue la imagen en el código HTML. jQuery trabaja con elementos referenciados a través del DOM. **Si los objetos no se han cargado, no se debe poder ejecutar ningún código jQuery**, ya que daría un error.

La función que más utilizaremos será **$()**, similar a _getElementByTagName()_, _getElementsByName()_ y _getElementById()_ usadas en Javascript.

1. Seleccionar ID: $("#miID")
2. Seleccionar todos los elementos < a > de un HTML: $("a")
3. Seleccionar varios elementos, separándolos por una coma: $("#miLinea, a")
4. Selección mediante el nombre de la clase CSS: $(".miCSS")
5. Seleccionar elementos con ciertos atributos: $("a[type]")
6. Usar la selección anterior, pero definiendo algún valor al atributo: $("input[@type-radio]")
7. Seleccionar elementos con el lenguaje XPath. Seleccionar todos los párrafos de un camino: $("/html/body//p")

#### Manejo de eventos

Tendremos multitud de eventos con los que poder interactuar. **Podemos usar un evento de dos formas:**

+ **Pasándole una función** que nos especifique como se comportará. $("p").click(function() {alert($(this).text());})
+ **Sin pasarle una función**, por lo que generará un evento estándar de Javascript. No tendremos que usar el prefijo on. $("p").click()

Eventos importantes:

+ **On()** y **Off()**
  
  Aparecen en la versión 1.7 para sustituir a bind() y unbind().

  Con On() los eventos buscan asociarse al conjunto de elementos seleccionados. La novedad es que se puede asociarse más de un evento separándolos con espacios.

  ```javascript
  $(elements).on(events [,selector][,data], manejador)
  ```
  ```javascript
  $(elements).off(events [,selector][,manejador])
  ```

  Si lo utilizamos sin ningún parámetro, eliminará todos los eventos asociados a dicho elemento. De lo contrario, eliminará uno o varios eventos asociados a un elemento:

  ```javascript
  $("p").off()
  ```

  Al usar off() también podemos indicarle que solo elimine ciertas funciones. Para realizar esto deberemos crear una variable con dicha función y pasarla como parámetro a off().

+ **Toggle()**

  Este método se usa bastante, consiste en realizar dos acciones: se ejecuta cada vez que hacemos un clic sobre el elemento o todas las veces impares, y segunda que se realiza al pulsar por segunda vez o todas las veces pares. Deberemos pasar ambas funciones a través de variables.
  ```javascript
  $("p").toggle(variable1, variable2)
  ```

### 4.4. Ejecución de secuencias

Las sentencias se ejecutan línea por línea. Cuando trabajamos con efectos, la siguiente línea de código se puede ejecutar aunque el efecto no haya finalizado. Esto puede crear errores.

Para evitarlo se puede crear una función callback.

Una **función callback** se ejecuta después de que el efecto haya terminado de ejecutarse. $(selector).hide(speed, callback)

```javascript
$(“button”).click(function(){

  $(“p”).hide(“slow”, function(){ alert(“The paragraph is now hidden”);
  });

});
```

Y sin callback:

```javascript
$(“button”).click(function(){

  $(“p”).hide(1000);
  alert(“The paragraph is now hidden”);

});
```

### 4.5. Comportamientos interactivos. Comportamientos de los elementos

#### Comportamientos de los elementos

##### Efectos básicos

Métodos que podemos usar para realizar efectos visuales de forma básica.

+ **.show([duración][,easing][,callback])**
  
  Nos mostrará el elemento que estaba oculto. Los parámetros que podrá tener són:

    + **Duración:** que podrá ser slow o fast, o un número en milisegundos para indicar el tiempo que se ejecutará.
    + **Easing:** función que usaremos para el tipo de transición. Necesitaremos un plugin para realizar más funciones de transición.
    + **Callback:** función que se inicia una vez finalizada la animación.

  Estos parámetros son opcionales. Ej: $("p").show("fast")

+ **.hide([duración][,easing][callback])**
  
  Similar, solo que realiza la acción opuesta. En vez de mostrar los elementos, los ocultará.

##### Efectos fading (opacidad-transparencia de los elementos)

Es el efecto de desvanecimiento de los elementos. Se juega con la opacidad y la transparencia.

+ **.fadeIn([duración][,easing][,callback])**
+ **.fadeOut([duración][,easing][,callback])**
+ **.fadeToggle([duración][,easing][,callback])**

Los parámetros son los mismos.

+ **fadeIn():** mostrará el elemento con una opacidad gradual (hasta llegar a 1)
+ **fadeOut():** ocultará un elemento con opacidad gradual (hasta llegar a 0)
+ **fadeToggle():** al igual que el evento toggle(), alternará entre aparecer y desvanecer el elemento según hagamos clic sobre él.

Hay otro método llamado **fadeTo()**, _fadeTo(duración, opacidad, [,easing][,callback]).

Determina la opacidad según el valor que le pasemos, entre 0 y 1. Lo hará durante el tiempo que le indiquemos, ya sea en milisegundos, slow o fast.

##### Efectos sliding (desplazamiento)

Tendrá como función desplazar los elementos, permitiéndonos así realizar efectos de plegado o despliegue.

+ **.slideUp([duración][,easing][,callback])**
+ **.slideDown([duración][,easing][,callback])**
+ **.slideToggle([duración][,easing][,callback])**

Estos parámetros serán opcionales.

+ **.slideUp():** recogerá los elementos en altura de forma gradual
+ **.slideDown():** desplegará los elementos en altura de forma gradual
+ **.slideToggle():** alternará el proceso de plegar y desplegar el elemento según los clics realizados sobre él

##### Otros efectos

Además de estos efectos, tendremos algunos que nos harán aumentar las prestaciones de nuestras animaciones.

```javascript
.animate (propiedades, [duración], [,easing], [,callback])
```

La función es animar el elemento según lo que pongamos en _Propiedades_. El resto de los parámtros son los mismos que los vistos anteriormente.

Será mas simple que el método .css(), en .animate() tendremos que pasar valores numéricos en el parámetro Propiedades, ya que no podremos animar con valores que no sean numéricos.

```javascript
.delay(duración [,NombreCola])
```

Retrasará la animación de los elementos en una estructura cola según la duración que le indiquemos.

+ **Duración:** será medida en milisegundos y le indicaremos el tiempo que se retrasará la animación antes de comenzar la siguiente.
+ **Nombre Cola:** se referirá a una cadena que contendrá los elementos que se retrasarán.

Otro elemento será **stop()**, que parará la animación si está en proceso.

#### Comportamientos interactivos

Efectos disponibles para realizar con el ratón y con el teclado y los que están asociados a las ventanas.

##### Eventos de ratón

Se realizarán cuadno se utilice el puntero del ratón sobre un elemento.

```javascript
Elemento.Evento (función (handler))
```

Sobre ese elemento, se realizará el evento seleccionado y ejecutará la función que le pasemos a dicho evento.

+ **.click()** Se realizará cuando el usuario se coloque sobre un elemento y presione clic izquierdo con el ratón y lo levante, todo ello en el mismo objeto. Todos los elementos HTML pueden recibir este evento.
+ **.dbclick()** Se lanzará después de realizar doble clic.
+ **.focusin()** Cuando un objeto recibe el foco.
+ **.focusout()** Contrario al anterior, se lanzará cuando se pierde el foco.
+ **.mousedown()** Será similar a _click()_, solo que se lanzará cuando hagamos clic sobre el objeto, no hará falta que lo levantemos para que se ejecute.
+ **.mouseup()** Se lanzará después de levantar el botón del ratón.
+ **.mouseenter()** Se lanzará cuando el puntero entra en el objeto, no hace falta que hagamos clic sobre él.
+ **.mouseleave()** Opuesto al anterior, se lanzará cuando sale el puntero del objeto.
+ **.mousemove()** Se ejecutará siempre que se mueva el puntero dentro del objeto.
+ **.mouseover()** Será parecido a _mouseenter()_, pero se diferencia en que se ejecutará cuando hay elementos anidados.
+ **.mouseout(). Opuesto a _mouseover()_. Parecido a _mouseleave()_ pero con diferencia de objetos anidados de _mouseover()_.

##### Eventos de teclado

Se usarán las teclas del teclado para hacer que se ejecuten estos eventos.

```javascript
Elemento.Evento (función(handler))
```

Al igual que el anterior estructura de ratón, sobre el elemento, se realizará el evento seleccionado y ejecutará la función.

+ **.focusin()** Cuando un objeto recibe el foco.
+ **.focusout()** Contrario al anterior. Se lanzará cuando pierde el foco.
+ **.keydown()** Se lanzará cuando se presione una tecla y el elemento posee el foco. Si queremos saber qué tecla se ha presionado, se examina el objeto _event_ que le pasamos la función. Con la propiedad _.which_ de _event_ recuperaremos el código de la tecla que se presiona. Si queremos recuperar el texto que se introduce, usaremos **.keypress()**.
+ **.keyup()** Se ejecutará cuando se deja de presionar una tecla y el elemento posee el foco.
+ **.keypress()** Se ejecutará cuando presionemos una tecla, pero a diferencia de _.keydown()_, este evento registrará cada carácter que introduzcamos, mientras que el anterior solo lo hará una sola vez aunque lo dejemos presionado.

##### Eventos de ventana

+ **.scroll()** propiedad para que se pueda visualizar la barra de desplazamiento en la aplicación.
+ **.resize()** se ejecutará cuando a una ventana le cambiamos el tamaño.