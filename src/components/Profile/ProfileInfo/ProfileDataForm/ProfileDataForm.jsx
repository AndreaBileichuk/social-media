import React from "react"
import s from './../ProfileInfo.module.css'
import {CreateField, Input,Textarea} from './../../../Common/FormsControls/FormsControls'
import { reduxForm } from "redux-form"




const ProfileDataForm = (props) => {
	return 	<form onSubmit={props.handleSubmit}>
		{props.error && <div className={s.error}>
			{props.error}
			</div>}
		<div>
			<b>Full name</b>: {CreateField(Input,'', 'fullName','text', [], null)}
		</div>
		<div>
			<b>Looking for a job</b>: {CreateField(Input,'', 'lookingForAJob','checkbox', [], null)}
		</div>
		<div>
			<b>My professional skills</b>: {CreateField(Textarea,'', 'lookingForAJobDescription','text', [], null)}
		</div>
		<div>
			<b>About me</b>: {CreateField(Textarea,'', 'aboutMe','text', [], null)}
		</div>
		<div>
			<b>Contact</b>: {Object.keys(props.profile.contacts).map(key => {
				return <div key = {key} className={s.contact}>
					<b className={s.bold}>{key}:</b>  {CreateField(Input,key, 'contacts.' + key,'text', [], null)}
				</div>
			})}
		</div>
		<button className={s.button} onClick={() => {}}>Save</button>
	</form>
}

const ProfileDataFormReduxForm = reduxForm({form:'edit-profile', enableReinitialize: true, destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormReduxForm