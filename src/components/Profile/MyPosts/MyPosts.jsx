import React, {memo} from "react";
import { Field, reduxForm } from "redux-form";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {required,maxLengthCreator} from '../../../utils/validators/validators'
import {Textarea} from "../../Common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10)

const MyPosts = memo(props => {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps != this.props || nextState != this.state
	// }
	// console.log('Render');
	// window.props.push(this.props)
	// console.log(this.props);
	let postsElements = [...props.posts]
			.reverse()
			.map(post => <Post key = {post.id} message={post.message} img='https://i.pinimg.com/originals/ad/3b/13/ad3b130542313caa7bdd5764ac057ce0.jpg' likesCount={post.likesCount} />)	

	const addPost = (values) => {
		props.addPost(values.newPostBody)
	}

	return (
		<div className={s.postsBlcok}>
			<h3 className={s.title}>My posts</h3>
			<MyPostReduxForm onSubmit={addPost}/>
			<div className={s.posts}>
				{	 postsElements 	}
			</div>
		</div>
	)
	}	
)

const MyPostsForm = (props) => {
	return ( 
		<form onSubmit={props.handleSubmit}> 
				<div>
					<Field validate = {[required, maxLength10]} className={s.textarea} component={Textarea} name="newPostBody" placeholder='Enter your post'/>
				</div>
				<div>
					<button className={s.btn}>Add post</button>
				</div>
		</form>
	)	
}

const MyPostReduxForm = reduxForm({
	form:'profileAddMessage'
})(MyPostsForm)

export default MyPosts