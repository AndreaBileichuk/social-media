import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png" alt="" />
		
			<div className={s.loginBlock}>
				{props.isAuth ?
				<div><NavLink className = {s.loginName} to = {'/profile'}><span className={s.login}>{props.login}</span></NavLink> - <button className={s.login} onClick={props.logout}>Log out</button></div>
					:	<NavLink className = {s.loginBtn} to = {'/login'}>Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header