export type userStore = {
	isAuth: boolean
}

export type NavigateStore = {
	isPetPage: boolean,
	isCreateAdvPage: boolean,
	dispatchPetPage: (arg: boolean) => void,
	dispatchCreateAdvPage: (arg: boolean) => void,
}