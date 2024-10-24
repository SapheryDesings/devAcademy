---
layout: ../../layouts/PlantillaMd.astro
---
# Desarrollo de Interfaces Web

## Tema 1.- Planificación de interfaces gráficas

### 1.1. Elementos de diseño: Percepción visual

Cuando nos disponemos a desarrollar un sitio web, la primera impresión que causa es la parte visual. El diseñador debe pensar en los valores que va asignar a cada elemento y debe valorar la relación que va a existir entre sus diseños y cómo se perciben.

**Un diseñador debe buscar siempre un equilibrio entre los elementos que forman la interfaz para conseguir un sentido gráfico de su diseño que facilite la comunicación eficaz.**

No es conveniente utilizar demasiados elementos innecesarios ya que dificulta la compresión del mensaje. Hay que buscar soluciones que se adapten a la información que se pretende comunicar.

Primero, se determinará el área de diseño, al que se asignará un tamaño para determinar el espacio del que se dispone para la composición gráfica:

+ Puede estar formada por uno o varios elementos.
+ Puede estar compuesta por texto o solamente de imágenes.
+ Puede poseer espacios en blanco o combinar diferentes elementos gráficos.
+ Debe ser lo más adecuada posible a lo que se quiere comunicar.

### 1.2. Color, tipografía, iconos

Son algunos de los elementos más destacados en las composiciones, los tipos y la cantidad de estos elementos, así como su variación, van a depender de cuál sea la información que pretendemos transmitir.

#### Color

Los colores se basan en el estándar **RGB** *(red, green y blue)*. Se puede conseguir cualquier otro color mediante la combinación de estos tres colores. Su intensidad se representa en números hexadecimales que van desde el 00 hasta el FF. Para indicar que se trata de un valor de color, se pondrá una almohadilla delante (#).

| Nombre | HEX     | RGB     |
|--------|---------|---------|
|Rojo    | #FF0000 | 255,0,0 |
|Verde   | #00FF00 | 0,255,0 |
|Azul    | #0000FF | 0,0,255 |
|Negro   | #000000 | 0,0,0   |
|Blanco  | #FFFFFF | 255,255,255 |

Es posible jugar con la luminosidad y obtener diferentes colores con la combinación de múltiples valores hexadecimales. Es recomendable utilizar los colores hexadecimales, aunque tambien es posible hacer referencia a su nombre en inglés, Ej.: black, white, blue, yellow, red.

**La combinación de colores requiere de un carácter artístico del desarrollador** que no siempre va a tener, por esta razón, un proyecto suele estar formado por varios desarrolladores.

También, existen **programas informáticos** que realizan la acción de combinar los colores de forma automática y armónica. Están orientadas a facilitar el desarrollo, sin necesidad de contar con un diseñador.

Estas herramientas incorporan:

+ Buscar imágenes que satisfagan un patrón concreto de colores.
+ Obtener un código a partir de un color seleccionado.
+ Crear combinaciones a partir de un color determinado.

Algunos ejemplos son:

+ Colorpix
+ Color Schemer Online
+ What Is Color

#### Tipografía

Son las **Fuentes**, un aspecto muy importante. Para elegir una buena tipografía, es necesario tener en cuenta una serie de aspectos, como su tamaño, el color, el espacio entre letras, el interlineado y otras características, ya que estas pueden interferir en un usuario a la hora de interpretar nuestro contenido. No es aconsejable usar más de tres funtes en un mismo sitio web.

Existen muchas propiedades para modificar la tipografía.

|Propiedad    |Valor                |Significado        |
|-------------|---------------------|-------------------|
|font-family  |fuente               |Nombre de la fuente|
|font-size    |tamaño               |Tamaño de la fuente|
|font-style   |normal/italic/oblique|Estilo de la fuente|
|font-weight  |normal/bold/grosor   |Grosor de la fuente|

Es posible que estemos limitados por los distintos navegadores o sistemas operativos, es conveniente la elección de un tipo de letra generalizado para obtener siempre el mismo aspecto.

#### Iconos

Es la técnica mediante la cual se designan imágenes gráficas (generalmente pequeñas) con el objetivo de relacionar acciones en concreto con ellas, convirtiendose en uno de los elementos gráficos más utilizados.

Así evitaremos escribir gran cantidad de texto para explicar una determinada acción, ya que podemos representar con un pictograma que determine su significado.

Al igual que con la tipografía, la **estandarización de los iconos** conseguirá impactar mejor al usuario. La mala interpretación de estos iconos es un inconveniente, por ello, la **elección de las imágenes** es uno de los pasos más importantes.

### 1.3. Interacción persona-ordenador

Midiante la interacción persona-ordenador (IPO) estudiaremos, el intercambio de información existente entre usuario y ordenador. Cuando existe una buena comunicación, el **el intercambio de la información es más eficiciente** por lo que se reducen los errores y conseguimos una mayor satisfacción por parte del usuario.

Los sistemas informáticos son **sistemas interactivos** y su éxito o fracaso depende de la interfaz que exista entre el usuario y el ordenador. Es fundamental que la interfaz gráfica esté diseñada pensando siempre en las necesidades que requiera el usuario.

### 1.4. Interpretación de guías de estilo. Elementos

El diseño de interfaces web está centrado en dos actividades:

+ **Planificación:** qué es lo que se quiere hacer.
+ **Coordinación:** del equipo de desarrollo encargado del diseño.

Nos centraremos en la creación de una **guía de estilo**, es un documento en el que se definen las **pautas junto con las normas de calidad** que debe tener en cuenta una interfaz web para un determinado sitio web. Nos garantizará la coherencia del sitio, aportando diferentes aspectos sobre la calidad de su uso, accesibilidad, diseño gráfico, etc, considerando diferentes aspectos sobre los colores y otros elementos de diseño. Una guía sirve para:

+ Garantizar la coherencia de un sitio web.
+ Aglutinar en torno a un mismo objetivo a todo el conjunto del equipo de trabajo.

Las guías de estilo están dirigidas a aquellas personas que se van a encargar de diseñar y programar la interfaz.

### 1.5. Generación de documentos y sitios web

Los **CMS** *content management systems* o gestores de contenidos. Es frecuente que optemos por crear sitios sin partir de cero. Ej.: Joomla, Drupal u OpenCMS.

Se puede definir como la interfaz que permite controlar una o varias bases de datos donde se encuentra alojado el contenido web. Permite **controlar el contenido y el diseño de forma independiente**.

La utilidad de los sistemas de contenido se basa en que un administrador determinado puede originar distintos contenidos sin necesidad de conocer el tema a fondo.

Los más importantes están basados en tecnología web mediante lenguaje **PHP/HTML** y sistemas de bases de datos **MySQL**. Así se consigue que los CMS sean de código y licencia libres.

### 1.6. Aplicaciones para el desarrollo web

Disponemos de un grán número de herramientas que nos facilitan las tareas de planificar, diseñar, desarrollar y mantener un sitio web. Tipos:

+ **General:** herramienta que se utiliza para aquellos programas que tienen un interés general, para cualquier tipo de usuario.
+ **Diseño:** herramienta utilizada para programas más específicos referentes al desarrollo de las distintas páginas web.
+ **Multimedia:** herramienta que se utilizará cuando sea necesario crear una serie de animaciones para un determinado sitio web.
+ **Programación:** al ser más específicas, estas herramientas van a estar dirigidas a los desarrolladores que van a crear páginas web.
+ **Editores y validadores HTML:** estos programas permiten la edición de código HTML.
+ **Editores y validadores CSS:** herramientas que simplifican la creación, edición y comprobación de un determinado código CSS.

### 1.7. Lenguaje de marcas

