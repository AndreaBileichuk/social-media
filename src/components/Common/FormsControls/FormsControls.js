import React from "react"
import styles from './FormsControls.module.css'
import { Field } from "redux-form";

const FormControl = ({input ,meta ,...props}) => {
	const hasError = meta.touched && meta.error;

	return (
		<div className={styles.formControl + " " + (hasError ?  styles.error : "")}>
			<div>
				{props.children}
			</div>
			{ hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea = (props) => {

	const {input, ...restProps} = props
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
	
}

export const Input = (props) => {
	const {input, ...restProps} = props
	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (component, placeholder,name,type,required,styles) => (
	<div>
		<Field component={component} validate={required} type={type} name={name} className = {styles} placeholder={placeholder}/>
	</div>	
)
