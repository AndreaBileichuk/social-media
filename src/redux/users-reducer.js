import { usersAPI } from "../api/api";
import {updateObjectInArray} from '../utils/helper/object-helpers'

const FOLLOW = '/users/FOLLOW'
const UNFOLLOW = '/users/UNFOLLOW'
const SET_USERS = '/users/SET-USERS'
const SET_CURRENT_PAGE = '/users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNTS = '/users/SET-TOTAL-USERS-COUNTS'
const TOGGLE_IS_FETCHING = '/users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLOWWING_PROGRESS = '/users/TOGGLE-IS-FOLOWWING-PROGRESS'


let initialState = {
	users: [
		
	],
	pageSize: 100,
	totalUserCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

 const usersReducer = (state = initialState, action) => {
	

	switch(action.type){
		case FOLLOW : {
			return {
				...state, 
				users: updateObjectInArray(state.users, action.userId ,true)
			}
		}
		case UNFOLLOW : {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId ,false)
			}
		}
		case SET_USERS: {
			return {...state, users: action.users}
		}case SET_CURRENT_PAGE : {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNTS: {
			return {...state, totalUserCount: action.totalCount}
		}
		case TOGGLE_IS_FETCHING : {
			return {...state, isFetching: action.isFetching}
		}
		case TOGGLE_IS_FOLOWWING_PROGRESS : {
			return {
				...state,
				followingInProgress: action.isFetching 
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
				}
		}
		default: {
			return state
		}
	}
		
} 


export const follow = (userId) => ({type: FOLLOW, userId})

export const unfollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNTS, totalCount})

export const toggleIsFetcning = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLOWWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage,pageSize) => {
	
	return async (dispatch) => {
		dispatch(toggleIsFetcning(true))
		dispatch(setCurrentPage(currentPage))

		let data = await usersAPI.getUsers(currentPage, pageSize)
			dispatch(toggleIsFetcning(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
	}
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId))
								
	let response = await apiMethod(userId)
		if(response.data.resultCode === 0){
			dispatch(actionCreator(userId)) 
		}

	dispatch(toggleFollowingProgress(false,userId))
}

export const followThunk = (userId) => {
	return  (dispatch) => {
		followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),follow)
	}
}

export const unFollowThunk = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollow)	
	}
}

export default usersReducer