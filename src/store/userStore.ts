import {createStore} from "zustand";
import {userStore} from "../types/userStore";

export const useUserStore = createStore<userStore>((set) => ({
	isAuth: false
}))