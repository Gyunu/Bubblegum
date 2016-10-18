/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
'use strict';

export let TextInputState = {
	READY: 'input__text',
	ACTIVE: 'input__text--active',
	DISABLED: 'input__text--disabled',
	CHANGED: 'input__text--changed'
}

export class TextInput {
	public element: HTMLInputElement;

	constructor(element: HTMLInputElement) {
		this.element = element;
		this.element.addEventListener('input', this.onInput.bind(this));

	}

	private onInput(e) {
		this.element.classList.add(TextInputState.CHANGED);
	}

	public clear() {
		this.element.value = "";
	}


}
