# Componentes no React

## UI Building Blocks

Uma aplicação React é composta por uma **combinação de componentes**.

> Aplicações complexas são divididas em partes menores e reutilizáveis.  
Isso facilita a **manutenção** e a **escalabilidade** do código.

Por serem **reutilizáveis**, os componentes tornam mais fácil realizar alterações sem afetar toda a aplicação.

---

## JSX (JavaScript eXtension)

O JSX permite escrever **HTML dentro do JavaScript**.

```jsx
const MeuComponente = () => {
  return <h1>Olá, mundo!</h1>;
}
```
---

# Diferença entre `index.jsx`, `App.jsx` e `index.html`

## `index.html`

- É o único arquivo **HTML** da aplicação React.
- Contém a `div` com `id="root"`, que serve como **ponto de entrada** para a aplicação React.
- **Não entende JSX** diretamente — por isso, o JavaScript precisa ser processado por um *bundler*.

---

## `index.jsx`

- É o **ponto de entrada JavaScript** da aplicação React.
- Responsável por inicializar o React e renderizar o primeiro componente da aplicação.
- Usa `ReactDOM.createRoot` para **selecionar o elemento HTML** (`#root`) e injetar nele o componente raiz (`App`).

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
```
## `App.jsx`

- É o **componente raiz (Root Component)** da aplicação.
- Serve como ponto inicial da **estrutura de componentes**, podendo conter outros componentes como `Header`, `Main`, `Footer` etc.
- A partir dele, é construída a **árvore de componentes** (*Component Tree*).

### Exemplo de estrutura:

```jsx
<App>
  <Header />
  <Main />
  <Footer />
</App>
```
---

## Observações Importantes

- **JSX não é compreendido diretamente pelos navegadores.**  

- **Componentes React devem começar com letra maiúscula:**
  - Evita conflitos de nomes.
  - Permite que o React identifique o elemento como um **componente personalizado** em vez de uma tag HTML comum.
