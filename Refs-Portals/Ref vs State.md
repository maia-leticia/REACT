
# Ref vs State no React

## 🧠 Conceito Geral

Tanto **state** quanto **ref** são usados para armazenar informações dentro de um componente React,  
mas eles se comportam de formas bem diferentes.

---

## ⚡ State (`useState`)

- Quando um **estado** é alterado, **o componente é reexecutado (re-renderizado)**.  
- Essa reexecução faz com que a **UI reflita o novo valor**.  
- Deve ser usado para **valores que afetam a interface do usuário**.

### Exemplo:

```javascript
import { useState } from 'react'

function Exemplo() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  )
}
```

🧩 Aqui, sempre que `setContador` é chamado, o componente é renderizado novamente.

📌 **Evite usar `useState`** para armazenar dados que **não precisam aparecer na interface**  
(ex: referências de elementos, temporizadores, valores intermediários, etc.).

---

## 🔗 Refs (`useRef`)

- **Não causam re-renderização** quando o valor é alterado.  
- Permitem **acesso direto a elementos do DOM**.  
- Mantêm o valor **persistente entre renderizações**.  
- São ideais para armazenar dados que **não precisam ser exibidos na UI**.

### Exemplo:

```javascript
import { useRef } from 'react'

function ExemploRef() {
  const inputRef = useRef()

  function handleFocus() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focar no input</button>
    </div>
  )
}
```

🧩 Aqui, `useRef` é usado para acessar o elemento `<input>` diretamente sem re-renderizar o componente.

---

## 🆚 Comparativo Rápido

| Característica | `useState` | `useRef` |
|----------------|-------------|-----------|
| Re-renderiza o componente? | ✅ Sim | ❌ Não |
| Reflete na UI? | ✅ Sim | ❌ Não |
| Guarda valores entre renders? | ✅ Sim | ✅ Sim |
| Ideal para... | Dados que aparecem na interface | Dados internos / DOM |
| Exemplo de uso | contador, formulário, tema | input DOM, timeout, contador interno |

---

🧩 **Resumo:**  
- Use **state** quando o valor **impactar o que o usuário vê**.  
- Use **ref** quando o valor **não precisar aparecer na interface**, mas ainda for necessário internamente.
