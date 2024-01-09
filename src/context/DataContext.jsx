import { createContext, useState } from "react";

const DataContext = createContext({});
export const DataProvider = ({children}) => {
    const [lang, setLang] = useState(false);
    return(
        <DataContext.Provider
            value={{lang,setLang}}
        >
            {children}
        </DataContext.Provider>
    )
} 
export default DataContext;