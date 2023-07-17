import {createStore} from "zustand";
import {userStore} from "../types/storeTypes";

export const useUserStore = createStore<userStore>((set) => ({
	isAuth: false
}))