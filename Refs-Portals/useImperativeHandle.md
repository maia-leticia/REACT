
# 🧩 useImperativeHandle no React

## 📘 O que é

O hook **`useImperativeHandle`** é usado junto com **`forwardRef`**  
para **controlar o que é exposto** quando um componente filho é acessado via `ref`.

Em outras palavras, ele permite **personalizar as ações disponíveis**  
quando outro componente usa uma ref para interagir com ele.

---

## ⚙️ Exemplo Prático

Suponha que você tenha um componente de **modal** e queira que o componente pai  
consiga **abrir** o modal chamando um método `open()` via ref.

### 🔹 Componente Filho (`Modal.jsx`)

```javascript
import { useRef, useImperativeHandle, forwardRef } from 'react'

const Modal = forwardRef((props, ref) => {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return (
    <dialog ref={dialog}>
      <p>Conteúdo do modal</p>
    </dialog>
  )
})

export default Modal
```

---

### 🔹 Componente Pai (`App.jsx`)

```javascript
import { useRef } from 'react'
import Modal from './Modal'

export default function App() {
  const modalRef = useRef()

  function handleShowModal() {
    modalRef.current.open()
  }

  return (
    <div>
      <button onClick={handleShowModal}>Abrir Modal</button>
      <Modal ref={modalRef} />
    </div>
  )
}
```

---

## 🧠 Como Funciona

- `forwardRef` permite **receber uma ref** de um componente pai.  
- `useImperativeHandle` define **quais propriedades ou métodos**  
  estarão disponíveis através dessa ref.  
- Assim, o componente pai pode **chamar funções internas** do filho  
  sem precisar manipular diretamente o DOM.

---

## 💡 Quando Usar

Use `useImperativeHandle` quando:

- Você precisa **expor métodos personalizados** para o componente pai.  
- Precisa de **controle direto** sobre um comportamento interno (abrir, fechar, resetar, focar, etc).  
- Quer **evitar expor toda a ref do DOM**, mostrando apenas métodos específicos.

---

## 🧱 Estrutura Geral

```javascript
useImperativeHandle(ref, () => {
  return {
    metodo1() { ... },
    metodo2() { ... }
  }
})
```

---

📌 **Resumo:**  
`useImperativeHandle` é um hook avançado que dá **controle imperativo controlado** —  
ele expõe funções específicas de um componente filho via `ref`, mantendo o restante encapsulado.
