import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
	let path = `/dialogs/${props.id}`

	return (
		<div>
			<img src={props.image} alt="logo-message" className={s.image}/>
					<NavLink to={path} className={navLink => navLink.isActive ? s.active : s.dialog}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem