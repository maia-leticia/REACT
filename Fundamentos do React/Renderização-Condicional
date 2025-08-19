
# Renderização Condicional no React

Existem diferentes maneiras de renderizar elementos condicionalmente em React. Abaixo estão três abordagens comuns:

---

## 1. Usando Expressão Ternária

A expressão ternária permite retornar um valor ou outro, dependendo da condição.

```jsx
{!selectedTopic ? "" : null}
```

Neste caso:
- Se `selectedTopic` **não** estiver definido → retorna uma string vazia.
- Caso contrário → retorna `null`.

---

## 2. Usando Operador Lógico `&&`

Uma forma mais limpa e comum de renderizar condicionalmente.

```jsx
{selectedTopic && <Componente />}
```

Neste caso:
- Se `selectedTopic` for **true** → renderiza `<Componente />`.
- Se `selectedTopic` for **false** → não renderiza nada.

---

## 3. Guardando JSX em Variável

Também é possível definir previamente o conteúdo JSX em uma variável e renderizá-la.

```jsx
let content;

if (selectedTopic) {
  content = <Componente />;
} else {
  content = null;
}

return (
  <div>
    {content}
  </div>
);
```

---

✅ **Resumo:**
- **Ternário** → útil para condições simples de *if/else*.  
- **&&** → ótimo para renderizar algo apenas quando a condição for verdadeira.  
- **Variável JSX** → ideal para condições mais complexas.
