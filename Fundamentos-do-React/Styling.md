
# Styling e Dynamic Styling no React

Em React, é possível aplicar estilos de forma condicional ou dinâmica usando `className` e variáveis.  

---

## 1. Usando `className`

Você pode definir classes CSS diretamente no JSX usando o atributo `className`.

```jsx
<p className="minha-classe">Texto estilizado</p>
```

---

## 2. Dynamic Styling com Expressão Ternária

É comum querer alterar a classe de um elemento com base no estado do componente.  

```jsx
export default function App() {
    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <div>
            <p className={isSelected ? "active" : undefined}>Style me!</p>
            <button onClick={() => setIsSelected(true)}>Toggle style</button>
        </div>
    );
}
```

- Se `isSelected` for `true` → `<p>` recebe a classe `"active"`.  
- Se `isSelected` for `false` → `<p>` não recebe classe (`undefined`).  

---

## 3. Passando Variáveis como Props

Você também pode passar variáveis para definir a classe dinamicamente:

```jsx
function Texto({ isActive }) {
    return <p className={isActive ? "active" : ""}>Styled Text</p>;
}
```

- O componente `<Texto>` recebe a prop `isActive`.  
- A classe é aplicada de acordo com o valor de `isActive`.  

---

