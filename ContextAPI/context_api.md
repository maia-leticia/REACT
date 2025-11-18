# 📘 Context API --- Guia Didático

A **Context API** é uma ferramenta *built-in* do React usada para
**compartilhar dados entre componentes** sem precisar usar prop
drilling.

Ela cria um **"escopo de dados compartilhado"** que engloba vários
componentes, permitindo que todos eles acessem o mesmo estado.

------------------------------------------------------------------------

## 🔧 Para que serve?

-   Compartilhar informações entre múltiplos componentes.
-   Evitar passar props manualmente por vários níveis.
-   Pode armazenar e compartilhar **state**, funções, valores derivados
    e qualquer tipo de dado.

------------------------------------------------------------------------

# 🚀 Como criar e usar um Context

## 1. Criar uma pasta para o contexto

Padrão comum:

    src/
     └─ store/

## 2. Criar o arquivo do contexto

Exemplo: `CartContext.jsx`

## 3. Criar o contexto

``` jsx
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
});
```

-   O nome deve começar com **letra maiúscula**.
-   O objeto dentro do `createContext` é apenas o *default value*.

------------------------------------------------------------------------

## 4. Envolver os componentes com o Provider

Escolha um componente que engloba todos os outros que vão usar o
contexto\
(geralmente `App.jsx` ou um layout).

Importe o contexto:

``` jsx
import { CartContext } from "./store/CartContext";
```

### 🟦 React 19+

O próprio contexto atua como Provider:

``` jsx
<CartContext value={{ items: [] }}>
  ... código ...
</CartContext>
```

### 🟥 React 18 ou anterior

Usa o `.Provider`:

``` jsx
<CartContext.Provider value={{ items: [] }}>
  ... código ...
</CartContext.Provider>
```

------------------------------------------------------------------------

# 🎯 Consumindo o Context no Componente

## 1. Importar o hook

``` jsx
import { useContext } from "react";
```

## 2. Usar o Context

``` jsx
const cartCtx = useContext(CartContext);
```

Ou destruturando:

``` jsx
const { items } = useContext(CartContext);
```

Agora `items` e qualquer outro valor do contexto estará disponível.

------------------------------------------------------------------------

# ⚡ React 19+: usando `use`

React 19 introduziu o hook:

``` jsx
const { items } = use(CartContext);
```

### Diferenças:

-   `use()` é mais flexível.
-   Pode ser usado **dentro de condicionais**, diferente do
    `useContext`, que precisa seguir as regras de hooks.
-   Torna o React mais ergonômico e previsível.
