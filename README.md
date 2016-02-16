# Collapser [![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/aletslima123/collapser/blob/master/LICENSE)

## Recursos

- [x] Permite múltiplos seletores JQuery
- [x] Permite inicializar o Collapse aberto ou fechado

# Como usar?

Estrutura HTML

```html
<div class="wrapper">
  <div class="container" id="first-container">
    <button class="button">Collapse!</button>
    <div class="content">
    <h3>Lorem Ipsum:</h3>
      <ul>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
      </ul>
    </div>
  </div>
  <div class="container" id="second-container">
    <button class="button">Collapse!</button>
    <div class="content">
      <h3>Lorem Ipsum:</h3>
      <ul>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
      </ul>
    </div>
  </div>
</div>
```

chamada javascript

```javascript
$('#first-container button').collapser();
$('#second-container button').collapser({opened: true});
```

## Como contribuir?

1. Faça um **Fork** do projeto
2. Crie uma branch com a nova feature: `git checkout -b nome-da-feature`
3. Faça commit das suas mudanças: `git commit -m 'Add some feature'`
4. Faça **Push** remoto da sua branch: `git push origin nome-da-feature`
5. Envie um **pull request** :)


## Suporte

> Alguma pergunta? Adicione ela usando uma [issue](https://github.com/aletslima123/collapser/issues/new).

## License
Created by and copyright [Alexandre Lima](https://github.com/aletslima123). Released under the [MIT license](https://github.com/aletslima123/collapser/blob/master/LICENSE).