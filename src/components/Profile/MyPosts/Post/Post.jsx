import React from "react";
import s from './Post.module.css'

const Post = (props) => {

	return (
		<div className={s.item}>
			<img src={props.img} alt=""/>
			<span>{props.message}</span>
			<div className={s.postLikes}>
				<span>{props.likesCount} likes</span>
			</div>
		</div>
	)
}

export default Post