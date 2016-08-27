;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	var randomBytes = require('randombytes');


	(function () {
	   // Shortcuts
	   var C = CryptoJS;
	   C.randomBytes = randomBytes
	}());


	return CryptoJS.randomBytes;

}));