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
//TODO

### Modelo relacional
//TODO

### Mock-up de pantallas
Este es el diseño básico de la aplicación:
![Mockup](https://i.ibb.co/QNt9GZT/mockup.jpg)

He preferido optar por una paleta de colores prediseñada, ya que necesito un resultado profesional a la vez que agradable. Este ha sido el recurso elegido:

![Paleta](https://i.ibb.co/mHLHXX6/paleta.jpg)

## Diseño e implementación:
//todo introducir + empezar

La localización es un punto clave en esta aplicación: la asociación necesita, como mínimo, proyección en español y alemán para ser útil a todos sus colaboradores, y a ser posible también en catalán para favorecer el acceso a ayudas locales de las que en estos momentos carece. Para implementarla se ha utilizado la dependencia vue-I18n v.9, adaptada a Vue 3 y recientemente publicada. //TODO seguir explicando q la base ha sido en inglés y algunas traducciones no están (no es la clave de la práctica)

//TODO

## Producción:
//TODO explicar problemas con guardarrutas en index.js, que es lo apropiado
//TODO explicar basura del cors q me bloquea las descargas

# Despliegue
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

//TODO
