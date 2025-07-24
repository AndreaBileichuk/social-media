// let store = {
// 	_state: {
// 		profilePage: {
// 			posts: [
// 				{id:1,message: 'I like Jesus', likesCount:0},
// 				{id:2,message: 'How are you?', likesCount:0},
// 				{id:3,message: 'How is your day?', likesCount:0},
// 				{id:4,message: 'What do you do?', likesCount:1},
// 				{id:5,message: 'You doing anything fun this weekend?', likesCount:0},
// 				{id:6,message: 'I am Andrea', likesCount:0}
// 			],
// 			newPostText: ''
// 		},
// 		messagesPage: {
// 			message: [
// 				{id:1,message: 'Hi', who:'companion'},
// 				{id:2,message: 'Hi, how are you?',who:'companion'},
// 				{id:3,message: 'Hi,fine', who:'me'},
// 				{id:4,message: 'You', who:'me'},
// 				{id:5,message: 'Fine,Bye',who:'companion'},
// 				{id:6,message: 'Bye',who:'me'}
// 			],
// 			dialogs: [
// 				{id:1,name: 'Andrea', image:'https://img.freepik.com/free-vector/cute-koala-floating-with-balloon-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2349.jpg?w=2000'},
// 				{id:2,name: 'Ivan', image:'https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000'},
// 				{id:3,name: 'Alina', image:'https://img.freepik.com/free-vector/cute-koala-sleeping-cartoon-illustration_138676-2778.jpg?w=2000'},
// 				{id:4,name: 'Valik', image:'https://img.freepik.com/free-vector/cute-monster-kid-cartoon-vector-icon-illustration-monster-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3995.jpg?w=2000'},
// 				{id:5,name: 'Luda', image:'https://img.freepik.com/free-vector/cute-dolphin-cartoon-illustration_138676-3212.jpg?w=2000'},
// 				{id:6,name: 'Mariana', image:'https://img.freepik.com/free-vector/cute-monkey-playing-skateboard-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3516.jpg?w=2000'}
// 			],
// 			newMessageText: ''
// 		},
// 		sidebar: {}
// 	},
// 	_callSubscriber(){
// 	},



// 	getState() {
// 		return this._state
// 	},
// 	subscribe(observer){
// 		this._callSubscriber =  observer
// 	},
	
	
// 	dispatch (action) { // { type: 'ADD-POST' } 

// 		this._state.profilePage = profileReducer(this._state.profilePage, action)
// 		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
// 		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		
// 		this._callSubscriber(this._state);

// }
// }

// window.store = store;
