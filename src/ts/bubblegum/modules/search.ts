/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
'use strict';
import { Button }			from './button';
import {ButtonState}  from './button';
import { TextInput }	from './textinput';
//TODO make search input type input and grab the value on the text field event emit

export let SearchState = {
	DISABLED: "search--disabled",
	LOADING: "search--loading",
	NUETRAL: "search",
	POSITIVE: "search--positive",
	NEGATIVE: "search--negative",
	READY: "search--ready"
};

export class Search implements IAction {
	public element: Element;
	public state: string;
	private input: TextInput;
	private button: Button;
	public action: string;

	constructor(element: Element) {
		this.element = element;
		this.input = new TextInput(<HTMLInputElement>element.querySelector('.search__input'));
		this.button = new Button(element.querySelector('.search__button'));
		this.action = this.button.action;
		this.state = SearchState.NUETRAL;
		window.document.addEventListener('bubblegum.action', this.onClick.bind(this));
	}

	onClick(e) : void {
		if(e.detail.data.element === this.button.element) {
			if(this.button.state === ButtonState.ACTIVE) {
				this.changeState(SearchState.READY);
			}
			if(this.button.state === ButtonState.NUETRAL) {
				this.changeState(SearchState.NUETRAL);
			}

		}
	}

	changeState(state: string) {
		for(let state in SearchState) {
			this.element.classList.remove(SearchState[state]);
		}

		//set active or default
		if(state == SearchState.NUETRAL) {
			this.button.element.classList.remove('arrow--left');
			this.element.classList.add(SearchState.NUETRAL);
			this.input.element.classList.add('search__input--hidden');
			this.input.clear();
		}
		else {
			this.button.element.classList.add('arrow--left');
			this.element.classList.add(SearchState.READY);
			this.input.element.classList.remove('search__input--hidden');
		}

		this.state = state;
	}

	dispatchAction(action: string, data: Object) : void {

	}
}
