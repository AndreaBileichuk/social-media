import React, { useState } from "react";
import style from './Paginator.module.css'


let Paginator = (props, {portionSize = 20}) => {
	
	let pagesCount = Math.ceil(props.totalUserCount/ props.pageSize) 

	let pages = []

	for(let i = 1;i <= pagesCount;i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
	<div>
		<div className={style.pagination}>
			{portionNumber > 1 &&
			<button className= {style.next_prev} onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous</button>}
		 	{pages.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber).map(p=> {
				 return <span className={props.currentPage === p ? style.selectedPage : style.default} onClick={(e) => { props.onPageChanged(p) } }>{p}</span>
				})} 
				{/* props.currentPage === p ? style.selectedPage : style.default  */}
			{portionCount > portionNumber && 
				<button className= {style.next_prev} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
			}
		</div>
	</div>
	)
}

export default Paginator