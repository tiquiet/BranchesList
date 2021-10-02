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

export const changeSearchString = (value) => ({
   type: CHANGE_STRING,
   payload: value
})

export const showLoader = () => ({
   type: SHOW_LOADER
})

export const hideLoader = () => ({
   type: HIDE_LOADER
})

export const setModalActiveAdd = (value) => ({
   type: SET_MODAL_ADD,
   payload: value
})

export const setModalActiveRemove = (value) => ({
   type: SET_MODAL_REMOVE,
   payload: value
})

export const setModalItemRemove = (value) => ({
   type: SET_MODAL_ITEM_REMOVE,
   payload: value
})

export const addBranch = (value) => ({
   type: ADD_BRANCH,
   payload: value
})

export const removeBranch = (value) => ({
   type: REMOVE_BRANCH,
   payload: value
})

export function fetchData() {
   return async dispatch => {
      dispatch(showLoader())
      const response = await fetch('/data.json')
      const json = await response.json()
      setTimeout(() => {
         dispatch({type: FETCH_DATA, payload: json})
         dispatch(hideLoader())
      }, 1000)
   }
}