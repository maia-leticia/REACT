
# Outputting Dynamic Content in JSX

Para inserir valores dinâmicos no JSX, usamos chaves `{}`.

```jsx
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
```

---

## Uso de imagens dinâmicas no JSX

- Podemos usar chaves `{}` para inserir valores dinâmicos também no atributo `src` de imagens.
- Usar `src` com caminho direto da imagem pode funcionar localmente, mas não é recomendado:
  - No deploy, essas imagens podem ser ignoradas.
  - Também dificulta o reaproveitamento das imagens.
  
**Melhor prática:** importar a imagem no arquivo e usar a variável importada no `src`.

Exemplo:

```jsx
import reactImg from "./assets/react-core-concepts.png";

function Header() {
  return <img src={reactImg} alt="Stylized atom" />;
}
```

---

Dessa forma, o bundler (ex: Webpack, Vite) garante que a imagem seja incluída corretamente no build final e facilita o reaproveitamento.
