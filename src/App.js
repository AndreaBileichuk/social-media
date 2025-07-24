import React, { Suspense } from "react";
import './App.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from './components/Login/Login'
import {Route, Routes,Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {initializeApp} from './redux/app-reducer'
import Preloader from "./components/Common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {

  render () {

	if(!this.props.initialized){
		return <div className="preloader-app"><Preloader /></div>
	}

		return (
			<div className='app-wrapper'>
				<HeaderContainer />	
				<Navbar /> 	
				<div className='app-wrapper-content'>
					<Suspense fallback={<div><Preloader /></div>}>
					<Routes>
						<Route path="/" element={<Navigate to="/profile" />} />
						<Route path='/profile/:userId?' element= {<ProfileContainer/>}/>
						<Route path='/dialogs/*' element= {<DialogsContainer />}/>
						<Route path='/news' element= {<News/>}/>
						<Route path='/music' element= {<Music/>}/>
						<Route path='/settings' element= {<Settings/>}/>
						<Route path='/users' element= {<UsersContainer/>}/>
						<Route path='/login' element= {<Login/>}/>
						<Route path='*' element= {<div>Not Found</div>}/>
					</Routes>
					</Suspense>
				</div>
			</div>
		);
	}

	catchAllUnhandledError = (reason, promise) => {
		alert("Some error occured")
	}

	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener("unhandledrejection", function(promiseRejectionEvent) { 
			// handle error here, for example log   
			this.catchAllUnhandledError()
	  });
	
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", function(promiseRejectionEvent) { 
			// handle error here, for example log   
			this.catchAllUnhandledError()
	  });
	}
}
const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose(
	connect(mapStateToProps, {initializeApp}
))(App);


const SamuraiJSApp = () => {
	return (
		<BrowserRouter>
				<Provider store={store}>
					<AppContainer />
				</Provider>
		</BrowserRouter>
	)
}

export default SamuraiJSApp;