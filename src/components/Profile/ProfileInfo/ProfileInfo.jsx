import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {

	let [editMode,setEditMode] = useState(false)

	if(!props.profile){
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if(e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}	

	const onSubmit = (formData) => {
		props.saveProfile(formData).then(()=> {
			setEditMode(false)
		})
	}

	return (
		<div className={s.profileInfo}>
			{/* <div>
				<img className={s.profile_img} src='https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2021/12/16a-visit-uk-presid/211216a-005_rdax_775x440p.jpg' />
			</div> */}
			<div>
				<img className={s.img_large} src={props.profile.photos.large ? props.profile.photos.large : 'https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg'} alt="" />
				<div className={s.container}>
					<br />{ props.isOwner && <input className={s.fileUploader} type={'file'} onChange = {onMainPhotoSelected}/>}	
				</div>
				
				{ editMode 
					? <ProfileDataFormReduxForm initialValues={props.profile} onSubmit = {onSubmit} profile = {props.profile}/> 
					:<ProfileData profile = {props.profile} isOwner = {props.isOwner} 
					goToEditMode = {() => {setEditMode(true)}}/> }

				<ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
			</div>
		</div>
	)
}

export const Contact = ({contactTitle, contactValue}) => {
	return <div className={s.contact}>
		<b>{contactTitle}</b>: {contactValue ? contactValue  : 'No data'}	
	</div>
}

const ProfileData = (props) => {
	return 	<div>
		<div>
			<b>Full name</b>: {props.profile.fullName ? props.profile.fullName : ''}
		</div>
		<div>
			<b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
		</div> 
		<div>
			<b>My professional skills</b>: {props.profile.lookingForAJobDescription}
		</div>
		<div>
			<b>About me</b>: {props.profile.aboutMe ? props.profile.aboutMe : 'Add Something'}
		</div>
		<div>
			<b>Contact</b>: {Object.keys(props.profile.contacts).map(key => {
				return <Contact key = {key} contactTitle = {key} contactValue = {props.profile.contacts[key]}/>
			})}
		</div>
		{props.isOwner && <button className={s.button} onClick={props.goToEditMode}>Edit</button>}
	</div>
}

export default ProfileInfo