# Resumo: Atualizando estados que são objetos em React

## Conceito
Para atualizar um objeto, **não devemos alterar o objeto original diretamente**, mas sim criar uma **cópia com as alterações desejadas**.

---

## Exemplo básico

```javascript
import { useState } from "react";

function Perfil() {
  const [usuario, setUsuario] = useState({
    nome: "Leticia",
    idade: 19
  });

  const mudarIdade = () => {
    // Criando uma cópia do objeto e atualizando a idade
    setUsuario(prev => ({
      ...prev,
      idade: prev.idade + 1
    }));
  };

  return (
    <div>
      <p>Nome: {usuario.nome}</p>
      <p>Idade: {usuario.idade}</p>
      <button onClick={mudarIdade}>Fazer aniversário</button>
    </div>
  );
}
```

**Como funciona:**

- `...prev` → espalha (spread) as propriedades do objeto antigo.  
- `idade: prev.idade + 1` → sobrescreve apenas a propriedade que queremos atualizar.  
- Resultado: **novo objeto**, mantendo imutabilidade.

---

## Boas práticas

- Sempre usar **spread operator (`...`)** para criar uma cópia do objeto.  
- Nunca modificar o estado original diretamente (`usuario.idade = 20` **não é permitido**).  
- Mantém consistência e evita bugs em renderizações.

