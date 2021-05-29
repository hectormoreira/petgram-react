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





## Recursos
- [Vercel](https://vercel.com/docs)
- [styled-components](https://styled-components.com/)
- [Cool Text Generator](https://maketext.io/)
- [svgomg](https://jakearchibald.github.io/svgomg/)
- [react-svgr](https://react-svgr.com/playground/)
