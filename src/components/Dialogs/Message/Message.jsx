import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {

	let whoClass = ''

	if(props.who === 'companion'){
		whoClass = `${s.companion}`
	}else {
		whoClass = `${s.me}`
	}

	return (
		<div className={`${s.message} ${whoClass}`}>{props.message}</div>
	)
}

export default Message