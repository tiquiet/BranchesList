import {
   ADD_BRANCH,
   CHANGE_STRING,
   FETCH_DATA,
   HIDE_LOADER,
   REMOVE_BRANCH,
   SET_MODAL_ADD, SET_MODAL_ITEM_REMOVE,
   SET_MODAL_REMOVE,
   SHOW_LOADER
} from "./types";


const initialState = {
   searchString: '',
   fetchedData: [],
   loading: true,
   modalActiveAdd: false,
   modalActiveRemove: false,
   modalItemRemove: {address:{}},
   newId: 11
}

export const branchesReducer = (state = initialState, {type, payload}) => {
   switch (type) {
      case CHANGE_STRING:
         return {...state, searchString: payload}
      case FETCH_DATA:
         return {...state, fetchedData: payload}
      case SHOW_LOADER:
         return {...state, loading: true}
      case HIDE_LOADER:
         return {...state, loading: false}
      case SET_MODAL_ADD:
         return {...state, modalActiveAdd: payload}
      case SET_MODAL_REMOVE:
         return {...state, modalActiveRemove: payload}
      case SET_MODAL_ITEM_REMOVE:
         return {...state, modalItemRemove: payload}
      case ADD_BRANCH:
         return {...state, newId: state.newId + 1, fetchedData: [...state.fetchedData, {...payload, id: state.newId, key: state.newId}]}
      case REMOVE_BRANCH:
         return {...state, fetchedData: state.fetchedData.filter(data => data.id !== payload)}
      default:
         return state
   }
}