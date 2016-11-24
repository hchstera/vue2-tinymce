/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	export default TinyMCE;

	if(typeof tinymce === "undefined")
	    throw "tinymce is undefined";

	var TinyMCE = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\xampp\\htdocs\\vue2-tinymce-demo\\vue2-tinymce\\src\\components\\TinyMCE.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ee1a61f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ee1a61f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TinyMCE.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//

	export default {
	    mounted: function mounted() {
	        console.log('Eample Component ready.');
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', ["\n    I'm an example component!\n"])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ee1a61f", module.exports)
	  }
	}

/***/ }
/******/ ]);