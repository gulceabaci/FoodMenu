import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer } from "../reducers/mealReducer";

const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false
}

const MealContext = createContext({});

export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => {
        fetchCategories();
    }, []);

    return (    
        <MealContex.Provider value={{
            ...state,
            dispatch
    }}>
        {children}
        </MealContex.Provider>

    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}   

