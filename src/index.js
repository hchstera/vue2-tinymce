// if(typeof tinymce === "undefined")
//     throw "tinymce is undefined";
window.VueTinyMCE = {};
VueTinyMCE.install = function (Vue) {
    Vue.component('vue2-tinymce', require('./components/TinyMCE.vue'));
}
