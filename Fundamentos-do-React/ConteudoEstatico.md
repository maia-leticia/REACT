
# Conteúdos Estáticos no `index.html` em React

Em React, **nem todo conteúdo precisa estar dentro de componentes**. Existem casos em que você quer adicionar dados ou elementos **que não serão alterados ou manipulados pelo React**, ou seja, **conteúdo estático**.

Esses elementos podem ser incluídos diretamente no `index.html`, geralmente localizado na pasta `public` do projeto React criado com `create-react-app`.

---

## Exemplos de conteúdo estático

### 1. Metadados e SEO

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Meu site incrível em React" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu Site React</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 2. Fontes externas, ícones ou CSS

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
```

### 3. Scripts externos que não precisam ser manipulados pelo React

```html
<script src="https://www.example.com/script.js"></script>
```

---

## Observações

- O React **não irá gerenciar** esses conteúdos. Eles permanecem estáticos.  
- Use para **dados que não mudam**, **scripts de terceiros** ou **links de estilo**.  
- Para conteúdo dinâmico, mesmo que simples, é melhor usar componentes React.
