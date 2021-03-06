# STREETCATS: índice de contenidos

- [Introduccion y anteproyecto](#introduccion-y-anteproyecto)
  * [Datos generales:](#datos-generales-)
  * [Descripcion:](#descripcion-)
  * [Objetivos:](#objetivos-)
    + [Objetivos de sotfware:](#objetivos-de-sotfware-)
    + [Objetivos personales:](#objetivos-personales-)
  * [Tecnologias:](#tecnologias-)
- [Desarrollo de la aplicacion](#desarrollo-de-la-aplicacion)
  * [Analisis previo:](#analisis-previo-)
    + [Modelo relacional](#modelo-relacional)
    + [Mockup de pantallas](#mockup-de-pantallas)
  * [Implementación:](#implementacion-)
  * [Produccion:](#produccion-)
- [Despliegue](#despliegue)
- [Resultados y conclusiones](#resultados-y-conclusiones)
- [Bibliografia y webgrafia](#bibliografia-y-webgrafia)

# Introduccion y anteproyecto

## Datos generales:
> **Proyecto:** Aplicación Web para Streetcats Artà

> **Autor:** [M. Rabanales](https://github.com/RiaRabanales)

> **Ciclo formativo:** Desarrollo de Aplicaciones Web

> **Fecha de entrega:** mayo/junio 2021.


## Descripcion:
Este proyecto busca desarrollar una aplicación web que combine la actualización de la [presencia online](http://www.streetcats-arta.es/spanisch/index.html) de la asociación animalista *Streetcats Artà* con la creación de una herramienta que permita unificar y gestionar los diferentes procesos (entre otros: asignación de animales, gestión de donaciones, tablón de anuncios de colaboradores, registro de contratos de adopción, etc.) que se desarrollan ahora mismo sin apenas control.

## Objetivos:
### Objetivos de sotfware:
* Desarrollar una aplicación de base web (pero adaptable en multiplataforma) que facilite el trabajo de los colaboradores en todo momento.
* Crear un sistema de fácil mantenimiento incluso si el desarrollador original deja de colaborar con la organización.
* Facilitar el acceso multilenguaje que permita a la asociación alcanzar todo su público potencial.
* Emplear las versiones más recientes de las tecnologías utilizadas (vue 3, bootstrap 5, etc.)
### Objetivos personales:
* Completar el proyecto de fin de ciclo con una aplicación que no quede *muerta* una vez presentada.
* Aprender y defenderme bien en Vue, framework con el que desarrollo las prácticas.
* Colaborar con una organización muy próxima a mis valores.
* Desarrollar una webapp que pueda mostrar en mi portfolio personal.

## Tecnologias:
* Lenguajes: Javascript, HTML5, CSS/SCSS, Bootstrap 5
* Frameworks: Vue 3 con vue-i18n para multilenguaje, emailjs para e-mailing, y vue-feather-icons para emplear iconos prediseñados como componentes importados de Vue.
* Bases de datos, *storage* y *hosting*: Firebase

# Desarrollo de la aplicacion

## Analisis previo:
Para la Asociación Animalista de Artá, que lleva bastantes años en activo, es básico que esta aplicación cumpla tres objetivos:
1. Mejore la presencia en web de la asociación.
2. Permita almacenar en la nube los documentos básicos (contratos, descargas, etc.) para evitar que puedan volver a perderse.
3. Sea de fácil mantenimiento.

Estos requisitos me han llevado a considerar que puede ser conveniente centralizar la mayor parte del código en el apartado frontal, y reducir el *back* a los servicios que ofrece Google a través de *Firebase*: esto me garantiza una buena seguridad de los datos de usuario y los procesos de registro y autorización, un mantenimiento estable de las bases de datos, y, en definitiva, una centralización de todos los procesos de servicios.

El tratamiento de datos y la gestión de información se hace a través del código frontal. Opto por no trabajar directamente con Javascript sino emplear un *framework*; como en FCT he aprendido Vue en profundidad, decido emplearlo en su versión más reciente, aunque sé que su reciente publicación va a conllevar problemas de compatibilidad con diferentes dependencias (como por ejemplo con Bootstrap) que tendré que resolver. *A priori*, además, no me interesa utilizar ningún macro-*framework* estilo Ionic o Quasar, porque hacerlo en un proyecto como este podría complicar tremendamente su mantenimiento.

### Modelo relacional
No es adecuado hablar de modelo relacional en este proyecto, ya que Firebase, muy similar a MongoDB, es un modelo no relacional. No obstante, a continuación describiré a estructura de la base de datos de este proyecto, que implica generar tres colecciones:
1. cats
2. contracts
3. posts

En cada una de estas colecciones se irán agregando tantos documentos independientes como requiera el uso de la aplicación. En principio, los campos que debe tener (como mínimo) un documento de cada una de estas colecciones son:
* Para *cats*: nombre, raza, url de la imagen, identificación del usuari que lo publica, contacto, fecha de creación...
* Para *contracts*: url del archivo, gato implicado, firmante, fecha de creación, identificación del usuario que lo publica.
* Para *posts*: contenido del mensaje, usuario que lo publica, fecha de creación, datos de contacto (si procede).

Aparte de lo anterior, los datos de usuario se guardan en una colección separada y específica, que permite el empleo de métodos propios de autorización de la plataforma y que, en el código, configuro en *config/firebase.js* e importo en los diferentes .js de la carpeta utils para emplear en todas las vistas, componentes y servicios que proceda.

### Mockup de pantallas
Este es el diseño básico de la aplicación:
![Mockup](https://i.ibb.co/QNt9GZT/mockup.jpg)

No obstante, tras avanzar en el proyecto he visto que este diseño no resulta agradable ni cómodo para el usuario, ya que reduce el contenido efectivo en pantallas horizontales a un contenedor excesivamente bajo, de manera que lo he replanteado moviendo las imágenes superiores al lateral. Siguen teniendo la misma animación y cambian cada vez que cambia la página del *router*.

He preferido optar por una paleta de colores prediseñada, ya que necesito un resultado profesional a la vez que agradable. Este ha sido el recurso elegido:

![Paleta](https://i.ibb.co/mHLHXX6/paleta.jpg)

## Implementacion:
El primer paso en este diseño ha sido generar un esqueleto de la aplicación con un sistema de rutas viable y una página genérica con información sobre la asociación. Esta página ha quedado reflejada en '/home'.

Hecho esto he tenido que considerar el acceso a estas rutas según los diferentes tipos de usuarios. He optado por incluir tres tipos de usuarios de la aplicación:
1. Usuarios genéricos: no están registrados, y sólo pueden realizar actividades genéricas de consulta de animales y envío de e-mails de contacto. Son necesarios porque cubren la necesidad de 'presencia online' del proyecto.
2. Usuarios registrados: pueden hacer *log in* en el área de colaboradores, lo que les permite acceder a funcionalidades más específicas.
3. Usuarios administradores: coinciden con los gestores de la asociación y tienen acceso a la funcionalidad completa de la aplicación.

Los diferentes usuarios verán más o menos opciones en los menús según sus permisos, y serán redireccionados a páginas genéricas si intentan acceder a páginas a las que teóricamente no pueden.

Decidido esto he tenido que plantear las diferentes funcionalidades que quiero desarrollar en la aplicación:
* Registro y acceso/login/logout de usuarios.
* CRUD de gatos: permite guardar, acceder, consultar y eliminar una lista de gatos de la asociación; cualquier colaborador puede añadir animales, facilitando el acceso a esta base de datos a los gatos recogidos directamente en acogida y que no pasan por el centro de la asociación. El formulario de creación de nuevo gato incluirá al menos un campo de cada tipo, y si bien he intentado completar tantos campos como he ideado, los campos exactos dependerán de las especificaciones finales de la Asociación.
* Contacto: formulario que centraliza el contacto de usuarios (tanto registrados como no) con la asociación; al rellenarse se envía un e-mail a la dirección de administrador preestablecida.
* Tablón de anuncios: para que los usuarios y colaboradores puedan informarse de datos relacionados con Streetcats, el cuidado de los animales, o cualquier otro tema similar. Todos los usuarios pueden consultar el tablón, pero sólo los usuarios registrados pueden publicar. Un mensaje sólo podrá ser borrado por el propio usuario que lo publicó, o, lógicamente, por un administrador.
* Sección de documentos de descarga: exclusiva para usuarios registrados, permite descargar documentos. Esta funcionalidad ha sido especialmente solicitada por la asociación, que ha tenido dificultades para hacer llegar contratos y otros documentos a sus colaboradores durante la pandemia.
* Repositorio de contratos: permite almacenar en la nube copias de todos los contratos de adopción y acogida que firma la asociación; también ha sido especialmente solicitada a fin de evitar su potencial pérdida, como ya ha sucedido en ocasiones anteriores.
* Donaciones: dado que la asociación quiere reorganizar su sistema de donaciones, se ha decidido no desarrollar (por ahora) esta funcionalidad y dejarla meramente explicativa.


La localización es un punto clave en esta aplicación: la asociación necesita, como mínimo, proyección en español y alemán para ser útil a todos sus colaboradores, y a ser posible también en catalán para favorecer el acceso a ayudas locales de las que en estos momentos carece. Para implementarla se ha utilizado la dependencia vue-I18n v.9, adaptada a Vue 3 y recientemente publicada. La base se ha preparado en inglés, que es además el lenguaje *default* para aquellos lenguajes que no tienen traducción en la aplicación, y aunque se han incluido literales para otros idiomas, especialmente el español, faltan muchas traducciones al catalán y al alemán. Como este proyecto es de programación y no de traducción, y para completarlas hace falta la colaboración de gente de la propia Asociación, he decidido no añadir estos literales a la entrega. El proceso está, en cualquier caso, perfectamente acabado.

## Produccion:
Al emplear vue-i18n en su última versión, en varios entornos (siempre en desarrollo, en ocasiones en producción) en ocasiones aparece un aviso de *bundle* en consola. Tiene solución, ([véase aquí](https://stackoverflow.com/questions/66140411/you-are-running-the-esm-bundler-build-of-vue-i18n-it-is-recommended-to-configur)), pero al no ser un error invalidante ni un problema he decidido mantener la dependencia en su última versión.

Teniendo el diseño anterior claramente establecido y un framework básico funcional ha sido relativamente sencillo desarrollar la aplicación. Se han desarrollado las funcionalidades de forma secuencial, empezando por el proceso de autenticación (del que dependen los detalles de varias de las funcionalidades) y procurando desarrollar primero el esqueleto de la funcionalidad y luego ir añadiéndole los detalles.

Para gestionar los estados se ha empleado Vuex (v4). Esto es particularmente relevante en el proceso de login, ya que al guardar los accesos existoso a Firebase en la *store* de Vuex ha permitido mantener la información de usuario en continua posibilidad de acceso y uso. 

Por otro lado, la gestión de rutas se ha realizado en el archivo routes/index. Se ha incluido tanto una página *default* 404 como un guardarrutas con redirecciones que impide que usuarios sin las autorizaciones necesarias puedan acceder a las páginas concretas que las requieren. También se busca impedir que los usuarios que ya han hecho login puedan acceder a las pantallas de login, registro, o recuperación de contraseña.

Tan pronto como la aplicación ha resultado funcional se ha comenzado a subir a Firebase, actualizando el despliegue con cada nueva funcionalidad.

Ya avanzada la aplicación se ha decidido incluir un mapa interactivo de Google Maps que marca la casa de acogida de la Asociación; por el momento el componente de mapa se ha incluido en el apartado 'donaciones', aunque es muy sencillo, gracias al funcionamiento de los componentes de Vue, moverlo a cualquier otro apartado de la aplicación. 

# Despliegue
El proyecto se ha desplegado en Firebase Hosting, completando los sistemas de almacenamiento, autorización y bases de datos. La estructura general de todo esto se planteó al empezar el proyecto, cuando inicié el proyecto en Firebase con el comando 'firebase init' en el front.

Antes de desplegar ha sido necesario preparar el proyecto en la carpeta /dist; esto se ha hecho directamente con el comando 'npm run build'. Hecho esto se ha desplegado y actualizando, siempre después de *rebuild*) con el comando 'firebase deploy'.

Por seguridad he establecido requisitos de acceso en bases de datos y storages, y he limitado el acceso a la API key a llamadas provenientes del dominio de mi aplicación a través de [la consola de Google APIs](http://console.developers.google.com/), como se recomienda para los proyectos desplegados en Firebase Hosting.

El proyecto, con favicon específico, está desplegado en: https://streetcats-f248d.web.app

# Resultados y conclusiones
Estoy satisfecha tanto con el trabajo realizado como con el resultado obtenido, aunque considero que esta aplicación todavía requiere bastante trabajo antes de poder ser donada a y utilizada por la Asociación.

Entre las tareas que no se han acabado para este proyecto (que por lo demás está muy completo) destacan las siguientes:
1. Desarrollo de la funcionalidad de donaciones, a la espera de ver si finalmente la asociación quiere enlazar con *paypal*, con *bizum*, o simplemente mantener una página informativa en esta sección.
2. Desarrollo del envío de e-mail de verificación al registrar un usuario: dado que la asociación no ha indicado si desea permitir que cualquiera se registre o si quiere verificar los e-mails por sí misma, la funcionalidad de registro queda utilizable pero no detallada. Sí que se han desarrollado, no obstante, pantallas separadas de login, registro y *reset* de contraseña.
3. Análisis y desarrollo de la aceptación de la 'política de cookies'.

# Bibliografia y webgrafia
Para la elaboración de este proyecto se han consultado los siguientes recursos:
* [Índice para Readme](https://ecotrust-canada.github.io/markdown-toc/)
* [Vue 3 Cheat Sheet](https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf)
* [Resolución Vue con Bootstrap5](https://github.com/apgapg/vue_bootstrap_5_sample)
* [Semantic GIT](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
* Localización: [tutorial v3](https://www.positronx.io/vue-i18n-tutorial-how-to-build-multi-lingual-vue-js-app/), [guía v2](https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n/)
* [E-mailing](https://www.emailjs.com/docs/)
* [Adaptación de vue-feather-icons para vue 3](https://github.com/zhuowenli/vue-feather-icons)
* [Vue 3 Animations by The Net Ninja](https://www.youtube.com/watch?v=RIApQjn9fvw)
* [Vuex Auth](https://www.smashingmagazine.com/2020/10/authentication-in-vue-js/)
* [Hooks en Vue3](https://learnvue.co/2020/12/how-to-use-lifecycle-hooks-in-vue3/#composition-api)
* [Animación 'shake' básica](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_shake)
* [PNG de pata de gato](https://www.hiclipart.com/free-transparent-background-png-clipart-invyb/download)
