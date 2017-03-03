export const HANDLE_NUMBER_CLICK = "HANDLE_NUMBER_CLICK";
export const HANDLE_CLEAR_NUMBERS = "HANDLE_CLEAR_NUMBERS";
export const HANDLE_SET_OPERATOR = "HANDLE_SET_OPERATOR";

export function handleNumberClick(number) {
  return{
    type: HANDLE_NUMBER_CLICK,
    payload: number
  }
}

export function handleClearNumbers(){
  return{
    type: HANDLE_CLEAR_NUMBERS
  }
}

export function handleSetOperator(input){
  return{
    type: HANDLE_SET_OPERATOR,
    payload: input
  }
}
