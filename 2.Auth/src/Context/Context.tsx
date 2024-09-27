import { createContext, useState } from "react"


type AuthContextProviderProps = {
    children:React.ReactNode;
}

type User = {
    name:string;
    email:string;
}

type AuthContextType = {
    user: User | null;
    setUser: (user:User | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = ({children}: AuthContextProviderProps)=>{
    const [user,setUser] = useState<User | null>(null)


    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}            
        </AuthContext.Provider>
    )
}
