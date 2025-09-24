# Styled Components

## Instalação
```bash
npm install styled-components
```

## Importação
```javascript
import { styled } from 'styled-components';
```

## Conceito
- Permite definir **CSS em componentes**.
- Usa **tag template literals** (``).
- Estilos ficam no **escopo do componente**.

## Exemplo Básico
```javascript
const Component = styled.div`
  CSS syntax here
`;

function App() {
  return <Component>Conteúdo</Component>;
}
```

## Condições com Props
- Você pode passar props para o estilo e usá-las dentro do CSS.

```javascript
const Input = styled.input`
  color: ${({ $invalid }) => $invalid ? '#f87171' : '#6b7280'};
`;

<Input $invalid={true} />
```

### Convenção
- Usar `$` nas props de estilo (ex: `$invalid`).

## Seletores e Hierarquia
- É possível declarar estilos de pai e filhos usando `&`.

```javascript
const Container = styled.div`
  background: #fff;

  & h1 {
    color: blue;
  }
`;
```

## Media Queries
- Suporta `@media` dentro dos estilos.

```javascript
const Box = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;
```

## Pseudo-classes
- Para usar propriedades como `:hover`:

```javascript
const Button = styled.button`
  background: #000;
  color: #fff;

  &:hover {
    background: #333;
  }
`;
```

## Organização de Arquivos
- **Estilo usado apenas em uma página** → pode ficar no mesmo arquivo.
- **Estilo reutilizável** → criar componentes de estilo em arquivo separado.

## Vantagens
- Fácil de usar.
- Mesmo pensamento do React (funções + estilos).
- Escopo de estilos por componente.

## Desvantagens
- Mistura React e CSS no mesmo arquivo.
- Pode gerar muitos "small wrapper components" (mas no React isso já é comum).
