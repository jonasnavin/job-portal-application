"use client"

const { createContext, useState, useEffect } = require("react");

const DataContext = createContext()

export const DataProvider = ({ children, token }) => {

    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserData = JSON.parse(localStorage.getItem("userData"));
            setUserData(storedUserData)
            setIsLoading(false)
        }
    }, [setUserData])

    useEffect(() => {
        if (token) {
            setIsLogin(true)
        }
    }, [token])


    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <DataContext.Provider
            value={{
                userData, setUserData,
                isLoading, setIsLoading,
                isLogin, setIsLogin
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext