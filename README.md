> **NOTA:** Projeto em versão de testes. Qualquer erro apresentado, considere denunciá-lo.

## Timer.djs


**Biblioteca:** [npmjs.com/timer.djs](https://www.npmjs.com/package/timer.djs)

Timer.djs é um simples projeto com a intenção de facilitar a inserção de Cooldown's em aplicações existentes feitas em Discord.js. Livre para o uso de todos os públicos, desde o iniciante ao experiente, com módulos e linhas fáceis de serem compreendidas.

-   **Ajustável** - Escolha o intervalo ideal para suas aplicações.
-   **Intuitivo** - Linhas fáceis de serem interpretadas.
-   **Compatível** - Utilize de acordo com o seu projeto.


## Instalação

<details>
<summary>Antes de tudo, utilize seu ambiente de desenvolvimento preferencial.</summary>
<br>
</details>

```python
npm i timer.djs # Instalando a biblioteca.
```

## Exemplo

```js
const { Timer } = require('timer.djs');
const cd = new Timer();

(async () => {
    await cd.set("user-0001", 5000);
    // Adicionando a variável "user-0001" à lista de espera com intervalo de 5 segundos.

    var Cooldown = await cd.get("user-0001");
    // Verificando se a variável "user-0001" está em espera.
    // -> Boolean

    if (!Cooldown) {
        // Conteúdo a ser executado caso o item não esteja em espera.
    };
})();
```
