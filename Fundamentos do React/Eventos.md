# Eventos em React

## Elementos Built-in

Em React, podemos adicionar **eventos** aos elementos built-in (como `<button>`, `<input>`, etc.) utilizando a sintaxe:

```jsx
on<Evento>
```

### Exemplo:
```jsx
<button onClick={handleClick}>Clique aqui</button>
```

## Como funciona

- O evento deve **apontar para uma função** que será executada quando o evento acontecer.  


## Convenção de nomes

Por convenção, funções que lidam com eventos geralmente começam com **`handle`**:
```jsx
function handleClick() {
  console.log("Botão clicado!");
}
```

## Funções em eventos: Arrow Function vs Nome da Função

### 1. Usando apenas o **nome da função**
```jsx
<button onClick={handleClick}>Clique aqui</button>
```
**Quando usar:**
- Quando você quer que a função seja executada **apenas quando o evento acontecer**.  
- Quando a função **não precisa receber argumentos extras**.


### 2. Usando **Arrow Function**
```jsx
<button onClick={() => handleClick('argumento')}>Clique aqui</button>
```
**Quando usar:**
- Quando você **precisa passar argumentos** para a função.  
- Quando quer executar **mais de uma ação** dentro do evento.


## Passando funções como props para componentes

Você também pode passar funções como props para componentes personalizados:

```jsx
function handleSelect() {
  console.log("Hello World!");
}

<TabButton onSelect={handleSelect}>Components</TabButton>

// COMPONENT
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
```

**Explicação:**
- A função `handleSelect` é passada como prop `onSelect` para o componente `TabButton`.
- Dentro do componente, o evento `onClick` do botão chama a função recebida via props.