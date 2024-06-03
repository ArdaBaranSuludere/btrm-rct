import { createContext, useContext, useEffect } from "react";
import { useAuth } from "./hooks";

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

function AuthContextProvider({ children }) {
    const auth = useAuth();
    const { checkAuth } = auth;

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContextProvider, useAuthContext };