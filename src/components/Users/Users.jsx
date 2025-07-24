import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
	
	// let pagesCount = Math.ceil(props.totalUserCount/ props.pageSize) 

	// let pages = []

	// for(let i = 1;i <= pagesCount;i++) {
	// 	pages.push(i)
	// }

	return (
	<div>
		<Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
		{
			props.users.map(u =>
				<User key = {u.id} user = {u} followingInProgress={props.followingInProgress} followThunk={props.followThunk} unFollowThunk={props.unFollowThunk}/>
			)
		}
	</div>
	)
}

export default Users