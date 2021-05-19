# petgram-react
Repo del [Curso de React Avanzado de Platzi](https://platzi.com/clases/react-avanzado/)

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


## Recursos
- [Vercel](https://vercel.com/docs)
- [styled-components](https://styled-components.com/)
- [Cool Text Generator](https://maketext.io/)
- [svgomg](https://jakearchibald.github.io/svgomg/)
- [react-svgr](https://react-svgr.com/playground/)
