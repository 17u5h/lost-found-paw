import {create} from "zustand";
import {NavigateStore} from "../types/storeTypes";

export const useNavigationStore = create<NavigateStore>((set) => ({
	isPetPage: false,
	isCreateAdvPage: false,
	dispatchPetPage: (isPetPage: boolean) => set((state) => ({
		...state,
		isPetPage
	})),
	dispatchCreateAdvPage: (isCreateAdvPage: boolean) => set((state) => ({
		...state,
		isCreateAdvPage
	})),
}))