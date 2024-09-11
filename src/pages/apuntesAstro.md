# Astro

### Instalación

Tener instalado:

- _Node.js_
- _Editor de código_
- _Terminal_

Para empezar un nuevo proyecto, con el asistente CLI de astro, hay que ejecutar el siguiente comando en la terminal de VsCode. Instala dependencias para github, tailwind y typescript.

```
npm create astro@latest
```

Comandos importantes de la terminal
```
# Para iniciar el servidor de desarrollo
npm run dev 

# Detener el servidor
Ctrl + c

# Construye el sitio
npm run build

# Previsualización del sitio
npm run preview
```

### Estructura de Carpetas

- src/
- + src/assets -> activos
- + src/components -> componentes
- + src/content -> colecciones
- + src/layout -> plantillas
- + src/pages -> .astro o .md
- + src/styles -> .css

### Integración tailwind

```
npx astro add tailwind
```

### github

Crea un repositorio en github, pasamos a la terminal donde realizamos un git status, (no te olvides de cancelar el servidor con Ctrl + c), luego git add . para añadir los archivos y ya estamos listo para crear nuestro primer commit, git commit -m "nuestro texto". En la info del nuevo repo en la parte de …or create a new repository on the command line nos centramos en los dos ultimos comandos, copiamos y ejecutamos en la terminal, asegurarse que en el último (git push -u origin main) el main tiene conincidir con el de vscode, si viene master en vscoder cambiar a git push -u origin master.
