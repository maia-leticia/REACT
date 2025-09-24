# Tailwind CSS

## Conceito
- Usa **pequenas classes utilitárias** para aplicar estilos diretamente em elementos.
- Os estilos são aplicados via `className=""`.

## Exemplo Básico
```javascript
function App() {
  return <div className="bg-blue-500 text-white p-4">Hello World</div>;
}
```

## Condições de Estilo
- É possível colocar as classes em uma variável e usar condicionais.

```javascript
const buttonClass = isPrimary 
  ? "bg-blue-500 text-white" 
  : "bg-gray-300 text-black";

<button className={buttonClass}>Clique aqui</button>
```

## Vantagens
- **Reusable utility class** → classes utilitárias reutilizáveis.
- **Rápido** → desenvolvimento mais ágil.
- **Altamente configurável** → customização via `tailwind.config.js`.

## Desvantagens
- **Muita escrita no JSX** → excesso de classes inline.
- **Longos `className`** → pode comprometer a legibilidade.
