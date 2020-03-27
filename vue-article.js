/*
    Article Vue Component
    Version 1.0.0
    Updated: March 25, 2020

    http://imperavi.com/article/

    Copyright 2020, Imperavi Ltd.
    License: MIT
*/
Vue.component('article-editor', {
    template: '<textarea ref="article" :name="name" :placeholder="placeholder" :value="value" />',
    article: false,
    props: {
        value: {
            default: '',
            type: String
        },
        placeholder: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        config: {
            default: {},
            type: Object
        }
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.destroy()
    },
    methods: {
        init () {
            var me = this;
            var subscribe = {
                'editor.content.change': function(event) {
                    var html = event.get('html');
                    me.handleInput(html);
                    return html
                }
            };

            // extend config
            Vue.set(this.config, 'subscribe', subscribe);

            // call
            var app = ArticleEditor(this.$refs.article, this.config);

            // set instance
            this.article = app;
            this.$parent.article = app;
        },
        destroy () {
            // Call destroy on article to cleanup event handlers
            this.article.stop();

            // unset instance for garbage collection
            this.article = null;
            this.$parent.article = null;
        },
        handleInput (val) {
            this.$emit('input', val);
        }
    }
});