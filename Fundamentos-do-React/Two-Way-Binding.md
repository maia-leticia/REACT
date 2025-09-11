# Resumo: Two-way Binding com `onChange` em React

## Conceito
**Two-way Binding** é quando o valor de um input é **sincronizado com o estado do componente**, e alterações no input atualizam automaticamente o estado.

---

## Exemplo básico

```javascript
import { useState } from "react";

function MeuInput() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={nome} 
        onChange={e => setNome(e.target.value)} 
      />
      <p>Olá, {nome}!</p>
    </div>
  );
}
```

**Como funciona:**

1. `value={nome}` → input mostra o valor do estado `nome`.  
2. `onChange={e => setNome(e.target.value)}` → qualquer alteração no input atualiza o estado.  
3. Resultado: **input e estado sempre sincronizados**.

---

## Boas práticas

- Sempre usar `value` + `onChange` para inputs controlados.  
- Evita inconsistências entre UI e estado do componente.  
- Funciona para **inputs de texto, números, checkboxes, selects**, etc.  

---

## Resumo rápido

- **Two-way Binding:** input e estado do componente sincronizados.  
- **`value`** → define o valor do input.  
- **`onChange`** → atualiza o estado quando o usuário digita.  
- Mantém **UI e estado sempre consistentes**.