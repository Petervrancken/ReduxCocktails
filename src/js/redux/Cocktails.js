import axios from 'axios';

const initialState = {
    cocktails : [],
    error : false,
    cocktail : ""
};




export const setCocktail = (str) => (dispatch, getState) => {
    dispatch({
        type: "SET_COCKTAIL",
        payload: str
    });
    
    // Hier gebeurd de network call
    axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${getState().cocktail}`)
    .then(responseObj => {
        dispatch({
            type: "SET_COCKTAIL_SUCCES", 
            payload: responseObj.data.drinks      // hier verderwerken
        })
    })
    .catch(error=>{
        dispatch({
            type: "SET_COCKTAIL_ERROR"
        })
    })
    //               refactoring in functie van de onderstaande code. thunk doet hier zijn werk
};

//export const setCocktail = (str) => ({  !!!ontvangt een string en geeft een object terug 
    //type: "SET_COCKTAIL",               !!!naar de dispatch /components/cocktails lijn 31
    //payload: str,
//});



const reducer = (state = initialState, {type, payload}) => {
    switch(type){        // switch vergelijkt type met de case
        case "SET_COCKTAIL": return { ...state,cocktail: payload, error: false }; // geeft uitgespreide state terug, maar overschrijft cocktail
        case "SET_COCKTAIL_SUCCES": return {...state,cocktails: payload, error:false}; //COCKTAILSsss !!! stuur cocktails door naar de lege array in initialState
        case "SET_COCKTAIL_ERROR": return {...state, error:true};
        default: return state;
    }
}

export default reducer;