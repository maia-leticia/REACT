
# Children Props

No React, **children props** são usadas para acessar elementos ou componentes que são passados entre a abertura e o fechamento de uma tag de componente. Ou seja, quando você coloca algo dentro do componente, esse conteúdo pode ser capturado e renderizado dentro do próprio componente.

Existem duas formas comuns de acessar esses elementos:

1. **props.children**  
   Acessa diretamente o conteúdo passado dentro do componente via o objeto `props`.

   ```jsx
   function Container(props) {
     return <div>{props.children}</div>;
   }
   ```

2. **Desestruturação de { children }**  
   Extraindo `children` diretamente das props na declaração da função.

   ```jsx
   function Container({ children }) {
     return <div>{children}</div>;
   }
   ```

## Exemplo de uso:

```jsx
function App() {
  return (
    <Container>
      <h1>Olá, mundo!</h1>
      <p>Este é um exemplo de children props.</p>
    </Container>
  );
}
```

Nesse exemplo, o componente `Container` recebe os elementos `<h1>` e `<p>` como seus filhos (children) e os renderiza dentro da `div` com a classe "container".
