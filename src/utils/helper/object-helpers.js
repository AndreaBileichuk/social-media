
export const updateObjectInArray = (items, userId, boolean) => {
	return items.map(user => {
		if(user.id === userId) {
			return {...user, followed:boolean}
		}
		return user
	})
}