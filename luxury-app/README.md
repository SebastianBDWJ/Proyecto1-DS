# Proyecto 1 - The Ivory (Residencias de Lujo)

**Curso:** IF0009 - Desarrollo de Software VI  
**Universidad de Costa Rica**

---

## Descripción

Este proyecto consiste en una aplicación web y móvil para una inmobiliaria ficticia de residencias y apartamentos de lujo en Costa Rica llamada **The Ivory**. 

La plataforma permite explorar un catálogo de apartamentos, consultar las amenidades y características de cada propiedad, filtrar por precio, ubicación y habitaciones, guardar apartamentos en favoritos y enviar un formulario de contacto para pedir información o coordinar una visita.

---

## Tecnologías

* **React 19** con **TypeScript**
* **Vite** como empaquetador y servidor de desarrollo
* **React Router DOM 7** para rutas y navegación SPA
* **Capacitor** para el empaquetado móvil en Android
* **CSS puro** (sin frameworks como Tailwind o Bootstrap, todo diseñado a mano con CSS nativo)

---

## Instalación y ejecución local

Para correr la aplicación en la computadora:

1. Entrar a la carpeta del proyecto:
```bash
cd luxury-app
```

2. Instalar las dependencias:
```bash
npm install
```

3. Levantar el servidor local:
```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`.

---

## Ejecución en Android (Capacitor)

Para probar la versión móvil en Android Studio:

1. Compilar el proyecto web:
```bash
npm run build
```

2. Sincronizar con la plataforma Android:
```bash
npx cap sync android
```

3. Abrir en Android Studio:
```bash
npx cap open android
```

---

## Estructura del proyecto

El código está organizado por módulos dentro de `src/features`:

```text
luxury-app/
├── public/
│   ├── data/
│   │   └── apartments.json        # Base de datos local (20+ apartamentos)
│   └── images/                    # Fotografías de propiedades y logo
├── src/
│   ├── app/
│   │   └── App.tsx                # Configuración de rutas principales
│   ├── features/
│   │   ├── home/                  # Página de inicio
│   │   ├── apartments/            # Catálogo y página de detalle
│   │   ├── favorites/             # Sistema de favoritos (Context + localStorage)
│   │   ├── contact/               # Formulario de contacto validado
│   │   └── shared/                # Navbar, Footer, Logo y utilidades
│   └── styles/                    # Hojas de estilo CSS por sección
└── android/                       # Proyecto nativo generado por Capacitor
```

---

## Integrantes y distribución del trabajo

### Sebastián
* **Catálogo de apartamentos:** `public/data/apartments.json` con más de 20 apartamentos y sus imágenes.
* Hook de consumo de datos (`useApartments.ts` y `useFetch.ts`).
* Tarjeta de apartamento y lista (`CardApartamento.tsx`, `CardAparList.tsx`).
* Paginación (`Pagination.tsx` y hook `usePagination.ts` a 5 por página).
* Componentes de estado (`Loader`, `ErrorMessage`, `EmptyState`).
* Página de catálogo (`Apartments.tsx`) y publicación en Vercel.
* **Parte asumida de Persona 2:** Página de detalle (`ApartmentDetail.tsx` y `apar-detail.css`), ruta dinámica `/apartamentos/:id` con `useParams`, visualización de amenidades y botón para solicitar visita.

### Daniel
* **Filtros y búsqueda:** Tipos y lógica de filtrado (`filterApartments.ts` para texto, ubicación, habitaciones y precio) y hook `useApartmentFilters.ts` con `useMemo`.
* Barra de filtros (`ApartmentFilters.tsx`).
* **Formulario de contacto:** Formulario controlado con `useState` (`ContactForm.tsx`), validaciones de correo y longitud (`validateContact.ts`), soporte de propiedad prellenada y confirmación de envío simulado.
* Diseño de la página 404 (`NotFound.tsx`).
* **Parte asumida de Persona 2:** Módulo completo de favoritos (`features/favorites/`): interfaz `FavoritesContextType`, `FavoritesContext.tsx` con Provider y persistencia en `localStorage`, hook `useFavorites.ts`, botón `FavoriteButton.tsx` y página `Favorites.tsx`.

### Santi
* **Identidad y estilos globales:** Definición de marca, componente `Logo.tsx`, paleta de colores y variables en `variables.css` y `base.css`.
* **Navegación:** `Navbar.tsx` con menú hamburguesa responsivo, estado activo y cierre al navegar.
* Pie de página (`Footer.tsx`).
* **Página de inicio (Home):** Componentes de `Hero`, `About`, `Featured` (residencias destacadas), `Experience` (pilares en números romanos), `Location` y `ContactBand`.
* Revisión responsiva en computadoras, tabletas y celulares.
* Documentación completa del proyecto (`README.md`).
* **Parte asumida de Persona 2:** Configuración y empaquetado móvil con **Capacitor**: instalación de dependencias, configuración de `appId` (`cr.theivory.app`) y `appName`, sincronización con Android (`npx cap sync android`) y pruebas en emulador.

---

## Notas del proyecto

* Los datos de las residencias se cargan desde el archivo estático `public/data/apartments.json`.
* El formulario de contacto valida todos los datos en el cliente y muestra una confirmación de envío en pantalla (simulado, no requiere backend).
* Los favoritos se conservan en el navegador mediante `localStorage` a través de Context API.

