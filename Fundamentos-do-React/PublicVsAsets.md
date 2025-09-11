# Resumo: `public/` vs `src/assets/` em React

## `public/`
- Arquivos **publicamente acessíveis**.  
- Referenciáveis diretamente em `index.html` ou `index.css`.  
- Não passam pelo build.  
- Bom para: favicons, imagens usadas no `index.html`.  

## `src/assets/`
- Arquivos **não acessíveis diretamente** pelo navegador.  
- Devem ser **importados nos componentes**.  
- Passam pelo build (otimizados e “injetados” em `public/`).  
- Bom para: imagens usadas dentro de componentes.  

## Resumo rápido
- `public/` → arquivos estáticos e públicos.  
- `src/assets/` → arquivos internos, processados e usados em componentes.