
# Fragmento em React

Em React, **Fragmentos** são usados para agrupar um conjunto de elementos filhos sem adicionar nós extras ao DOM. Isso é útil quando você quer retornar múltiplos elementos de um componente sem criar um elemento HTML desnecessário (como <div>).

---

## Sintaxe

### 1. Usando <Fragment> explicitamente

```javascript
import { Fragment } from "react";

function MeuComponente() {
  return (
    <Fragment>
      <h1>Título</h1>
      <p>Este é um parágrafo dentro do fragmento.</p>
    </Fragment>
  );
}
```

### 2. Usando a sintaxe curta <>...</>

```javascript
function MeuComponente() {
  return (
    <>
      <h1>Título</h1>
      <p>Este é um parágrafo dentro do fragmento.</p>
    </>
  );
}
```

---

## Vantagens

- Evita a criação de elementos desnecessários no DOM.
- Mantém a hierarquia de componentes mais limpa.
- Útil especialmente em listas e componentes que retornam múltiplos elementos.

---

## Observação

- A sintaxe curta <>...</> não suporta atributos.
- Se precisar de chave (key) em listas, deve usar <Fragment key={...}>.
