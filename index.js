import '/your-article-dist-path/article-editor.min.js';
import './vue-article.js';

new Vue({
    el: '#app-one',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {}
        }
    }
});

new Vue({
    el: '#app-two',
    data() {
        return {
            content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            configOptions: {}
        }
    }
});