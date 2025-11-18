# Prop Drilling e Soluções

## Prop Drilling

Compartilhar dados entre componentes via **props**.

-   Fica com excesso de código
-   Deixa o componente menos reutilizável

------------------------------------------------------------------------

## Soluções

### 1) Componentes Wrapper

Em alguns casos, é possível fazer um componente ser *wrapper* de outro,
estando em um nível mais alto, pegar a prop diretamente e passá-la via
**children**
Porém, isso é inviável em muitos cenários, pois os componentes podem
virar apenas wrappers e perder o sentido do React.

### 2) Usar Context API

Permite compartilhar estados entre múltiplos componentes sem precisar
ficar passando props manualmente em todos os níveis.
