# cooldown - Rate limit everything.

Simple tool to make rate limits. Cooldown.djs is a packaged promise setTimeout.

```js
const Cooldown = require('cooldown.djs');

(async () => {
    await Cooldown('user-0001', 5000);
    /* Adding variable "user-0001" to waiting list with a 5 second interval. */

    var Hold = await Cooldown('user-0001');
    /* Checking if the variable "user-0001" is being awaited. */
    // -> Promise { Boolean }

    if (!Hold) {
        /* Content to be executed if the item isn't being awaited. */
    };
})();
```

You can also use it in your Discord API based apps.

```js
run: async ( ... ) => {
    if (!Cooldown(interaction.user.id)) {
        // ... Run your normal command.
    } else interaction.reply('You need to wait before using this command again.');
    /* Display rate limit warning */
};
```
