# Debugging React Apps

## React Error Messages
- As mensagens de erro ajudam a identificar o que está errado.
- Ler a mensagem e alterar o código de acordo.

## Erros de Lógica (sem mensagens)
- Usar **DevTools > Sources**.
- Adicionar **breakpoints** → a execução para na linha configurada.

## Strict Mode
```javascript
import { StrictMode } from 'react';
```
- Envolve os componentes no `StrictMode`.
- Executa o componente **2x em desenvolvimento** (não em produção).
- Ajuda a detectar efeitos colaterais e práticas inseguras.

## React Dev Tools
Ferramenta oficial para inspecionar apps React.

### Componentes
- Visualização da **árvore de componentes**.
- Permite inspecionar props e state.

### Profiler
- Usado para analisar **performance issues**.
- Permite medir tempo de renderização dos componentes.
