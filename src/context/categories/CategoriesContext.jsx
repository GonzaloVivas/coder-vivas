import { createContext, useEffect, useState } from "react";
import { getCategories } from "../../firebase/api";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();    
  }, []);

  const loadCategories = async() => {
    const _categories = await getCategories();
    setCategories(_categories);
  }
  

  return (
    <CategoriesContext.Provider value={{
      categories
    }}>
      {children}
    </CategoriesContext.Provider>
  )

}