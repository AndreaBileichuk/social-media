/**
 * @jest-environment node
 */
// my-broken-node-only-test.js

import profileReducer, {addPostCreator, deletePost} from './profile-reducer'

let state = {
	posts: [
		{id: 1,message: 'LightWeightBaby',likesCount: 3232,},
		{id: 2,message: `Let's GO`,likesCount: 3111,},
		{id: 3,message: 'No way bruh',likesCount: 1029012,}
	]
}

// 1
test('length of posts should be incremented', () => {
	let action = addPostCreator('it-kamasutra.com')
	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(4)
})

// 2
test('message of new post should be correct', () => {
	let action = addPostCreator('it-kamasutra.com')
	let newState = profileReducer(state, action)

	expect(newState.posts[3].message).toBe('it-kamasutra.com')
})

// 3 
test('after deleting length of message should be decrement', () => {
	let action = deletePost(1)
	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(2)
})

// 4
test(`after deleting length of message shouldn't be decrement`, () => {
	let action = deletePost(1000)
	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(3)
})