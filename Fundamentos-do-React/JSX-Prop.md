# Usando JSX como Valor de Prop em React

Em React, **você pode passar JSX como valor de uma prop**, permitindo que um componente receba elementos complexos como conteúdo. Isso é muito útil para componentes genéricos de UI, como cards, botões ou modais.

---

## Regras Importantes

1. **Deve haver um elemento pai:**
   Se você quiser passar múltiplos elementos, eles precisam estar envolvidos por um elemento pai (`div`, `span`, `<> </>` etc.):

```jsx
<MyComponent
  content={
    <div>
      <h1>Título</h1>
      <p>Descrição do conteúdo.</p>
    </div>
  }
/>
```

2. **Pode ser apenas um elemento:**
   Se for apenas um elemento, não é necessário envolver em um pai extra:

```jsx
<MyComponent content={<p>Texto simples</p>} />
```

---

## Exemplo Completo

```jsx
function Card({ title, description, footer }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{description}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}

// Uso
<Card
  title={<h2>Meu Card</h2>}
  description={
    <div>
      <p>Este é um card com descrição detalhada.</p>
      <p>Pode ter múltiplos elementos dentro.</p>
    </div>
  }
  footer={<button>Saiba mais</button>}
/>
```

No HTML renderizado, tudo será exibido dentro do `<div>` correspondente, preservando a estrutura e os estilos.

---

## Dicas Práticas

* **Flexibilidade:** JSX como prop permite que o componente seja **totalmente customizável**.
* **Evite fragmentos desnecessários:** use `<></>` apenas quando precisar agrupar múltiplos elementos.
* **Props nomeadas:** prefira nomes claros como `header`, `footer`, `icon`, `content` para facilitar a leitura do código.

---

## Conclusão

Passar JSX como prop é uma técnica poderosa em React para criar **componentes altamente reutilizáveis e flexíveis**, permitindo que cada instância do componente receba conteúdo próprio, sem limitar a estrutura interna do componente.
