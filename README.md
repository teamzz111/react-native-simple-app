# Technical Test

App realizada con React Native

## Comenzando 🚀

La arquitectura de la aplicación es la siguiente

[logo]: https://alotroladodeltelefonoblog.files.wordpress.com/2018/11/introduction-to-react-native-8-638.jpg?w=640 "Logo Title Text 2"

Está dividida en las siguientes capas 

1. Visual, se encuentran los contenedores de cada vista.
2. Componentes, aquí se encuentran los elementos listos para ser reutilizados.
3. Utils, en esta zona están las funciones que son útiles, por ejemplo la traída de datos de la api, en esta capa está network.
4. Firebase, conexión con analytics, esta capa envía datos a firebase.
5. sqlLite, en esta capa se tratan datos con almacenamiento offline
6. Navegación, en esta capa se manejan los stacks y toda la navegación necesaria.

La aplicación funciona tanto en vertical como horizontal.

Se maneja KittenUI.

[logo]: https://srv-file14.gofile.io/download/F33XE4/Screen%20Shot%202020-06-21%20at%205.15.16%20PM.png
 "Logo Title Text 2"

### Pre-requisitos 📋

```
Android Studio
React Native CLI
Android SDK
Node.js
NPM 

```

### Instalación 🔧


```
npm i
npm run android
```


## Ejecutando las pruebas ⚙️

```
Se manejan pruebas con JEST.JS 
```


## Despliegue 📦

Realizando despliegue, es necesario generar el apk firmado para ser instalado en cualquier aplicación.



