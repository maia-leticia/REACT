# Resumo: Diferença entre `setIsEditing(!isEditing)` e `setIsEditing(editing => !editing)`

## Cenário
```javascript
const [isEditing, setIsEditing] = useState(false);
```

## 1️⃣ `setIsEditing(!isEditing)`

- Alterna usando o valor atual da variável: `true → false` ou `false → true`.
- **Problema:** se houver múltiplas atualizações rápidas ou assíncronas, pode usar um valor desatualizado e gerar bugs.
- Útil para casos simples, com cliques únicos.

## 2️⃣ `setIsEditing(editing => !editing)`

- Recebe o valor atual do estado (`editing`) e retorna o novo valor.
- Garantia de sempre usar o valor mais recente.
- **Vantagem:** seguro em múltiplos eventos ou atualizações assíncronas.
- Recomendado como boa prática quando o novo estado depende do anterior.

## ✅ Resumo de boas práticas

Forma | Seguro para múltiplas atualizações? | Observação
--- | --- | ---
`setIsEditing(!isEditing)` | ❌ Nem sempre | Bom para casos simples
`setIsEditing(editing => !editing)` | ✅ Sempre | Sempre que o novo estado depende do anterior