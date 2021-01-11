import { UserActionType } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // O reducer vai verificar se o action type é SET_CURRENT_USER se for ele vai fazer o spread
        // do user e vai adicionar o action payload (user) no state
        case UserActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state
    }
}

export default userReducer;