import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts
	}
}

const mapDspatchToProps = (dispatch) => {
	return {
		addPost: (post) => {
			dispatch(addPostCreator(post))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDspatchToProps)(MyPosts)

export default MyPostsContainer