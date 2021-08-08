# petgram-react
Repo del [Curso de React Avanzado de Platzi](https://platzi.com/clases/react-avanzado/)

[Demo en vercel](https://petgram-hectormoreira.vercel.app/)

## Dependencias
```sh
npm i webpack webpack-cli --save-dev
npm i html-webpack-plugin --save-dev
npm i webpack-dev-server --save-dev
npm i react react-dom
npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev
npm i standard --save-dev
```
- `npm i standard --save-dev`. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React.
- `npm i styled-components` styled-components
- `npm i react-icons` iconos
- `npm i intersection-observer` interception observer - polyfill
- `npm i @reach/router` reach/router para manejo de rutas

### Instalar Vercel
- `npm i -g vercel` Instalar vercel 
- `vercel login` iniciar sesión, ingresar email y confirmar
- `vercel --prod` desplegar

## Conceptos
**Styled-components**
- Los styled-components son una de las nuevas formas de usar CSS en JavaScript moderno. Está basado en los CSS modules, una forma de escribir CSS que se enfoca el que el alcance de los estilos funcione por componente y no se filtren a ningún otro elemento de la página.
- Los styled components se basan en crear componentes de carácter estético para hacer código más semántico y evitar los problemas de especificidad que trae el CSS tradicional.
- Los styled components le permiten escribir CSS simple en sus componentes sin preocuparte por las colisiones de nombres de clase y haciendo uso del poder de JavaScript para manejar estilos con lógica (basado en props).
>Nota: en styled components escribes CSS exacto, así que prácticamente todo lo que puedes hacer en CSS lo puedes hacer en styled components y se escribe igual.

**¿Qué es GraphQL y React Apollo? Inicializando React Apollo Client y primer HoC**
- GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación. Imaginemos que tenemos una REST API con WordPress, él nos entrega un JSON con mucha data innecesaria y solo queremos unos cuantos fields; GraphQL hace posible obtener únicamente esa data.

- React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL.

- `npm i apollo-boost`utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración
- `npm install @apollo/client graphql` instalar Apollo y graphql

**¿Qué es Reach Router?**
- Reach Router es una versión simplificada y mejor optimizada de React Router, su creador es Ryan Florence el mismo creador de React Router.
- Se anunció que los dos paquetes se iban a unir, pero su API se va a parecer más a Reach Router.

**Introducción a React.Context**
Context API es una característica que tiene React para poder pasar datos en nuestra aplicación sin necesidad de usar las Props.

Para crear un contexto vamos a importar el método createContext de la librería React. El contexto que creemos no va a dejar de ser un componente de React, por ello debe llevar mayúscula al inicio.

El Context que creemos nos va a proporcionar 2 componentes:

- Provider: componente que debe envolver a nuestra aplicación.
- Consumer: nos va a permitir acceder a las render props que declaremos en el Provider.


**Json Web Token**
Un JSON Web Token (**JWT**) es un estándar abierto para crear tokens y asegurar que el envío de datos es confiable y seguro. Van a ser muy útiles para implementar la lógica de los likes pues solamente los usuarios autentificados podrán dar like.

Un JWT se conforma de 3 partes:

- Header: Es un objeto que define qué algoritmo y tipo tiene el token.
- Payload: La información que almacenamos en el token.
- Verify Signature: Una encriptación del header más el payload más tu llave secreta.
Para utilizar nuestro JWT necesitamos añadirlo al header `authorization` de las peticiones HTTP que hagamos con el texto `Bearer [token]`.

**Midiendo el performance de nuestra app y usando React.memo()**
- ¡Los componentes solo harán render si sus props han cambiado! Normalmente, todos los componentes de React en nuestro árbol pasarán por un render cuando se realicen cambios. Con PureComponent y React.memo(), podemos tener solo algunos componentes renderizados.

```js
// mi-archivo.js
{/*...*/}

export default Home = React.memo(HomePage)
```

**React.lazy() y componente Suspense**
- Suspense es un componente de React que nos va a permitir suspender algo cuando está en modo `lazy();` y `lazy()`. El cual nos va a permitir importar un componente que no será cargado hasta que este sea llamado. De esta forma mejoraremos el tiempo de carga de nuestra aplicación enormemente.

**Usando PropTypes para validar las props**
- Las PropTypes serán un validador del tipo de datos que estamos recibiendo como props en nuestros componentes, el cual nos permitirá a que sea exclusivamente ese tipo de datos.

**PWA: generando el manifest**
- Usaremos `webpack-pwa-manifest` para crear nuestro `manifest.json` y que nuestra aplicación pueda ser compatible con todos los requerimientos de una PWA.

**PWA: soporte offline**
- Utilizaremos `workbox-webpack-plugin` para agregar soporte online a nuestro proyecto, así como lo hacen Twitter e Instagram cuando entramos desde el navegador.

**Testing con Cypress**
Vamos a usar cypress para hacer testing de nuestra aplicación. Hacer testing es imprescindible en nuestras aplicaciones para corroborar que todo está funcionando y mandar los datos a producción.

[https://www.cypress.io/](https://www.cypress.io/)




## Recursos
- [Vercel](https://vercel.com/docs)
- [styled-components](https://styled-components.com/)
- [Cool Text Generator](https://maketext.io/)
- [svgomg](https://jakearchibald.github.io/svgomg/)
- [react-svgr](https://react-svgr.com/playground/)
- [Helmet](https://github.com/nfl/react-helmet)
