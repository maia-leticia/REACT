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