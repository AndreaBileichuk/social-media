import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import {getUserProfile,getStatus,updateStatus,savePhoto,saveProfile} from '../../redux/profile-reducer'
import {
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		 let location = useLocation();
		 let navigate = useNavigate();
		 let params = useParams();
		 return (
			  <Component
					{...props}
					router={{ location, navigate, params }}
			  />
		 );
	}

	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.router.params.userId
		if(!userId) {
			userId = this.props.authorizedUserId
		}
		this.props.getUserProfile(userId)

		this.props.getStatus(userId)
	}

	componentDidMount () {
		this.refreshProfile()
	}
 
	componentDidUpdate(prevProps, prevState) {
		if(this.props.router.params.userId != prevProps.router.params.userId){
			this.refreshProfile()
		}
	}

	render () { 
		return (
			<Profile savePhoto = {this.props.savePhoto} isOwner = {!this.props.router.params.userId} {...this.props} profile = {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
		)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
})

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto,saveProfile}),
	withAuthRedirect,
	withRouter
)(ProfileContainer)