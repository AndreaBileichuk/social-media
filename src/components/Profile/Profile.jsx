import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo saveProfile = {props.saveProfile} savePhoto = {props.savePhoto} isOwner = {props.isOwner} className = {s.profileInfo} profile={props.profile} isAuth = {props.isAuth} status={props.status} updateStatus = {props.updateStatus}/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile 