import { createContext } from "react";

export const context = createContext({
    email: "",
    setEmail: () => {},
    passwoard: "",
    setPasswoard: () => {},
    confirmPassword: "",
    setConfirmPassword: () => {},
    validator: null,
    handleLogin: () => {},
    handleRegister: () => {},

})

