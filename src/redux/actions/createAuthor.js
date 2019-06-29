import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';
export function loadAuthorSuccess(authors){
    return{
        type:types.LOAD_AUTHORS_SUCCESS,
        authors:authors
    }
}



export function loadAuthors(){
    return (dispatch) => {
        return authorApi.getAuthors()
        .then((authors) => dispatch(loadAuthorSuccess(authors)),(error) => console.log(error))
        .catch((error)=> console.log(error));
    }
}

