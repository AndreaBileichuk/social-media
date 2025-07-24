import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls"
import { maxLengthCreator,required } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const Dialogs = (props) => {
	let dialogElements = props.messagesPage.dialogs.map(p => <DialogItem id={p.id} name={p.name} image={p.image}/> )
	
	let messagesElements = props.messagesPage.message.map( m => <Message id={m.id} message={m.message} who = {m.who}/> )

		const addMessageText = (values) => {
			props.sendMessage(values.newMessageBody)
		}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{	dialogElements   }
			</div>
			<div className={s.messages}>
				{	messagesElements   }
				<AddMessageReduxForm onSubmit={addMessageText}/>
			</div>
		</div>
	)
}

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder='Enter your message' 
						className={s.textarea} 
						component={Textarea} 
						name="newMessageBody"
						validate={[required, maxLength100]}/>
				<br />
				
				<button className={s.btn}>Send Message</button>
		</form>
	)
}

const AddMessageReduxForm = reduxForm({
	form:'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs