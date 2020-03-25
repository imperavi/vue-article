# Article Editor Vue.js Component

Vue-article helps [Article Editor](https://imperavi.com/article/) to work as a Vue.js component. The Article Vue component is under MIT license. 
However, to use this component, you should purchase an Article license. 

Please see [the buying page](https://imperavi.com/article/buy/) and [License Agreement](https://imperavi.com/article/license/).

## Compatibility

- Vue.js 2.x

## Intialization

### One Way Binding

Import

```html
import '/your-article-dist-path/article-editor.min.js';
import './vue-article.js';
```

Component

```html
<div id="app">
    <article-editor v-model="content" :config="configOptions"></article-editor>
    {{ content }}
</div>
```

App

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {}
        }
    }
});
```


### Two Way Binding

Import

```html
import '/your-article-dist-path/article-editor.min.js';
import './vue-article.js';
```

Component

```html
<div id="app">
    <article-editor v-model="content" :config="configOptions"></article-editor>
    <textarea v-model="content"></textarea>
</div>
```

App

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {}
        }
    }
});
```

### Call with options

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {
                plugins: ['blockcode'],
                editor: {
                    focus: true
                }
            }
        }
    }
});
```

### Call with events

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {
                 subscribe: {
                    'app.start': function() {
                        console.log('Article started!');
                    }
                }
            }
        }
    }
});
```