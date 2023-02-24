> **NOTA:** Projeto em versão de testes. Qualquer erro apresentado, deverá ser denunciado de imediato.

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
    await cd.set("Valor", 10000);
    // Adicionando a variável "Valor" à lista de espera com intervalo de 10 segundos.

    var Cooldown = await cd.get("Valor");
    // Verificando se a variável "Valor" está em espera.
    // -> Boolean

    if (!Cooldown) {
        // Conteúdo a ser executado caso o item não esteja em espera.
    };
})();
```
