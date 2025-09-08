# Mudando o Tipo de Tag em um Componente Dinamicamente

Em React, é possível alterar o tipo de tag de um componente de forma flexível. Aqui está um jeito simples de fazer isso:

> Observação importante: se você passar a prop com letra maiúscula (componente React ou tag HTML com letra maiúscula), não precisa declarar uma variável dentro do componente. Se passar uma tag HTML com letra minúscula, é necessário declarar a variável antes de usar.

---

## 1) Usando Fragmento `<></>`

**Componente:**

```jsx
export default function MeuComponente({ children }) {
  return <>{children}</>;
}
```

**Como chamar:**

```jsx
<MeuComponente>
  <p>Olá mundo!</p>
</MeuComponente>
```

---

## 2) Usando Props para passar uma tag HTML

**Componente:**

```jsx
export default function Tab({ children, ButtonsContainer }) {
  const Container = ButtonsContainer; // necessário apenas se for tag HTML com letra minúscula
  return <Container>{children}</Container>;
}
```

**Como chamar:**

```jsx
<Tab ButtonsContainer="div">
  <p>Olá mundo!</p>
</Tab>
```

---

## 3) Usando Props para passar um componente React

**Componente:**

```jsx
export default function Tab({ children, ButtonsContainer }) {
  return <ButtonsContainer>{children}</ButtonsContainer>; 
}

const Menu = ({ children }) => <nav>{children}</nav>;
```

**Como chamar:**

```jsx
<Tab ButtonsContainer={Menu}>
  <p>Olá mundo!</p>
</Tab>
```

> Componentes sempre devem ser passados com letra maiúscula.

---

## 4) Definindo uma prop padrão

**Componente:**

```jsx
export default function Tab({ children, ButtonsContainer = "div" }) {
  const Container = ButtonsContainer; 
  return <Container>{children}</Container>;
}
```

**Como chamar:**

```jsx
<Tab>
  <p>Olá mundo!</p>
</Tab>
```

Se ninguém passar a prop, ele usa a tag padrão (`div`).
