/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
'use strict';
//TODO make a has/change state interface and implement it here
//TODO make a universal state enum?
//TODO toggleclass.
//TODO scope events to app
//TODO make all internal Elements be called element
//this should be an enum, but typescripts enum is funky - comparing/looping over
//them causes a hell of pain, and ended up with ButtonState[ButtonState.ACTIVE]
//just to not have errors comparing strings to ints. go figure.
//todo fix the changeState being hardcoded to the enums - loop
import { List } from './list';

export let ListItemState: any  = {
	DISABLED: 'list--disabled',
	LOADING: 'list--loading',
	READY: 'list--ready',
	ACTIVE: 'arrow--left'
}

export class ListItem implements IAction {

	public state: string;
	public parent: Element;
	public element: Element;
	public action: string;

	constructor(item: Element, list: List) {
		this.element = item;
		this.state = ListItemState.READY;
		this.action = "list.item.";
		this.parent = list.list;

		this.element.addEventListener('click', this.onClick.bind(this));
		window.addEventListener('bubblegum.action', this.onAction.bind(this));
	}

	private onAction(e) {
		if(e.detail.data.parent === this.parent && e.detail.data.element !== this.element) {
			this.changeState(ListItemState.READY, false);
		}
	}

	private onClick(e) {
		e.stopPropagation;
		if(this.state === ListItemState.ACTIVE) {
			this.changeState(ListItemState.READY, true);
		}
		else {
			this.changeState(ListItemState.ACTIVE, true);
		}
	}

	public changeState(state: string, event: boolean) {

		for(let state in ListItemState) {
			this.element.classList.remove(ListItemState[state]);
		}

		if(state === ListItemState.ACTIVE) {
			this.element.classList.add(ListItemState.ACTIVE);
		}

		if(state === ListItemState.READY) {
			this.element.classList.add(ListItemState.READY);
		}

		if(event) {
			let action = (state == ListItemState.ACTIVE) ? Object.keys(ListItemState).filter(function(o) {return ListItemState[o] == ListItemState.ACTIVE}) : Object.keys(ListItemState).filter(function(o) {return ListItemState[o] == ListItemState.READY});
			this.dispatchAction(this.action + action, {element: this.element, parent: this.parent});
		}

		this.state = state;

	}

	public dispatchAction(action: string, data: Object) : void {
		let event = new CustomEvent('bubblegum.action', {detail: {action: action, data: data}, bubbles: true});
		window.document.dispatchEvent(event);
	}

}
