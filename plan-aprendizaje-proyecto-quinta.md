# Plan de aprendizaje — Proyecto quinta (React + Spring Boot + PostgreSQL)

## Cómo usar este documento

Este plan está pensado para que aprendas construyendo, no mirando. Cada fase tiene un objetivo, una lista de conceptos a dominar, ejercicios concretos, y un criterio claro de "terminé".

**Regla de oro innegociable:** cada ejercicio lo hacés dos veces. La primera, con toda la ayuda que necesites (docs, Claude, YouTube). La segunda, borrás lo que hiciste y lo rehacés de memoria, sin mirar. Si no podés en la segunda, repetís el ciclo. Esto es lo que convierte "entiendo cuando lo veo" en "sé hacerlo".

**Cómo usar la IA durante el plan:** pedile explicaciones, que te revise tu código, que te arme ejemplos simples de un concepto, que te dé pistas cuando te trabes. NO le pidas que escriba el código del ejercicio por vos. Si lo hace, el ejercicio no cuenta.

**Ritmo esperado:** 10–15 horas semanales. Plan completo en 3–4 meses.

---

## Fase 0 — Reactivar JavaScript

**Duración:** 1–2 semanas
**Objetivo:** sentirte cómodo escribiendo JS puro sin framework, manipulando DOM, haciendo fetch y manejando async.

### Conceptos a dominar

**Básicos del lenguaje**
- Diferencia entre `let`, `const` y `var` (y por qué `var` casi no se usa).
- Tipos primitivos y referencia (string, number, boolean, null, undefined, object, array).
- Template literals (`` `Hola ${nombre}` ``).
- Truthy / falsy y operadores lógicos (`&&`, `||`, `??`).

**Funciones**
- Funciones normales vs arrow functions.
- Parámetros por defecto.
- Qué es una función de orden superior (recibe/devuelve funciones).

**Objetos y arrays**
- Destructuring de objetos y arrays.
- Spread (`...`) y rest.
- Métodos de array clave: `map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`, `includes`.
- Iteración con `for...of` vs `for...in`.

**Async**
- Qué es una Promise.
- `async/await`.
- `try/catch` para manejar errores.
- `fetch` para llamar APIs.

**DOM**
- `document.querySelector` y `querySelectorAll`.
- `addEventListener` y tipos de eventos comunes (`click`, `submit`, `input`, `change`).
- Modificar contenido: `textContent`, `innerHTML`, `value`.
- Modificar clases: `classList.add/remove/toggle`.
- Crear y agregar elementos: `createElement`, `appendChild`.
- `event.preventDefault()` en formularios.

**Persistencia simple**
- `localStorage.setItem/getItem/removeItem`.
- Serialización con `JSON.stringify` y `JSON.parse`.

**Módulos**
- `import` / `export` básico (cuando uses Vite en fase 2 esto aparece).

### Ejercicios

Cada uno hacelo en una carpeta con `index.html`, `style.css`, `script.js`. Nada de frameworks.

**Ejercicio 0.1 — Contador con estado**
Un botón "+", un botón "–", un botón "reset", y un número en pantalla. El número no puede ser menor a 0. Cambia de color (rojo si es 0, negro si es >0). Objetivo: DOM + eventos + estado en una variable.

**Ejercicio 0.2 — Lista de tareas con persistencia**
Un input y un botón "agregar". Las tareas aparecen como lista. Cada una se puede marcar como hecha (tachada) y borrar. Al recargar la página, las tareas siguen ahí (localStorage). Objetivo: CRUD en memoria + serialización + render dinámico del DOM.

**Ejercicio 0.3 — Buscador de Pokémon**
Un input donde escribís un nombre, un botón "buscar", y aparece la info (nombre, imagen, tipos) desde la API pública `https://pokeapi.co/api/v2/pokemon/{nombre}`. Manejá los casos: cargando, encontrado, no existe, error de red. Objetivo: `fetch` + `async/await` + `try/catch` + estados de UI.

**Ejercicio 0.4 — Formulario con validación**
Un formulario de registro con: nombre (mínimo 3 caracteres), email (formato válido), edad (número entre 18 y 100), contraseña (mínimo 8 caracteres, al menos una mayúscula y un número), confirmar contraseña (igual a la anterior). Mostrá errores debajo de cada campo en tiempo real. Si todo está bien, mostrá los datos en pantalla. Objetivo: eventos de formulario + lógica de validación + manipulación del DOM.

**Ejercicio 0.5 — Calculadora de gastos**
Agregás gastos (descripción, monto, categoría). Se muestran en una lista. Abajo ves: total, total por categoría, gasto más caro, promedio. Todo se actualiza al agregar o borrar. Objetivo: `reduce` y `filter` en serio, trabajo con arrays de objetos.

### Criterio de "fase terminada"

Podés hacer el ejercicio 0.3 o 0.5 desde cero, sin mirar notas ni pedir código, en menos de una hora.

### Recursos

- [JavaScript.info](https://javascript.info/) — la mejor referencia gratuita, en serio.
- MDN para consultar cualquier método específico.

---

## Fase 1 — Frontend estático de la quinta (HTML + CSS)

**Duración:** 1–2 semanas
**Objetivo:** tener la landing de la quinta viéndose bien, responsive, con tu propio CSS entendido línea por línea. Sin JS todavía (o muy poquito).

### Conceptos a dominar

**HTML semántico**
- Cuándo usar `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- Estructura correcta de formularios (`label`, `input`, `fieldset`).
- Atributos de accesibilidad básicos (`alt` en imágenes, `aria-label` cuando hace falta).

**CSS — modelo y layout**
- Box model (content, padding, border, margin) y `box-sizing: border-box`.
- Unidades: `px`, `rem`, `em`, `%`, `vw/vh`.
- Display: `block`, `inline`, `inline-block`, `flex`, `grid`, `none`.

**Flexbox**
- `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`.
- Diferencia entre eje principal y cruzado.
- `flex: 1` y cómo distribuir espacio.

**Grid**
- `grid-template-columns` y `grid-template-rows`.
- `gap`, `grid-column`, `grid-row`.
- `repeat()`, `minmax()`, `auto-fit` / `auto-fill`.

**Responsive**
- Mobile-first (escribí los estilos para celular primero, después agregás media queries para pantallas grandes).
- `@media (min-width: 768px)` y breakpoints comunes.
- Imágenes responsive (`max-width: 100%`).

**Variables CSS**
- `:root { --color-primary: #123; }` y `var(--color-primary)`.
- Tu sistema de tokens (`text-primary`, `surface`, etc.) se implementa así.

**Detalles visuales**
- Pseudo-clases: `:hover`, `:focus`, `:active`, `:disabled`.
- Pseudo-elementos: `::before`, `::after`.
- `transition` para hovers suaves.
- `box-shadow`, `border-radius`.
- Positioning: `relative`, `absolute`, `fixed`, `sticky`.

### Ejercicios

**Ejercicio 1.1 — Landing completa**
Una sola página con:
- Hero (imagen de fondo, título, subtítulo, botón "reservar").
- Sección de características (3–4 iconos con texto: pileta, parrilla, capacidad, etc.).
- Galería de fotos (grid de 6–9 imágenes).
- Sección de precios (tabla o cards).
- Formulario de contacto/consulta (sin funcionalidad todavía).
- Footer.

Todo con tu sistema de tokens (variables CSS). Debe verse bien en mobile y desktop. Objetivo: layout completo con flex y grid.

**Ejercicio 1.2 — Página de reservas estática**
Calendario visual (hecho con grid CSS), lista de fechas disponibles, formulario de reserva. Todavía sin lógica, solo el HTML/CSS. Objetivo: grid avanzado.

**Ejercicio 1.3 — Modo oscuro**
Agregá un toggle (botón) que cambie entre tema claro y oscuro. Usá variables CSS y una clase en `body` (`body.dark`) para cambiar todos los colores de golpe. Podés usar JS mínimo para el toggle. Objetivo: ver por qué los design tokens son poderosos.

### Criterio de "fase terminada"

Abrís tu landing en celular y en desktop y se ve bien en ambos. Podés explicar cada media query y cada regla de flex/grid sin titubear.

### Recursos

- [Flexbox Froggy](https://flexboxfroggy.com/) y [Grid Garden](https://cssgridgarden.com/) — juegos para internalizar layout.
- [CSS Tricks — A Complete Guide to Flexbox / Grid](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

---

## Fase 2 — Migrar a React

**Duración:** 2–3 semanas
**Objetivo:** entender React de verdad. Al final, tu landing de la fase 1 debe estar reescrita como app React.

### Conceptos a dominar

**Setup y estructura**
- Crear proyecto con Vite (`npm create vite@latest`).
- Entender qué hace cada archivo del scaffolding.
- `package.json`, `npm install`, `npm run dev`, `npm run build`.

**JSX**
- Diferencias con HTML (`className`, `htmlFor`, `onClick`).
- Expresiones con `{}`.
- Fragmentos (`<>...</>`).

**Componentes y props**
- Componente como función que devuelve JSX.
- Props, destructuring de props, props.children.
- Composición (componentes dentro de componentes).

**Estado**
- `useState`: qué es, cómo se actualiza, por qué no mutar.
- Estado como inmutable (spread para arrays y objetos).
- Cuándo el estado va en el padre vs en el hijo (lifting state up).

**Renderizado**
- Condicional: `{mostrar && <Comp />}`, ternarios.
- Listas con `map` y la importancia de `key`.

**Efectos**
- `useEffect`: qué problema resuelve.
- Dependencias del array.
- Cuándo NO usarlo (spoiler: casi siempre que creés que lo necesitás, no lo necesitás).
- Cleanup function.

**Formularios controlados**
- Input cuyo valor vive en el estado.
- `onChange` + `value`.
- Submit con `onSubmit` y `preventDefault`.

**Organización**
- Dividir en archivos: un componente por archivo.
- Imports y exports.
- Carpeta `components/`.

**Routing (opcional en esta fase, recomendado)**
- React Router: `BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`.

### Ejercicios

**Ejercicio 2.1 — Migrar la landing**
Tomá el HTML de la fase 1 y convertilo en componentes React: `<Hero />`, `<Features />`, `<Gallery />`, `<Pricing />`, `<ContactForm />`, `<Footer />`. Cada uno en su archivo. Objetivo: aprender a componentizar.

**Ejercicio 2.2 — Componentes reutilizables**
Creá un `<Button variant="primary" />` y un `<Card />` y un `<Input label="..." error="..." />` reutilizables. Usalos en vez de escribir el mismo HTML repetido. Objetivo: props + composición.

**Ejercicio 2.3 — Formulario de reserva controlado**
El formulario de reserva con todos los campos (nombre, email, teléfono, fecha inicio, fecha fin, cantidad de personas). Validación en tiempo real. Al hacer submit, por ahora solo hacé `console.log(datos)`. Objetivo: formularios controlados + validación en React.

**Ejercicio 2.4 — Galería con modal**
Click en una foto de la galería abre un modal con la foto grande. Botones "anterior" / "siguiente" para navegar. Cerrar con click fuera o tecla ESC. Objetivo: estado compartido + eventos de teclado + `useEffect` para listeners.

**Ejercicio 2.5 — Routing**
Páginas separadas: `/` (home), `/reservar`, `/nosotros`, `/contacto`. Navbar con links. Objetivo: React Router básico.

### Criterio de "fase terminada"

Podés crear un nuevo componente con props y estado desde cero sin mirar. Entendés qué pasa cuando cambia el estado y por qué React re-renderiza.

### Recursos

- [react.dev/learn](https://react.dev/learn) — el tutorial oficial nuevo, excelente.
- Leer el artículo "You Might Not Need an Effect" de la doc oficial. En serio, leelo.

---

## Fase 3 — Backend con Java y Spring Boot

**Duración:** 3–4 semanas
**Objetivo:** tener un backend funcional con endpoints REST para reservas, conectado a una base de datos real. Probado con Postman/Thunder Client. Sin tocar el frontend todavía.

> **Nota:** Java es un lenguaje tipado y orientado a objetos. Antes de Spring Boot necesitás tener claros los fundamentos del lenguaje. No hace falta ser experto, pero sí entender las bases.

### Conceptos a dominar

**Java básico (semana 1 — antes de Spring)**
- Tipos primitivos: `int`, `long`, `double`, `boolean`, `String`.
- Variables, constantes (`final`), operadores.
- Condicionales (`if/else`, ternario) y bucles (`for`, `while`, `for-each`).
- Clases y objetos: qué es una clase, qué es una instancia, constructor.
- Métodos: parámetros, return, `void`.
- `public`, `private`, `protected` — encapsulamiento básico.
- Herencia (`extends`) e interfaces (`implements`) — entenderlo conceptualmente.
- Colecciones: `List<T>`, `ArrayList<T>`, `Map<K,V>`, `HashMap<K,V>`.
- Excepciones: `try/catch`, `throws`, diferencia entre checked y unchecked.
- Generics básicos: qué significa `<T>` y para qué sirve.

**HTTP fundamentals**
- Qué es request y response.
- Métodos: GET, POST, PUT, PATCH, DELETE.
- Status codes importantes: 200, 201, 204, 400, 401, 403, 404, 409, 500.
- Headers (Content-Type, Authorization).
- Body vs query params vs route params.

**Spring Boot**
- Qué es Spring, qué problema resuelve (inyección de dependencias, configuración automática).
- Crear proyecto con [Spring Initializr](https://start.spring.io/) — dependencias: Spring Web, Spring Data JPA, PostgreSQL Driver, Validation.
- Estructura de carpetas del proyecto generado.
- Maven: `pom.xml`, `mvn spring-boot:run`, `mvn package`.
- Anotaciones de controller: `@RestController`, `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@PatchMapping`, `@DeleteMapping`.
- Parámetros: `@RequestBody`, `@PathVariable`, `@RequestParam`.
- `ResponseEntity<T>` para controlar el status code de la respuesta.
- Capas: `@Controller` / `@Service` / `@Repository` — qué hace cada una.
- Inyección de dependencias con `@Autowired` (o constructor injection).
- CORS: `@CrossOrigin` o configuración global con `WebMvcConfigurer`.

**Variables de entorno**
- `application.properties` o `application.yml`.
- Variables sensibles con `${VARIABLE}` y archivo `.env` (nunca al repo).
- Por qué no hardcodear credenciales.

**Base de datos con JPA/Hibernate**
- Qué es un ORM y qué problema resuelve.
- `@Entity`, `@Id`, `@GeneratedValue`, `@Column`, `@Table`.
- Tipos de datos en Java vs SQL.
- `JpaRepository<Entidad, TipoId>` y sus métodos listos: `findAll()`, `findById()`, `save()`, `deleteById()`.
- Métodos derivados: `findByEmail(String email)`, `findByFechaInicioBetween(...)`.
- JPQL básico para queries más complejas: `@Query("SELECT r FROM Reserva r WHERE ...")`.
- SQL básico (igual que antes, aunque JPA abstrae mucho):
  - `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`, `WHERE`, `ORDER BY`.

**Validación**
- Bean Validation: `@NotNull`, `@NotBlank`, `@Email`, `@Min`, `@Max`, `@Size`, `@Pattern`.
- `@Valid` en el controller para activar la validación del body.
- Nunca confiar en lo que llega del cliente.

**Manejo de errores**
- `@ExceptionHandler` en el controller.
- `@ControllerAdvice` para manejar errores globalmente (el equivalente al middleware de error en Express).
- Enviar status codes apropiados con `ResponseEntity`.

### Ejercicios

**Ejercicio 3.0 — Java puro sin Spring**
Antes de arrancar con Spring, creá un proyecto Java simple (sin framework) que:
- Tenga una clase `Tarea` con campos `id`, `titulo`, `hecha`.
- Tenga una clase `ListaDeTareas` que guarde tareas en un `ArrayList` y tenga métodos: `agregar`, `listar`, `marcarHecha`, `eliminar`.
- En el `main`, creá tareas, marcá algunas, listá y eliminá.
Objetivo: entender clases, objetos y colecciones antes de que Spring los oculte.

**Ejercicio 3.1 — Hello world Spring Boot**
Un servidor que corre en el puerto 8080 y responde `{ "mensaje": "hola" }` en `GET /`. Objetivo: entender el mínimo viable de Spring Boot.

**Ejercicio 3.2 — CRUD en memoria**
Endpoints para una entidad `Tarea` (id, titulo, hecha). Los datos viven en un `ArrayList` en un `@Service` (se pierden al reiniciar). Implementá:
- `GET /tareas` — lista todas.
- `GET /tareas/{id}` — una sola.
- `POST /tareas` — crear.
- `PUT /tareas/{id}` — actualizar.
- `DELETE /tareas/{id}` — borrar.

Probá todo con Thunder Client o Postman. Objetivo: entender rutas y verbos HTTP sin la complicación de DB.

**Ejercicio 3.3 — Conectar H2 y después PostgreSQL**
Migrá el CRUD de tareas a base de datos. Arrancá con H2 (base de datos en memoria que Spring Boot incluye, sin instalar nada). Después configurá PostgreSQL local. Usá `JpaRepository`. Objetivo: tu primera DB real con JPA.

**Ejercicio 3.4 — Entidades de la quinta**
Diseñá las entidades JPA que vas a necesitar:
- `Reserva` (id, nombreCliente, email, telefono, fechaInicio, fechaFin, cantidadPersonas, estado, creadoEn).
- `Usuario` (para admin; id, email, passwordHash, rol).
- Más adelante: `Bloqueo` (fechas que el admin marca como no disponibles).

Pensá: ¿qué campos son `@NotNull`? ¿cuáles deberían tener `unique = true`?

**Ejercicio 3.5 — API de reservas**
Implementá los endpoints:
- `GET /api/reservas` — lista reservas (con filtros opcionales por fecha: `?desde=2026-05-01&hasta=2026-05-31`).
- `GET /api/reservas/{id}` — detalle.
- `POST /api/reservas` — crear reserva. Validá: fechas coherentes (inicio < fin), no superpuestas con otras reservas existentes, campos obligatorios, email válido.
- `PATCH /api/reservas/{id}` — cambiar estado (pendiente → confirmada / rechazada).
- `DELETE /api/reservas/{id}`.

Objetivo: lógica de negocio real (validar superposiciones es el ejercicio clave).

**Ejercicio 3.6 — Refactor a estructura limpia**
Organizá el código en capas:
```
src/main/java/com/tuapp/quinta/
  controller/
    ReservaController.java
  service/
    ReservaService.java
  repository/
    ReservaRepository.java
  model/
    Reserva.java
  dto/
    ReservaRequest.java
    ReservaResponse.java
  exception/
    GlobalExceptionHandler.java
```
Cada capa con una responsabilidad. Los DTOs separan lo que llega del cliente de la entidad de base de datos. Objetivo: no terminar con una clase de 500 líneas.

### Criterio de "fase terminada"

Podés crear un endpoint nuevo (por ejemplo, "listar reservas del mes actual") desde cero, incluyendo la query JPA, sin ayuda.

### Recursos

- [Spring Boot docs — Getting Started](https://spring.io/guides/gs/spring-boot/).
- [Baeldung](https://www.baeldung.com/) — la mejor referencia práctica de Spring en inglés.
- [SQLBolt](https://sqlbolt.com/) — 18 lecciones interactivas de SQL, se hacen en una tarde.
- [Spring Initializr](https://start.spring.io/) — para crear proyectos Spring Boot.

---

## Fase 4 — Conectar frontend y backend

**Duración:** 1–2 semanas
**Objetivo:** que la app React hable con tu backend. Que crear una reserva desde el formulario realmente la guarde en la DB.

### Conceptos a dominar

**Fetch en React**
- `fetch` con `POST`, `PUT`, `DELETE` (headers, body con `JSON.stringify`).
- Manejar respuestas: `response.ok`, `response.json()`.
- Patrón: estado para `loading`, `error` y `data`.

**useEffect para fetch inicial**
- Cargar datos al montar el componente.
- Cleanup con `AbortController` (nivel intermedio).

**CORS en serio**
- Configurar CORS en Spring Boot con `@CrossOrigin` o con un `WebMvcConfigurer` global.
- Qué pasa con las cookies y el `credentials: 'include'` (lo vas a ver en fase 5).

**Variables de entorno en React**
- `VITE_API_URL` en `.env`.
- `import.meta.env.VITE_API_URL`.

**UX de estados async**
- Spinner / skeleton mientras carga.
- Mensajes de error amigables.
- Deshabilitar botones durante el submit.
- Feedback al usuario después de una acción (toast, mensaje).

**Separar la capa de API**
- Crear un archivo `api/reservas.js` con funciones como `crearReserva(data)`, `listarReservas()`. El componente no debería hacer `fetch` directo.

### Ejercicios

**Ejercicio 4.1 — Mostrar disponibilidad**
En la página de reserva, al montar el componente, hacé `fetch` al backend pidiendo las reservas existentes. Marcá en el calendario visual las fechas ocupadas. Objetivo: `useEffect` + fetch + render condicional.

**Ejercicio 4.2 — Crear reserva**
Al hacer submit del formulario, envialo al backend. Mostrá loading mientras llega la respuesta, error si falla, y un mensaje de éxito si se creó. Objetivo: formulario que realmente funciona.

**Ejercicio 4.3 — Manejar superposiciones**
Cuando el backend rechaza la reserva por superposición, mostrá el error específico al usuario ("estas fechas ya están reservadas") y resaltá el campo de fecha. Objetivo: mapear errores del backend al UI.

**Ejercicio 4.4 — Capa de API**
Mové todos los `fetch` a un archivo `src/api/reservas.js`. Los componentes solo importan funciones. Objetivo: separación de responsabilidades.

### Criterio de "fase terminada"

Abrís dos pestañas: en una el sitio público crea una reserva, en la otra ves el JSON del backend y aparece ahí. Todo funciona sin errores en consola.

---

## Fase 5 — Autenticación y panel admin

**Duración:** 2–3 semanas
**Objetivo:** que vos como admin puedas loguearte y gestionar las reservas desde un panel privado.

### Conceptos a dominar

**Autenticación**
- Qué es autenticación (quién sos) vs autorización (qué podés hacer).
- Nunca guardar passwords en texto plano.
- Hashing con `bcrypt` (por qué no MD5, por qué sale un hash diferente cada vez).
- Qué es un JWT, qué contiene, por qué se firma.
- Access token vs refresh token (el segundo, opcional por ahora).

**Backend de auth (Spring Security + JWT)**
- Agregar dependencias: `spring-boot-starter-security`, `jjwt` (librería JWT para Java).
- Endpoint `POST /auth/register` (para crear vos el primer admin, después se desactiva).
- Endpoint `POST /auth/login` — recibe email y password, devuelve JWT si es correcto.
- Filtro de autenticación JWT: clase que extiende `OncePerRequestFilter`, lee el header `Authorization: Bearer <token>`, verifica y carga el usuario.
- Configuración de Spring Security: qué rutas son públicas, cuáles requieren autenticación o rol admin (`SecurityFilterChain`).
- Rate limiting básico en login (para no ser bruteforceable).

**Frontend de auth**
- Página de login.
- Guardar el token. Discusión: `localStorage` (simple, pero vulnerable a XSS) vs cookie `httpOnly` (más seguro, pero más complicado). Para aprender, empezá con localStorage.
- Context de auth en React (`AuthContext`) que provee `user`, `login`, `logout`.
- Rutas protegidas: componente `<PrivateRoute />` que redirige a `/login` si no hay token.
- Mandar el token en cada request al backend.
- Logout = borrar el token.

**Panel admin (UI)**
- Dashboard con resumen (reservas del mes, pendientes de confirmar).
- Lista de reservas con filtros.
- Acciones: confirmar, rechazar, borrar.
- Formulario para bloquear fechas (feriados, mantenimiento).
- Edición de info de la quinta (precios, fotos, descripción).

### Ejercicios

**Ejercicio 5.1 — Hashing y registro**
Endpoint `POST /auth/register` que recibe email y password, hashea con bcrypt, guarda en la tabla `usuarios`. Rechaza emails duplicados. Objetivo: entender hashing.

**Ejercicio 5.2 — Login con JWT**
Endpoint `POST /auth/login` que verifica credenciales y devuelve un JWT firmado con una clave secreta (en `.env`). El token tiene `{ userId, rol }` y expira en 7 días. Objetivo: generar tokens.

**Ejercicio 5.3 — Middleware de auth**
Middleware que lee el header `Authorization`, verifica el JWT, y agrega `req.user`. Proteger con él los endpoints admin (`PATCH /api/reservas/:id`, `DELETE`, etc.). Objetivo: autorizar rutas.

**Ejercicio 5.4 — Login en React**
Página `/login` con formulario. Al loguear, guardar token y user en Context + localStorage. Redirigir al dashboard. Objetivo: autenticación en el cliente.

**Ejercicio 5.5 — Rutas protegidas**
`<PrivateRoute />` que envuelve las rutas admin. Si no hay user en Context, redirige a login. Objetivo: protección a nivel de UI.

**Ejercicio 5.6 — Dashboard**
Página `/admin` con:
- Números de resumen (total de reservas, pendientes, confirmadas este mes).
- Lista/tabla de reservas con filtros por estado y por fecha.
- Botones para confirmar o rechazar cada una.

**Ejercicio 5.7 — Bloqueo de fechas**
Tabla `bloqueos` en la DB. Endpoint para crear bloqueos. Al listar disponibilidad en el sitio público, considerar bloqueos como fechas ocupadas. UI admin para crearlos y listarlos.

### Criterio de "fase terminada"

Tu novia/amigo/familiar abre el sitio, crea una reserva. Vos entrás al panel admin desde otra pantalla, la ves, la confirmás, y ella lo recibe (aunque sea por email manual). Podés bloquear fechas y no aparecen disponibles en el sitio.

### Recursos

- [JWT.io](https://jwt.io/) — pegá un token y ver qué tiene.
- `jjwt` (librería JWT para Java) y `BCryptPasswordEncoder` (incluido en Spring Security).

---

## Fase 6 — Deploy y pulido

**Duración:** 1–2 semanas
**Objetivo:** que todo esté en internet, funcionando con un dominio, y arreglados los bugs que solo aparecen en producción.

### Conceptos a dominar

**Git y GitHub**
- Commits claros, branches.
- `.gitignore` bien armado (nunca subir `.env`, `node_modules`, builds).
- Push a un repo.

**Deploy de frontend (Vercel)**
- Conectar el repo.
- Variables de entorno en Vercel (`VITE_API_URL` apunta al backend en producción).
- Rebuild automático en cada push.

**Deploy de backend Java (Railway o Render)**
- El backend Spring Boot se compila a un `.jar` con `mvn package`.
- Conectar el repo a Railway o Render — detectan Maven automáticamente.
- Variables de entorno (JWT_SECRET, DATABASE_URL, etc.).
- Configurar el puerto dinámico: `server.port=${PORT:8080}` en `application.properties`.

**Base de datos en producción**
- PostgreSQL managed: Neon, Supabase o Railway.
- String de conexión en `spring.datasource.url`.
- Spring Boot con JPA puede crear las tablas automáticamente (`spring.jpa.hibernate.ddl-auto=update`) — útil al arrancar, peligroso en producción con datos reales.

**Dominio**
- Comprar un dominio (Namecheap, GoDaddy, Cloudflare Registrar).
- Apuntar a Vercel (DNS).
- HTTPS automático.

**Observabilidad básica**
- Logs en Railway/Render.
- Manejo de errores del lado del cliente (no mostrar stack traces).
- Tal vez Sentry (opcional).

### Ejercicios

**Ejercicio 6.1 — Deploy del frontend**
Subir a GitHub, conectar a Vercel, deploy. Debe verse igual que local.

**Ejercicio 6.2 — Deploy del backend**
Subir a Railway, configurar variables, crear DB Postgres en Railway, correr las migraciones.

**Ejercicio 6.3 — Conectar todo**
Configurar CORS para que acepte solo tu dominio. Configurar `VITE_API_URL` en Vercel apuntando al backend. Probar el flujo completo en producción.

**Ejercicio 6.4 — Dominio**
Comprar dominio, apuntar a Vercel, configurar subdominio `api.tudominio.com` para el backend.

**Ejercicio 6.5 — Arreglar lo que se rompe**
En producción van a aparecer cosas que no viste local: CORS, HTTPS, cookies, zonas horarias en fechas, tamaño de imágenes. Arreglá cada una.

### Criterio de "fase terminada"

Le podés mandar el link a alguien, lo prueba desde su celular, y funciona.

---

## Después de la quinta: otros módulos

Una vez que el módulo quinta está terminado y deployado, cada módulo nuevo que agregues es más rápido porque la infraestructura ya está. Podés pensar en:

- Módulo de peluquería (turnos, servicios, profesionales).
- Módulo de gimnasio (socios, clases, asistencias).
- Módulo de restaurante (mesas, reservas, menú).

Para venderlo como producto "multi-tenant" (o sea, que varios clientes lo usen cada uno con su propia quinta/peluquería), necesitás cosas que NO están en este plan: organizaciones, planes de pago con Stripe/Mercado Pago, onboarding, soporte, facturación. Eso es un proyecto entero aparte y lo podés encarar una vez que este primer módulo esté sólido.

---

## Reglas que no podés romper

1. Cada ejercicio se hace dos veces. La segunda, de memoria.
2. No pedir código a la IA. Pedir explicaciones, revisiones, pistas.
3. No avanzar de fase sin cumplir el criterio de terminada.
4. Commit cada día que programás, aunque sea poco.
5. Cuando te traben 30 minutos, tomá aire, releé el error en voz alta, buscá en la doc oficial antes de buscar en Stack Overflow o preguntarle a la IA.
6. Construí primero lo feo que funcione. Después refactorizá. Nunca al revés.

---

## Qué hacer si te perdés

Si en cualquier momento sentís que no entendés nada, NO avances. Volvé al último ejercicio que sí pudiste hacer solo, y hacelo de nuevo. El avance en programación no es lineal: a veces hay que volver a pisar terreno firme antes de seguir.

Si un concepto específico no te entra, pedí que te lo expliquen con una analogía, con un ejemplo mínimo (5 líneas), y después construilo vos con variables diferentes. El truco no es entender el ejemplo, es ser capaz de reproducir la idea con tus propias palabras y código.
