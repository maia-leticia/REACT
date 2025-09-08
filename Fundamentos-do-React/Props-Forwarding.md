# Props Forwarding em React

Quando criamos componentes React, **as props que passamos para um componente não são automaticamente enviadas para os elementos internos**. Isso significa que se você fizer algo assim:

```jsx
<MyComponent id="main" className="container" />
```

E dentro do componente:

```jsx
export default function MyComponent() {
  return <div>Hello World</div>;
}
```

O `div` **não receberá** o `id` nem o `className` — eles ficam apenas no componente `MyComponent`.

---

## Problema

Sem forwarding de props, você precisa explicitamente passar cada prop para os elementos internos:

```jsx
export default function MyComponent({ id, className }) {
  return <div id={id} className={className}>Hello World</div>;
}
```

Isso fica repetitivo e pouco escalável quando o componente recebe muitas props diferentes.

---

## Solução: Proxy Props / Rest Props

Você pode usar o **rest operator (`...props`)** para receber todas as props restantes em um objeto e repassá-las para o elemento interno:

```jsx
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
```

### Uso:

```jsx
<Section id="examples" className="highlighted" title="Examples">
  <p>Este é um conteúdo dentro da Section.</p>
</Section>
```

No HTML resultante:

```html
<section id="examples" class="highlighted">
  <h1>Examples</h1>
  <p>Este é um conteúdo dentro da Section.</p>
</section>
```

> Todas as props passadas para `Section` (`id`, `className`, etc.) foram "replicadas" para o `<section>` interno.

---

## Exemplo com Condicional de Elementos

Você também pode combinar forwarding de props com render condicional:

```jsx
export default function Input({ placeholder, type, ...props }) {
  return (
    <>
      {type === "text" ? (
        <input placeholder={placeholder} {...props} />
      ) : (
        <textarea placeholder={placeholder} {...props} />
      )}
    </>
  );
}
```

### Uso:

```jsx
<Input
  type="text"
  placeholder="Digite seu nome"
  id="name"
  className="input-field"
/>

<Input
  type="textarea"
  placeholder="Digite sua mensagem"
  id="message"
  className="textarea-field"
/>
```

> Tanto o `<input>` quanto o `<textarea>` recebem automaticamente todas as props adicionais.

---

## Conclusão

* **Props não são enviadas automaticamente** para elementos internos.
* O **rest operator (`...props`)** permite criar componentes genéricos e reutilizáveis, passando todas as props extras para os elementos internos.
* Isso é especialmente útil em componentes customizados de UI, onde você quer manter a flexibilidade de receber `id`, `className`, `style` ou eventos (`onClick`, etc.).

---

## Dica prática

Sempre que criar um componente que envolva elementos HTML ou outros componentes, pense:

```text
Quais props extras quero que o usuário possa passar?
```

E use `{...props}` para repassá-las, evitando limitar a flexibilidade do componente.
