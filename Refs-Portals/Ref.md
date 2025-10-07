
# Refs no React

## 🔗 Conectar a Refs a Elementos JSX

As **refs** permitem acessar diretamente elementos do DOM ou componentes React.

---

## 📥 Importação

```javascript
import { useRef } from 'react'
```

---

## 🧩 Criando uma Ref

```javascript
const minhaRef = useRef()
```

---

## 🔗 Conectando ao Elemento JSX

Você pode conectar a ref ao elemento desejado passando-a como prop `ref`:

```jsx
<input ref={minhaRef} />
```

Agora, a variável `minhaRef` está conectada ao elemento JSX.

---

## ⚙️ Acessando e Manipulando o Valor

Cada ref possui a propriedade `.current`, que aponta para o elemento DOM referenciado.

Exemplo:

```javascript
console.log(minhaRef.current.value)
```

Você também pode usar métodos do elemento, como:

```javascript
minhaRef.current.focus()
```

---

## 🔁 Persistência do Valor

As refs **mantêm o mesmo valor** entre re-renderizações, sem causar novas renderizações quando atualizadas.  
Elas podem armazenar **qualquer tipo de dado**, não apenas elementos DOM.

---

## 🧱 Passando Refs como Props

Nas versões atuais do React, é possível passar refs como props para componentes filhos:

```jsx
<MeuComponente ref={minhaRef} />
```

Nas versões antigas, era necessário usar `forwardRef`:

```javascript
import { forwardRef } from 'react'

const MeuComponente = forwardRef((props, ref) => {
  return <input ref={ref} />
})
```

---

## 📘 Resumo

| Ação | Exemplo |
|------|----------|
| Criar ref | `const ref = useRef()` |
| Conectar ref ao JSX | `<input ref={ref} />` |
| Acessar elemento | `ref.current` |
| Acessar valor | `ref.current.value` |
| Passar ref como prop | `<Componente ref={ref} />` |
| Antigo método | `forwardRef()` |

---

🧠 **Dica:** use `useRef` quando quiser acessar elementos diretamente ou armazenar valores que não precisam causar re-renderizações.
