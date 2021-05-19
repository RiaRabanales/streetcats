//TODO índice

# Introducción y anteproyecto

## Datos generales:
> **Proyecto:** Aplicación Web para Streetcats Artà

> **Autor:** [M. Rabanales](https://github.com/RiaRabanales)

> **Ciclo formativo:** Desarrollo de Aplicaciones Web

> **Fecha de entrega:** //TODO


## Descripción:
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

## Tecnologías:
* Lenguajes: Javascript, HTML5, CSS/SCSS, Bootstrap 5
* Frameworks: Vue 3 con vue-i18n para multilenguaje, emailjs para e-mailing, y vue-feather-icons para emplear iconos prediseñados como componentes importados de Vue.
* Bases de datos, *storage* y *hosting*: Firebase

# Desarrollo de la aplicación

## Análisis previo:
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

### Mock-up de pantallas
Este es el diseño básico de la aplicación:
![Mockup](https://i.ibb.co/QNt9GZT/mockup.jpg)

No obstante, tras avanzar en el proyecto he visto que este diseño no resulta agradable ni cómodo para el usuario, ya que reduce el contenido efectivo en pantallas horizontales a un contenedor excesivamente bajo, de manera que lo he replanteado moviendo las imágenes superiores al lateral. Siguen teniendo la misma animación y cambian cada vez que cambia la página del *router*.

He preferido optar por una paleta de colores prediseñada, ya que necesito un resultado profesional a la vez que agradable. Este ha sido el recurso elegido:

![Paleta](https://i.ibb.co/mHLHXX6/paleta.jpg)

## Diseño e implementación:
//todo introducir + empezar

La localización es un punto clave en esta aplicación: la asociación necesita, como mínimo, proyección en español y alemán para ser útil a todos sus colaboradores, y a ser posible también en catalán para favorecer el acceso a ayudas locales de las que en estos momentos carece. Para implementarla se ha utilizado la dependencia vue-I18n v.9, adaptada a Vue 3 y recientemente publicada. La base se ha preparado en inglés, que es además el lenguaje *default* para aquellos lenguajes que no tienen traducción en la aplicación, y aunque se han incluido literales para otros idiomas, especialmente el español, faltan muchas traducciones al catalán y al alemán. Como este proyecto es de programación y no de traducción, y para completarlas hace falta la colaboración de gente de la propia Asociación, he decidido no añadir estos literales a la entrega. El proceso está, en cualquier caso, perfectamente acabado.

//TODO

## Producción:
//TODO explicar problemas con guardarrutas en index.js, que es lo apropiado
//TODO explicar basura del cors q me bloquea las descargas

# Despliegue
El proyecto se ha desplegado en Firebase, completando los sistemas de almacenamiento, autorización y bases de datos.
//TODO

# Resultados y conclusiones
//TODO

# Bibliografía y webgrafía
Para la elaboración de este proyecto se han consultado los siguientes recursos:
* [Vue 3 Cheat Sheet](https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf)
* [Resolución Vue con Bootstrap5](https://github.com/apgapg/vue_bootstrap_5_sample)
* [Semantic GIT](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
* Localización: [tutorial v3](https://www.positronx.io/vue-i18n-tutorial-how-to-build-multi-lingual-vue-js-app/), [guía v2](https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n/)
* [E-mailing](https://www.emailjs.com/docs/)
* [Adaptación de vue-feather-icons para vue 3](https://github.com/zhuowenli/vue-feather-icons)
* [Vue 3 Animations by The Net Ninja](https://www.youtube.com/watch?v=RIApQjn9fvw)
* [Vuex Auth](https://www.smashingmagazine.com/2020/10/authentication-in-vue-js/)
* [Hooks en Vue3](https://learnvue.co/2020/12/how-to-use-lifecycle-hooks-in-vue3/#composition-api)
* [ Animación 'shake' básica](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_shake)
