import {UserActionType} from './user.types';

// Vai receber o user e adicionar no payload
export const setCurrentUser = (user) => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
});

