
import { BYE_EGG } from "./Eggtype" 


const intialState =  {
    numOfEggs : 100
}

const EggReducer = (state = intialState , action) => {
    switch(action.type){
        case BYE_EGG :
            return {
                ...state,
                numOfEggs : state.numOfEggs - 1
            }
        default : return state
    }
}

export default EggReducer