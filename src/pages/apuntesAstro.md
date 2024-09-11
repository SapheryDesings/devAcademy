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

