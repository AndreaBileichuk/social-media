import { stopSubmit } from 'redux-form';
import {usersAPI,profileAPI} from '../api/api'
import store from './redux-store';

const ADD_POST = '/profile/ADD-POST'
const DELETE_POST = '/profile/DELETE-POST'
const SET_USER_PROFILE = '/profile/SET-USER-PROFILE'
const SET_STATUS = '/profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = '/profile/SAVE-PHOTO-SUCCESS'

let initialState = { 
	posts: [
		{id: 1,message: 'LightWeightBaby',likesCount: 3232,},
		{id: 2,message: `Let's GO`,likesCount: 3111,},
		{id: 3,message: 'No way bruh',likesCount: 1029012,}
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let body = action.post
			return {
				 ...state,
				posts: [...state.posts, {id: 4,message: body,likesCount: 0,}],
				newPostText: ''
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter((p) => p.id != action.postId)
			}
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.photo
				}
			}
		}
		default: {
			return state;
		}
	}
}

export const addPostCreator = (post) => ({ type: ADD_POST,post})


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setProfileStatus = (status) => ({type: SET_STATUS, status})

export const deletePost =  (postId) => ({type:DELETE_POST, postId})

export const savePhotoSuccess = (photo) => ({type:SAVE_PHOTO_SUCCESS, photo})

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId)
	
	dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
	 	let response = await profileAPI.getStatus(userId)
		dispatch(setProfileStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
	
	try {
		let response = await profileAPI.updateStatus(status)
			if(response.data.resultCode === 0){
				dispatch(setProfileStatus(status))
			}

	} catch (error) {
		alert('403 Error')
	}
}
export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file)

	if(response.data.resultCode === 0){
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export const saveProfile = (profile) => async (dispatch) => {
	const userId = store.getState().auth.id
	// debugger
	const response = await profileAPI.saveProfile(profile)

	if(response.data.resultCode === 0){
		dispatch(getUserProfile(userId))
	}else{
		dispatch(stopSubmit('edit-profile', {_error:response.data.messages[0]}))
		return Promise.reject(response.data.messages[0])	
	}
}

export default profileReducer;
