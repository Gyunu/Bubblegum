/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
"use strict";
export class App {

	modules: Object;

	constructor() {};

	onLoad() {
		var e = new CustomEvent('bubblegum.loaded', {
			cancelable: false,
			bubbles: true
		});
		window.dispatchEvent(e);
	}

}
