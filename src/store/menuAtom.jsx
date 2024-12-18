import {atom} from "recoil";

// Atom for closing and opening the menu to optimize the app
export const menuAtom = atom({
    key : "menuAtom",
    default : false  
});