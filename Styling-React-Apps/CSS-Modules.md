
# CSS Modules

**CSS Modules** permitem criar regras CSS com **escopo automático**, evitando conflitos entre componentes.

---

## Como funciona

- O bundler transforma as classes CSS em identificadores únicos quando o arquivo termina com `.module.css`.
- Cada componente que importa o CSS terá suas classes isoladas.

---

### Exemplo de uso

1. Criar o arquivo CSS do componente:

```css
/* Header.module.css */
.paragraph {
  color: purple;
  font-size: 18px;
}
```

2. Importar no componente:

```jsx
// Header.jsx
import classes from "./Header.module.css";

export default function Header() {
  return <p className={classes.paragraph}>Texto estilizado</p>;
}
```

---

## Vantagens

- CSS **desacoplado do JSX**.  
- Classes têm **escopo isolado** para o componente que importa o arquivo.  

## Desvantagens

- Cria **muitos arquivos pequenos** de CSS, um por componente.
