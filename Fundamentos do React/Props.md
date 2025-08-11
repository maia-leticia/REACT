
# Props em React

Uma das vantagens dos componentes é que eles podem ser reutilizáveis, e isso é feito a partir das **props**.

---

## O que são Props?

Props permitem que dados sejam passados para componentes.

Na tag do componente, as props são os atributos que você passa com seus respectivos valores.

Podem ser:

- Strings
- Números (usando `{}`)
- Objetos
- Arrays
- Entre outros tipos

---

## Como as Props funcionam internamente?

Ao passar props em um componente, o React as transforma em um objeto único e passa esse objeto como o primeiro argumento para a função do componente.

Exemplo:

```jsx
<CoreConcept
  title="Components"
  description="Core UI Building Blocks"
/>
```

Internamente, isso equivale a:

```js
{
  title: "Components",
  description: "Core UI Building Blocks"
}
```

E a função do componente recebe esse objeto:

```jsx
function CoreConcept(props) {
  return props.title;
}
```

---

## Usando Props derivadas de uma matriz

Se você tem dados organizados em um array de objetos, pode importar e passar os valores para o componente.

Exemplo de importação nomeada:

```jsx
import { CORE_CONCEPTS } from "./constants";
```

### Passagem das props de duas formas:

1) Passando cada prop explicitamente:

```jsx
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
/>
```

2) Passando todas as props de um objeto com spread operator, desde que os nomes coincidam:

```jsx
<CoreConcept {...CORE_CONCEPTS[0]} />
```

---

## Desestruturando props na função

Você pode desestruturar as props no parâmetro da função para acessar diretamente os valores:

```jsx
function CoreConcept({ title }) {
  return title;
}
```
