¡Por supuesto! Aquí tienes una lista de ejercicios para practicar **TypeScript**, que van desde lo más básico hasta conceptos más avanzados. Estos ejercicios te ayudarán a afianzar tus conocimientos sobre tipado estático, interfaces, clases, genéricos y más características de TypeScript.

---

### **Ejercicios Básicos:**

1. **Variables y Tipos Básicos**
   - Declara una variable `name` de tipo `string` y asígnale tu nombre.
   - Declara una variable `age` de tipo `number` y asigna tu edad.
   - Crea una variable `isActive` de tipo `boolean` y asigna un valor `true`.

2. **Tipos de Datos y Operadores**
   - Declara dos variables `x` y `y` de tipo `number`. Suma ambos valores y muestra el resultado.
   - Crea una función `multiply` que reciba dos números y devuelva su multiplicación.
   - Crea una función que reciba dos números y devuelva un `string` que diga si el primer número es mayor, menor o igual al segundo.

3. **Tipado de Arrays**
   - Declara un arreglo de números (`number[]`) que contenga los valores `1, 2, 3, 4, 5`, y muestra la suma de todos los elementos.
   - Crea un arreglo de cadenas (`string[]`) que contenga los nombres de tus amigos y muestra el nombre en la posición 2 (índice 1).

4. **Funciones con Tipos Específicos**
   - Escribe una función llamada `concatStrings` que reciba dos parámetros de tipo `string` y devuelva la concatenación de ambos.
   - Crea una función `greet` que reciba un nombre como `string` y un año de nacimiento como `number`, y devuelva un mensaje saludando a la persona con su edad calculada.

---

### **Ejercicios Intermedios:**

5. **Interfaces**
   - Crea una interfaz `Persona` con propiedades `nombre` (string), `edad` (number) y `profesión` (string). Luego, crea un objeto que cumpla con esa interfaz y muestra sus propiedades.
   - Escribe una función `describePersona` que reciba un objeto de tipo `Persona` y devuelva una cadena con una descripción de la persona (por ejemplo, "Juan tiene 30 años y es ingeniero").

6. **Union Types (Tipos Unión)**
   - Crea una función `getLength` que reciba un parámetro que pueda ser un `string` o un `array` de `string` y devuelva la longitud de dicho parámetro.
   - Declara una variable `value` que pueda ser un `string` o un `number`. Escribe un condicional que verifique el tipo de `value` y realice una acción diferente según sea `string` o `number`.

7. **Tipos Literales**
   - Crea una función `chooseColor` que reciba como parámetro un valor de tipo `"red"`, `"green"` o `"blue"`, y muestre un mensaje diferente para cada color.
   - Escribe una función que reciba un valor de tipo `"yes"` o `"no"` y retorne una respuesta adecuada.

8. **Enums**
   - Crea un `enum` llamado `Status` con los valores `Active`, `Inactive` y `Pending`. Usa este `enum` en una variable y muestra el valor.
   - Define un `enum` para los días de la semana (`Monday`, `Tuesday`, ..., `Sunday`) y muestra el día de la semana correspondiente al número 3.

9. **Tuplas**
   - Declara una tupla `person` con el tipo `[string, number]` que contenga un nombre y una edad, y muestra ambos valores.
   - Crea una tupla que contenga una fecha (`Date`), un `string` y un `boolean`. Accede a cada uno de los elementos de la tupla.

---

### **Ejercicios Avanzados:**

10. **Clases y Herencia**
    - Crea una clase `Animal` con una propiedad `name` y un método `speak()`. Luego, crea una clase `Dog` que extienda `Animal` y sobrescriba el método `speak()` para mostrar un mensaje específico para los perros.
    - Define una clase `Car` con propiedades `make`, `model` y `year`. Añade un método `getCarInfo()` que devuelva la información del coche en un formato de texto.

11. **Modificadores de Acceso**
    - Crea una clase `BankAccount` con las propiedades `balance` y `accountNumber`, y un método `deposit(amount: number)`. Usa los modificadores `private` y `public` para proteger el acceso a `balance` y permitir la actualización solo a través del método `deposit`.

12. **Genéricos**
    - Crea una función genérica `identity<T>` que reciba un parámetro de cualquier tipo y lo devuelva. Asegúrate de que la función mantenga el tipo del parámetro recibido.
    - Escribe una función genérica `combine<T, U>` que reciba dos parámetros de tipos diferentes `T` y `U`, y devuelva un arreglo con ambos valores.

13. **Tipos Condicionales**
    - Escribe un tipo condicional que reciba un tipo `T` y devuelva un tipo `T[]` si `T` es un tipo `string` o `number`. Si no, devuelve un tipo `never`.
    - Define un tipo `Response` que, dependiendo del estado de la respuesta (`"success"` o `"error"`), tendrá propiedades diferentes (`data` o `message`).

14. **Decoradores**
    - Crea un decorador de clase que registre el nombre de la clase cada vez que se instancie un objeto de esa clase.
    - Usa un decorador de método que mida el tiempo de ejecución de una función y lo imprima en la consola.

15. **Manejo de Promesas y Asincronía**
    - Crea una función `fetchData` que simule una llamada a una API y devuelva una promesa que resuelva un objeto. Usa esta función dentro de una función asincrónica para obtener los datos y mostrar el resultado en consola.
    - Escribe una función que reciba una promesa y utilice `async/await` para manejarla y mostrar el resultado.

---

### **Proyectos para Practicar:**

16. **Aplicación de Tareas (To-Do List)**
    - Crea una aplicación sencilla de lista de tareas usando TypeScript. Debería permitir agregar, eliminar y marcar tareas como completadas. Utiliza clases y tipos para estructurar las tareas.

17. **Calculadora de Operaciones Matemáticas**
    - Crea una calculadora que realice operaciones básicas (suma, resta, multiplicación y división) usando clases y métodos. Incluye validaciones de entrada y manejo de errores.

18. **Formulario de Contacto**
    - Crea una interfaz para un formulario de contacto que permita al usuario ingresar su nombre, correo y mensaje. Usa clases para representar los datos del formulario y valida que los campos estén completos antes de enviarlos.

19. **Sistema de Notificaciones**
    - Crea un sistema de notificaciones que gestione mensajes de diferentes tipos (información, advertencia, error). Utiliza un `enum` para definir los tipos y clases para representar las notificaciones.

20. **Juego de Adivinanza**
    - Crea un pequeño juego de adivinanza en el que el jugador tenga que adivinar un número entre un rango de valores. Usa clases para representar el juego y los jugadores, y genera mensajes de feedback.

---

### **Recursos Adicionales:**
- **Documentación oficial de TypeScript**: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- **Ejercicios interactivos**: Plataformas como [Exercism.io](https://exercism.io/tracks/typescript) o [CodeWars](https://www.codewars.com/) también ofrecen ejercicios prácticos para aprender TypeScript.

Estos ejercicios te ayudarán a dominar los aspectos más importantes de TypeScript y a construir aplicaciones más robustas con un tipado fuerte. ¡Diviértete programando y aprendiendo!