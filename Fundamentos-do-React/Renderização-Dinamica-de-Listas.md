
# Outputting List Data Dinamically no React

Renderizar listas dinamicamente no React ajuda a evitar repetição de código e torna a aplicação mais escalável.

---

## Problema

- Precisamos de uma forma dinâmica de gerar componentes a partir de uma matriz de dados.

---

## Solução: JSX e `.map()`

- JSX permite renderizar uma matriz de dados.  
- O método `.map()` produz uma nova matriz de elementos com base na existente.

```jsx
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function App() {
  return (
    <div>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </div>
  );
}
```

---

## Importante: Prop `key`

- A prop `key` deve ser usada em cada elemento da lista.  
- Serve como identificador único para o React rastrear mudanças e otimizar a renderização.

```jsx
<Component key={item.id} {...item} />
```


