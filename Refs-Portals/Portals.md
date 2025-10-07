# 🌀 Portals no React

## 📘 O que são

**Portals** permitem **renderizar elementos fora da hierarquia DOM principal** do componente pai,  
sem quebrar a lógica de React (como contexto, estado, eventos, etc).

Em outras palavras:  
eles **"teleportam"** um elemento para outro lugar no DOM, mantendo seu comportamento React normal.

---

## 💡 Por que usar?

Quando usamos overlays, modais, tooltips ou pop-ups,  
esses elementos podem acabar **misturados na estrutura HTML**,  
ficando dentro de divs com `overflow: hidden`, `z-index` baixos, etc.  

Os **Portals** resolvem isso permitindo renderizar esses elementos em outro ponto da árvore HTML,  
por exemplo, diretamente dentro do `<body>`.

---

## ⚙️ Importação

```javascript
import { createPortal } from 'react-dom'

```
## 🧩 Estrutura Geral

```
createPortal(conteudo, destinoDOM)
```

conteudo → o JSX que você quer renderizar.
destinoDOM → o elemento do DOM onde esse conteúdo será “teleportado”.

## 🔹 Exemplo de Uso
Suponha que você tenha um Modal que deve aparecer fora da div principal do app.

Componente Modal.jsx
```

import { createPortal } from 'react-dom'

export default function Modal({ children }) {
  return createPortal(
    <div className="overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modals')
  )
}
```
## HTML de destino (index.html)

```
<body>
  <div id="root"></div>
  <div id="modals"></div> <!-- destino do portal -->
</body>
```

## Uso no App
```

import Modal from './Modal'

export default function App() {
  return (
    <div>
      <h1>Meu App</h1>
      <Modal>
        <p>Conteúdo dentro do modal!</p>
      </Modal>
    </div>
  )
}
```
Mesmo que o componente Modal esteja dentro de <App />,
ele será renderizado dentro do elemento <div id="modals"> no DOM.

## 🧠 Em resumo
Conceito	Descrição
O que faz	Teleporta JSX para outro local do DOM
Mantém contexto React?	✅ Sim
Usado para	Modais, overlays, tooltips, popups
Importação	import { createPortal } from 'react-dom'
Estrutura	createPortal(<JSX />, document.getElementById('id'))

## 📌 Resumo:
createPortal é usado para renderizar elementos em outro ponto do DOM,
sem perder o comportamento React — ideal para modais e overlays.