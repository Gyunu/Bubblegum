/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
'use strict';

import { ListItem } from './listitem';

//this should be an enum, but typescripts enum is funky - comparing/looping over
//them causes a hell of pain, and ended up with ButtonState[ButtonState.ACTIVE]
//just to not have errors comparing strings to ints. go figure.
export let ListState: any  = {
	DISABLED: 'list--disabled',
	LOADING: 'list--loading',
	READY: 'list--ready'
}

export class List {

	public state: string;
	public list: Element;
	public items: Array<ListItem> = [];

	constructor(list: Element) {
		this.list = list;
		this.state = ListState.LOADING;

		var items = this.list.querySelectorAll('.list__item');

		Array.prototype.forEach.call(items, function(item) {
			this.items.push(new ListItem(item, this));
		}.bind(this));

	}

	addItem(item: ListItem) : void {
		this.items.push(item);
	}

	removeAllItems() : void {
		this.items = [];
	}

}
