# 📘 Maneiras de Usar o Context no React

Existem diferentes formas de usar a Context API para compartilhar dados entre componentes.
A seguir estão as abordagens mais usadas: state + context, consumer e componentes com lógica interna.

## 🔄 1. Usando State + Context

Quando você cria um contexto, sempre precisa fornecer um value para o Provider.

Esse value pode receber valores vindos de um useState, permitindo que o estado seja compartilhado entre vários componentes.

### Exemplo:

```
import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {}
});
```

### Usando state dentro do Provider:

```
function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems(prev => [...prev, newItem]);
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      <YourComponents />
    </CartContext.Provider>
  );
}
```

### O que posso passar no value?

✔ states
✔ funções
✔ valores derivados
✔ objetos
✔ arrays

# 🟦 2. Usando .Consumer

Outra forma de consumir um contexto é usando o Consumer, que funciona sem hooks.

## Como funciona:

```
<CartContext.Consumer>
  {(value) => {
    return (
      <div>
        {value.items.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }}
</CartContext.Consumer>
```

### Resumo do fluxo:

O Consumer recebe uma função.

Essa função recebe o contexto como argumento (value).

Ela retorna JSX.

Ou seja, você tem dois return:

O do Consumer

O do componente principal

## 🧩 3. Criando um Componente com Lógica + Provider

(Pattern “Context Wrapper”)

Outra maneira muito organizada é criar um componente especial para a lógica do contexto.

### Passos:

Criar um componente que:

contém toda a lógica (state, funções…)

recebe children

retorna o Provider envolvendo esses children

Exemplo:
```
export function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems(prev => [...prev, item]);
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
```
Depois, no componente principal:
```
function App() {
  return (
    <CartContextProvider>
      <YourComponents />
    </CartContextProvider>
  );
}
```

### Vantagens:

✔ Melhor organização do código
✔ Lógica isolada
✔ Provider mais limpo
✔ Facilita testes
✔ Facilita escalabilidade

# 📌 Resumo Geral

| Maneira                         | Onde usar                       | Vantagem                           |
|---------------------------------|----------------------------------|-------------------------------------|
| **state + context**             | Provider principal               | Mais comum e direto                 |
| **Consumer**                    | Dentro do componente consumidor  | Funciona sem hooks, útil em casos específicos |
| **Componente wrapper com lógica** | Arquivo de contexto dedicado     | Código limpo e escalável           |
