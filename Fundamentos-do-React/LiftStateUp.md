# Resumo: Elevação de Estado (Lifting State Up) em React

## Conceito
Quando **dois ou mais componentes precisam compartilhar e gerenciar o mesmo estado**, o estado deve ser movido para o **componente pai em comum**.  
Isso é chamado de **elevação de estado (lifting state up)**.

---

## Exemplo básico

```javascript
import { useState } from "react";

function ComponentePai() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <InputFilho texto={texto} setTexto={setTexto} />
      <ExibicaoFilho texto={texto} />
    </div>
  );
}

function InputFilho({ texto, setTexto }) {
  return (
    <input 
      type="text" 
      value={texto} 
      onChange={e => setTexto(e.target.value)} 
    />
  );
}

function ExibicaoFilho({ texto }) {
  return <p>Você digitou: {texto}</p>;
}
```

**Como funciona:**

- O estado `texto` está no **componente pai**.  
- `InputFilho` altera o estado através de `setTexto`.  
- `ExibicaoFilho` lê o estado e exibe o valor atualizado.  
- Resultado: **ambos os filhos compartilham o mesmo estado** de forma sincronizada.

---

## Boas práticas

- Sempre que múltiplos componentes precisarem **ler ou modificar o mesmo estado**, considere **elevar o estado** para o pai mais próximo em comum.  
- Evita inconsistências entre componentes e facilita o gerenciamento do estado.

---

## Resumo rápido

- Elevar estado = mover estado para **componente pai em comum**.  
- Filhos recebem **estado e funções de atualização via props**.  
- Garante que todos os componentes dependentes do estado fiquem **sincronizados**.
- ⚠️ **Atenção:** não eleve estados que podem **reexecutar funções pesadas a todo momento**, pois isso pode afetar a performance do seu app.
