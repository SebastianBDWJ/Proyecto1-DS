# THE IVORY — Luxury Residences

> Aplicación web y móvil para la promoción de apartamentos de lujo en Costa Rica.  
> Proyecto #1 · IF0009 Desarrollo de Software VI · Segundo Semestre 2026

---

## Descripción

**The Ivory Luxury Residences** es una plataforma responsiva para explorar, filtrar y consultar propiedades de lujo en el Valle Central de Costa Rica. Construida con React 19, TypeScript, CSS propio y empaquetada para Android mediante Capacitor.

La aplicación permite:
- Explorar un catálogo de 20+ apartamentos con información detallada.
- Filtrar propiedades por texto, ubicación, habitaciones y precio máximo.
- Guardar propiedades como favoritas (persistentes con `localStorage`).
- Consultar el detalle completo de cada residencia.
- Enviar un formulario de solicitud de información o visita.

---

## Tecnologías

| Tecnología       | Versión   | Uso                              |
|------------------|-----------|----------------------------------|
| React            | 19.x      | Interfaz de usuario              |
| TypeScript       | 6.x       | Tipado estático                  |
| React Router DOM | 7.x       | Navegación SPA                   |
| Vite             | 8.x       | Bundler y servidor de desarrollo |
| Capacitor        | —         | Empaquetado Android              |
| CSS propio       | —         | Estilos sin frameworks externos  |

> **No se utilizan:** Tailwind CSS, Bootstrap, ni plantillas visuales prediseñadas.

---

## Estructura del proyecto

```
luxury-app/
├── public/
│   ├── data/
│   │   └── apartments.json        # 20+ apartamentos (fuente de datos)
│   └── images/
│       ├── hero-bg.png            # Fotografía principal del hero
│       └── apartments/            # Imágenes de propiedades
├── src/
│   ├── app/
│   │   └── App.tsx                # Rutas principales
│   ├── features/
│   │   ├── home/                  # Página de inicio (Persona 4)
│   │   ├── apartments/            # Catálogo y detalle (Personas 1 y 2)
│   │   ├── favorites/             # Favoritos con Context API (Persona 2)
│   │   ├── contact/               # Formulario de contacto (Persona 3)
│   │   └── shared/                # Layout, Navbar, Footer, Logo, hooks
│   └── styles/
│       ├── variables.css          # Paleta de colores y tipografías
│       ├── base.css               # Reset y estilos globales
│       ├── home/                  # Estilos del home
│       └── layout/                # Navbar, Footer, Logo
└── android/                       # Proyecto Android generado por Capacitor
```

---

## Instalación y ejecución local

### Requisitos previos
- Node.js 18+
- npm 9+

### Pasos

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd luxury-app

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Comandos disponibles

```bash
npm run dev        # Servidor de desarrollo con HMR
npm run build      # Compilar para producción (genera /dist)
npm run preview    # Previsualizar la build de producción
npm run lint       # Verificar el código con ESLint
```

---

## Configuración de Capacitor (Android)

```bash
# Compilar la versión web primero
npm run build

# Sincronizar con Android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

> Se requiere Android Studio con SDK configurado.  
> El `appId` está configurado como `cr.theivory.app` y el `appName` como `The Ivory`.

---

## Páginas de la aplicación

| Ruta                  | Página              | Descripción                                      |
|-----------------------|---------------------|--------------------------------------------------|
| `/`                   | Inicio              | Hero, filosofía, propiedades destacadas, contacto |
| `/apartamentos`       | Catálogo            | Lista con filtros y paginación (5 por página)    |
| `/apartamentos/:id`   | Detalle             | Información completa de la propiedad             |
| `/favoritos`          | Favoritos           | Propiedades guardadas (localStorage)             |
| `/contacto`           | Contacto            | Formulario controlado con validaciones           |
| `*`                   | No encontrada (404) | Página de error para rutas inválidas             |

---

## Identidad visual

- **Marca:** THE IVORY · Luxury Residences
- **Paleta:** marfil `#f5f0e8`, beige `#e2d5c3`, arena `#c9b99a`, dorado apagado `#9e7840`, café oscuro `#1e1a15`
- **Tipografía:** Cormorant Garamond (titulares serif) + Montserrat (cuerpo sans-serif)
- **Estilo:** Lujo discreto, arquitectura editorial, Old Money

---

## Publicación en Vercel

🌐 **URL pública:** `https://luxury-app.vercel.app`

Configuración SPA en `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Equipo

| Persona | Responsabilidad                                   |
|---------|---------------------------------------------------|
| 1       | Catálogo, fetch, paginación, ApartmentCard        |
| 2       | Detalle, favoritos, Context API, Capacitor/Android|
| 3       | Filtros, formulario de contacto, NotFound         |
| 4       | Identidad visual, Navbar, Footer, Home, README    |

---

## Notas académicas

- El formulario de contacto **simula el envío** (no hay backend). Se indica claramente al usuario.
- Los datos de apartamentos son estáticos en `public/data/apartments.json`.
- Los favoritos se conservan en `localStorage` mediante Context API.
- La publicación en Google Play **no** es requisito del proyecto.

---

*© 2026 The Ivory Luxury Residences. Proyecto académico — UCR Sede de Occidente.*
