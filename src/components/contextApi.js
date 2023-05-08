import React, { createContext, useState } from "react"
import data from "./data"

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [product, setProduct] = useState(data)
    const [cart, setCart] = useState([])

    return <AppContext.Provider value={{ product: product, cart, setCart }}>
        {children}
    </AppContext.Provider>
}
export { AppContext, AppProvider }