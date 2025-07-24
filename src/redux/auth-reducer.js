import { stopSubmit } from 'redux-form'
import {authAPI} from '../api/api'
import { securityApi } from '../api/api'

const SER_USER_DATA = '/auth/SET-USER-DATA'
const SET_CAPTCHA_URL = '/auth/GET-CAPTCHA-URL'

let initialState = {
	email: null,
	id: null,
	login: null,
	isFetching: false,
	isAuth: false,
	captchaUrl: null //if null, then captcha is not required
}

 const authReducer = (state = initialState, action) => {

	switch(action.type){
		case SER_USER_DATA: {
			return {
				...state,
				...action.payload,
				isAuth: action.payload.isAuth
			}
		}
		case SET_CAPTCHA_URL: {
			return {
				...state,
				captchaUrl: action.url
			}
		}
		default: {
			return state
		}
	}
		
} 


 const setAuthUserData = (email, id, login, isAuth) => ({type: SER_USER_DATA, payload: {email, id, login,isAuth}})

 const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url})

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();

		if (response.data.resultCode === 0) {
			let {email, id, login} = response.data.data
			dispatch(setAuthUserData(email, id, login,true))
		}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe,captcha)

			if(response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else{
				if (response.data.resultCode === 10) {
					dispatch(getCaptchaUrl())
				}
				let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
				dispatch(stopSubmit('login', {_error: message}))
			}
}

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()

		if(response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null,false))
		}
}

export const getCaptchaUrl = () => async (dispatch) => {
	const response = await securityApi.getCaptchaUrl()
	const captchaUrl = response.data.url
	dispatch(setCaptchaUrl(captchaUrl))
}

export default authReducer