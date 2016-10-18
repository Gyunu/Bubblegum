/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
'use strict';

//this should be an enum, but typescripts enum is funky - comparing/looping over
//them causes a hell of pain, and ended up with ButtonState[ButtonState.ACTIVE]
//just to not have errors comparing strings to ints. go figure.
export let ButtonState: any  = {
	ACTIVE: 'button--active',
	NUETRAL: 'button--nuetral',
	POSITIVE: 'button--positive',
	NEGATIVE: 'button--negative',
	DISABLED: 'button--disabled',
	LOADING: 'button--loading'
}

export class Button implements IAction {

	public state: string;
	private default: string;
	public element: Element;
	public action: string;

	constructor(button: Element) {
		this.element = button;
		this.action = button.getAttribute('bt-action');
		let defaultState = button.getAttribute('bt-default');

		this.default = (defaultState) ? ButtonState[defaultState.toUpperCase()] : ButtonState.DISABLED;
		this.state = this.default;

		this.element.addEventListener('click', this.onClick.bind(this));
	}

	public changeState(state: string) : void {
		//remove all state classes
		for(let state in ButtonState) {
			this.element.classList.remove(ButtonState[state]);
		}

		//set active or default
		if(state == ButtonState.ACTIVE) {
			this.element.classList.add(ButtonState.ACTIVE);
		}
		else {
			this.element.classList.add(this.default);
		}

		this.state = state;
		this.dispatchAction(this.action, {element: this.element});
	}

	public dispatchAction(action: string, data: Object) : void {
		let event = new CustomEvent('bubblegum.action', {detail: {action: action, data: data}});
		window.document.dispatchEvent(event);
	}

	private onClick(e: Event) : void {
		e.stopPropagation();
		if(this.state === ButtonState.ACTIVE) {
			this.changeState(this.default);
		}
		else {
			this.changeState(ButtonState.ACTIVE);
		}
	}
}
