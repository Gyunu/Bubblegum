/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
'use strict';

export let EditiableFieldState = {
	NUETRAL: 'field__value',
	ACTIVE: 'field__value--edit',
	DISABLED: 'field__value--disabled',
}

export class EditableField {

	input: Element;
	field: Element;
	state: string;
	public element: Element;

	constructor(element: Element) {
		this.element = element;
		this.field = element.querySelector('.field__value');
		this.input = element.querySelector('.field__input');
		this.element.addEventListener('click', this.onClick.bind(this));
		this.state = EditiableFieldState.NUETRAL;
	}

	private onClick(e) {
		e.stopPropagation();
		
		if(this.state === EditiableFieldState.NUETRAL) {
			this.changeState(EditiableFieldState.ACTIVE);
		}
		if(this.state === EditiableFieldState.ACTIVE) {
			this.changeState(EditiableFieldState.NUETRAL);
		}
	}

	public changeState(state: string) {
		for(let state in EditiableFieldState) {
			this.field.classList.remove(EditiableFieldState[state]);
		}

		console.log(state);

		if(state === EditiableFieldState.NUETRAL) {
			this.field.classList.add(EditiableFieldState.NUETRAL);
		}
		if(state === EditiableFieldState.ACTIVE) {
			this.field.classList.add(EditiableFieldState.ACTIVE);
		}

		this.state = state;
	}

	private onChange() {

	}
};
