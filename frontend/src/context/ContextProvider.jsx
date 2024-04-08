import { createContext, useState ,useContext} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    SetUser:()=>{},
    setToken:()=>{}
});
export const ContextProvider = ({ children }) => {
    const [user, SetUser] = useState({});
    const [token, _setToken] = useState({});

    // this function is used to stay authentificed even if the page refresh
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCES_TOKEN", token);
        } else {
            localStorage.removeItem("ACCES_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                SetUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = ()=> useContext(StateContext)