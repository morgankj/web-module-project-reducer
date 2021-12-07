import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SET_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const memorySwitch = (currentTotal, memOp, currentMem) => {
    switch(memOp) {
        case("m+"):
            return currentTotal;
        case("mr"):
            return currentTotal + currentMem;
        case("mc"):
            return 0;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });

        case(SET_MEMORY):
            return ({
                ...state,
                memory: memorySwitch(state.total, action.payload, state.memory)
            })
            
        default:
            return state;
    }
}

export default reducer;