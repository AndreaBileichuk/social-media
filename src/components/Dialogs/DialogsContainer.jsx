import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageCreator} from './../../redux/dialogs-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
	}
}
 
let mapDspatchToProps = (dispatch) => {
	return {
		sendMessage : (message) => {
			dispatch(addMessageCreator(message))
		}
	}
}


export default compose(
	connect(mapStateToProps,mapDspatchToProps),
	withAuthRedirect
)(Dialogs)