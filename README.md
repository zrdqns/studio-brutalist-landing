# NULLWAVE — Landing Estudio / Sello Brutalista

Landing page de demostración para **NULLWAVE**, un estudio creativo y sello ficticio de música electrónica. Estética brutalista-cyberpunk: dark mode, alto contraste, grid visible, tipografía display gigante y neón.

> **Demo solo-frontend.** No hay backend, reproductor real, tienda ni envío de formularios. Releases, artistas y datos de contacto son ficticios. El formulario simula la transmisión y no manda nada. El objetivo es mostrar capacidad visual y de interacción.

## Stack

- **Vite** + **TypeScript vanilla** (sin framework)
- **GSAP** + **ScrollTrigger** para scroll horizontal y reveals
- **Canvas 2D** para el campo de partículas del hero
- CSS vanilla (sin librería de utilidades)

## Diseño

- **Paleta:** negro (`#0B0B0F`) + neón cyan (`#00F0FF`) y magenta (`#FF2BD6`), lima (`#C6FF3A`) como tercer acento. Dark mode.
- **Tipografía:** Space Mono (monospace) para datos/telemetría + Archivo Black para el display gigante.
- **Layout:** rompe la convención — grid visible, esquinas a 90°, marcadores ASCII, sección de **scroll horizontal**.

## Animaciones

- **Cursor personalizado** con anillo, etiqueta de acción y `mix-blend-mode`.
- **Botones magnéticos** (siguen al cursor con física elástica).
- **Glitch** en titulares (capas cyan/magenta con clip-path).
- **Scroll horizontal** de releases con ScrollTrigger (pin + scrub).
- **Partículas en canvas** que reaccionan al ratón en el hero.
- Scanlines, ruido y grid como overlays fijos.
- Reveals escalonados, marquee y fallback para `prefers-reduced-motion`.

## Secciones

Hero animado · Releases (scroll horizontal) · Manifiesto · Artistas / equipo · Contacto · Footer.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build -> dist/
```
