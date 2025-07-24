const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
	message: [
		{id:1,message: 'Hi', who:'companion'},
		{id:2,message: 'Hi, how are you?',who:'companion'},
		{id:3,message: 'Hi,fine', who:'me'},
		{id:4,message: 'You', who:'me'},
		{id:5,message: 'Fine,Bye',who:'companion'},
		{id:6,message: 'Bye',who:'me'}
	],
	dialogs: [
		{id:1,name: 'Andrea', image:'https://img.freepik.com/free-vector/cute-koala-floating-with-balloon-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2349.jpg?w=2000'},
		{id:2,name: 'Ivan', image:'https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000'},
		{id:3,name: 'Alina', image:'https://img.freepik.com/free-vector/cute-koala-sleeping-cartoon-illustration_138676-2778.jpg?w=2000'},
		{id:4,name: 'Valik', image:'https://img.freepik.com/free-vector/cute-monster-kid-cartoon-vector-icon-illustration-monster-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3995.jpg?w=2000'},
		{id:5,name: 'Luda', image:'https://img.freepik.com/free-vector/cute-dolphin-cartoon-illustration_138676-3212.jpg?w=2000'},
		{id:6,name: 'Mariana', image:'https://img.freepik.com/free-vector/cute-monkey-playing-skateboard-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3516.jpg?w=2000'}
	]
}

 const dialogsReducer = (state = initialState, action) => {
	

	switch(action.type){
		case ADD_MESSAGE: {
			return {
				...state,
				message: [...state.message, {id:7,message: action.message,who: 'me'}]
			}
		}
		default:	
			return state;
		}
} 


export const addMessageCreator = (message) => ({type: ADD_MESSAGE,message})


export default dialogsReducer