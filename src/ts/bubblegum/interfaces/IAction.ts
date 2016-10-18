interface IAction {
	action: string;
	dispatchAction(action: string, data: Object) : void;
}
