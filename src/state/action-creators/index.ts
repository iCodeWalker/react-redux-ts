import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

//We are going to make use of redux thunk in order to write asynchronous action creators

//Using action creators we can manually dispatch actions.

export const searchRepositories = (term: string) => {
    //because we are using redux-thunk we can return async function
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionTypes.SEARCH_REPOSITORIES
        });
        try{
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params:{
                    text:term
                }
            });
            const names = data.objects.map((result : any)=> {
               return result.package.name;
            })

            dispatch({
                type:ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload:names,
            })

        }catch(err:any){
            dispatch({
                type:ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: err.message, 
            })
        }
    }
}