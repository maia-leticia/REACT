# useState em React

Em React, **alterar uma variável normal de JavaScript não atualiza a interface automaticamente**. Isso acontece porque componentes React são executados uma vez e só atualizam a UI quando são "avisados". É aí que entram os **States**.

## O que é useState

- `useState` é um **React Hook** que cria variáveis reativas controladas pelo React. 
- Alterar um state com a função de update faz o React **atualizar a UI automaticamente**.
- Importação:
```javascript
import { useState } from "react";
```
> Todos os hooks do React começam com `use`.

## Regras de uso

- Só pode ser chamado dentro de **funções de componentes React** ou dentro de outros **React Hooks**.
- Deve ser chamado no **top-level** do componente, **não dentro de funções internas ou loops**.

## Sintaxe

`useState` retorna um array de 2 elementos:
```javascript
const [state, setState] = useState(valorInicial);
```
- `state` → valor atual do state
- `setState` → função que atualiza o state e dispara a renderização
- `valorInicial` → valor que o state terá inicialmente

### Exemplo básico

```javascript
function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```