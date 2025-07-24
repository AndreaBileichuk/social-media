import React from "react";
import { connect } from "react-redux";
import { follow, unfollow,setCurrentPage,toggleFollowingProgress,getUsers,followThunk,unFollowThunk } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getUsersState,getPageSize,getTotalUserCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/users-selectors'


class UsersContainer extends React.Component{

	componentDidMount () {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	
	onPageChanged = (p) => {
		this.props.getUsers(p, this.props.pageSize)
		
		// this.props.setCurrentPage(p)
	}

	render() {
		return <>
		{this.props.isFetching ? 
		<Preloader /> 
		: 	null}
		<Users totalUserCount = {this.props.totalUserCount} 
						  pageSize = {this.props.pageSize}
						  users = {this.props.users}
						  currentPage = {this.props.currentPage}
						  onPageChanged = {this.onPageChanged}
						  unfollow = {this.props.unfollow}
						  follow = {this.props.follow}
						  toggleFollowingProgress = {this.props.toggleFollowingProgress}
						  followingInProgress = {this.props.followingInProgress}
						  followThunk = {this.props.followThunk}
						  unFollowThunk = {this.props.unFollowThunk}/> 
			</>
	}
}


// const mapStateToProps = (state) => {
// 	return {
// 		users:state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUserCount: state.usersPage.totalUserCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }

const mapStateToProps = (state) => {
	return {
		users:getUsersState(state),
		pageSize: getPageSize(state),
		totalUserCount: getTotalUserCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps,  {
		follow,
		unfollow,
		toggleFollowingProgress,
		getUsers,
		followThunk,
		unFollowThunk
	}),
	withAuthRedirect
)(UsersContainer)