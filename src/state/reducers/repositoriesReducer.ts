import {ActionTypes} from '../action-types';
import {Action} from '../actions'

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

//-- For each action we write an interface, so that we don't have to use 'any' for payload.
// interface Action {
//     type:string;
//     payload?:any;
// }

const initialState = {
    loading: false,
    error: null,
    data: [],
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action ) : RepositoriesState  => {
    switch(action.type) {
        case ActionTypes.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: []};
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload};
        case ActionTypes.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default reducer;