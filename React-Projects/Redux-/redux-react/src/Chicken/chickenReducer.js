import { BYE_CHICKEN } from "./chickenType"

 
 const intialState = {
    numOfChicken: 100
 }

 const chickenReducer = (state = intialState,action) => {
    switch(action.type){
        case BYE_CHICKEN :
            return{
                ...state,
                numOfChicken : state.numOfChicken - 1
            }
        default :return state 
    }
 }
 export default chickenReducer