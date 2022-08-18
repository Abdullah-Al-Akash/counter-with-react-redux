import { DECREMENT, INCREMENT } from "./actionsType";


const initialState = {
        value: 20,
};

const counterReducer = (state = initialState, action) => {
        switch (action.type) {
                case INCREMENT:
                        return {
                                ...state,
                                value: state.value + action.payload
                        }

                case DECREMENT:
                        return {
                                ...state,
                                value: state.value - action.payload
                        }

                default:
                        return state;
        }
}

export default counterReducer;