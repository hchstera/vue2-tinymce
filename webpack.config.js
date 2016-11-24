module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname+'/dist',
        filename: "vue2-tinymce.js"
    },
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              // vue-loader options go here
            }
        }
        ]
    }
};
