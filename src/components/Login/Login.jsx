import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './Login.module.css'
import {Input} from '../Common/FormsControls/FormsControls'
import { required } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import {login, logout} from '../../redux/auth-reducer'
import {Navigate} from 'react-router-dom';
import s from '../Common/FormsControls/FormsControls.module.css'
import { CreateField } from '../Common/FormsControls/FormsControls';

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email,formData.password, formData.rememberMe, formData.captcha)
	}

	if(props.isAuth){
		return <Navigate to = {'/profile'}/>
	}

  return (
	 <div className={styles.login}>
		<h1 className={styles.main_text}>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
	 </div>
  )
}
const LoginForm = ({handleSubmit,error,captchaUrl}) => {
	return (
		 <form onSubmit = {handleSubmit}>
					{CreateField(Input,"Enter your email","email","email",[required],styles.in_log)}
					{CreateField(Input,"Enter your password","password","password",[required],styles.in_pass)}
					{CreateField(Input,"","rememberMe","checkbox",[],styles.in_box)}
				 remember me

				 {captchaUrl && 
					<div className=''>
						<img src={captchaUrl} alt="captcha"/>
						{CreateField(Input,"","captcha","text",[required],styles.in_log)}			 
					</div> 
			 	}
			 {error && <div className={s.formSummaryError}>
				{error}
			 </div>}
			 <div>
				 <button className = {styles.btn}>Log in</button>
			 </div>
		 </form>
	)
 }

const LoginReduxForm = reduxForm({
	form:'login'
})(LoginForm)

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
	login,
	logout
})(Login)
