
# Estilos no React

Existem diferentes formas de aplicar estilos em projetos React. Cada abordagem tem **vantagens** e **desvantagens**, e a escolha depende do tamanho da aplicação, do time e da necessidade de organização.

---

## 1. CSS Global (Vanilla)

### Como usar
- Criar um arquivo `index.css` e importar no `main.jsx` (ou `App.jsx`).
- O bundler (Vite, Webpack etc.) irá ler e aplicar o CSS globalmente.

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

---

## 2. CSS por Componente

### Como usar
- Criar um arquivo CSS para cada componente, por exemplo:
  - `Header.jsx`
  - `Header.css`

```jsx
// Header.jsx
import "./Header.css";

export default function Header() {
  return <h1 className="titulo">Meu Header</h1>;
}
```

```css
/* Header.css */
.titulo {
  color: blue;
}
```

### Vantagens
- Sintaxe normal de CSS, fora do JSX.  
- Arquivos organizados próximos ao componente.

### Desvantagens
- **Não há escopo real.**  
  O CSS é global, então uma classe pode causar conflitos em outro componente.
- Exemplo de conflito:
  - `Header.css` define `.titulo { color: blue }`
  - `Footer.css` define `.titulo { color: red }`
  - O último CSS carregado prevalece.

⚠️ A única exceção é quando o estilo é aplicado inline, que fica restrito ao componente.

---

## 3. Estilo Condicional com `className`

Você pode alternar classes dinamicamente usando **operador ternário** ou **interpolação de strings**:

```jsx
function Button({ ativo }) {
  return (
    <button
      className={`btn ${ativo ? "btn-ativo" : "btn-inativo"}`}
    >
      Clique aqui
    </button>
  );
}
```

```css
.btn {
  padding: 10px;
  border-radius: 5px;
}

.btn-ativo {
  background-color: green;
  color: white;
}

.btn-inativo {
  background-color: gray;
  color: black;
}
```

---

## 4. Inline Styles

### Como usar
Passar o objeto `style` diretamente no elemento.

```jsx
function Card() {
  return (
    <div style={{ color: "red", textAlign: "center" }}>
      Texto em vermelho e centralizado
    </div>
  );
}
```

### Observações importantes
- Propriedades com **hífen** devem ser convertidas para **camelCase**:
  - `text-align` → `textAlign`
  - `background-color` → `backgroundColor`

### Vantagens
- Escopo garantido: só afeta o elemento.  
- Muito útil para **estilos dinâmicos**.

### Desvantagens
- Estilizar elementos complexos fica trabalhoso.  
- Mistura de estilo e JSX (menos separação de responsabilidades).

---

## 5. Estilo Dinâmico Inline

É possível mudar estilos com base em variáveis:

```jsx
function Alert({ tipo }) {
  return (
    <p
      style={{
        backgroundColor: tipo === "erro" ? "red" : "green",
        color: "white",
        padding: "10px",
      }}
    >
      {tipo === "erro" ? "Ocorreu um erro!" : "Sucesso!"}
    </p>
  );
}
```

---

## Quando usar cada um?

- **CSS Global** → Projetos pequenos ou estilos comuns (reset, variáveis de cor).  
- **CSS por Componente** → Projetos médios, para organizar melhor, mas cuidado com conflitos.  
- **Inline Styles** → Quando precisa de **estilo dinâmico rápido** ou com escopo total.  
- **className condicional** → Melhor para alternar estilos entre estados (`ativo`, `inativo`, `erro`, etc.).  

