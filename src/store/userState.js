import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  defalut: { isAdmin: false }
});
