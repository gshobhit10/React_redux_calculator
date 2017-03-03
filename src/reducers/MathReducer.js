import {HANDLE_NUMBER_CLICK, HANDLE_CLEAR_NUMBERS, HANDLE_SET_OPERATOR} from '../actions/index';

const INITIAL_STATE = {
  currentNumber: "",
  equation: ""
};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {

    case HANDLE_NUMBER_CLICK:
      return {...state,
                currentNumber: state.currentNumber.concat(action.payload),
                equation: state.equation.concat(action.payload)
              };

    case HANDLE_CLEAR_NUMBERS:
      return {
        ...state,
        currentNumber: "",
        equation: ""
      };

    case HANDLE_SET_OPERATOR:
      if(action.payload === "="){

        try{
          return{
            ...state,
            currentNumber: (eval(state.equation)).toString(),
            equation: (eval(state.equation)).toString()
          }
        }
        catch(e){
          alert(`ERROR: ${e}, RESETTING CALCULATOR`);
          return{
            ...state,
            currentNumber: "",
            equation: ""
          }
        }

      }
      else{
        return {
          ...state,
          currentNumber: "",
          equation: state.equation.concat(action.payload)
        }
      }

    default:
      return state;

  }
}
