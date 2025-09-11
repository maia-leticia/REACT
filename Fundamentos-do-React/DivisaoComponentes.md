
# Quando Dividir Componentes em React

Em React, **componentes devem ter uma única responsabilidade**. Um sinal claro de que um componente está grande demais é quando ele lida com diversas responsabilidades ou se torna difícil de entender e manter.

Dividir componentes ajuda a:

- **Manter o código limpo**  
- **Reutilizar partes da interface**  
- **Facilitar testes**  
- **Melhorar a manutenção e a escalabilidade**

---

## Sinais de que um componente deve ser dividido

1. **Múltiplas responsabilidades**: Se o componente faz várias coisas diferentes (ex: lógica de formulário + exibição de lista + animações).  
2. **JSX muito longo**: Quando o retorno do componente é grande, é um indicativo de que partes dele podem virar subcomponentes.  
3. **Dificuldade de reutilização**: Se partes do componente poderiam ser usadas em outros lugares, é hora de separar.  
4. **Lógica complexa**: Quando há muita lógica dentro do componente, divida em funções ou componentes filhos.  

---

## Exemplo

Antes (componente grande demais):

```javascript
function Usuario() {
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome, idade e detalhes...</p>
      <form> {/* lógica do formulário */} </form>
      <ul> {/* lista de posts do usuário */} </ul>
    </div>
  );
}
```

Depois (componentes separados):

```javascript
function Usuario() {
  return (
    <div>
      <PerfilUsuario />
      <FormularioUsuario />
      <ListaPosts />
    </div>
  );
}

function PerfilUsuario() {
  return <h1>Perfil do Usuário</h1>;
}

function FormularioUsuario() {
  return <form> {/* lógica do formulário */} </form>;
}

function ListaPosts() {
  return <ul> {/* lista de posts */} </ul>;
}
```

---

## Observação

Saber **quando dividir componentes** é uma das habilidades mais importantes de um desenvolvedor React. Quanto mais cedo você identificar componentes reutilizáveis e responsabilidades claras, mais limpo e escalável será o seu código.
