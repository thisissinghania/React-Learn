import { createContext, useState } from "react";

const AuthContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    const changeTheme = () => {
        setTheme(item => item == 'dark' ? 'light' : 'dark')
    }

    return (
        <AuthContext.Provider value={{ theme, changeTheme }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext