import { useEffect } from "react";
import { NavLink } from "react-router-dom";
type NavbarLinkPropsType = {
	to: string;
	pageName: string;
};


const NavbarLink = ({ to, pageName }: NavbarLinkPropsType) => {

	useEffect(() => {
		const HomePageLink: Element = document.querySelector("a.home")!;
		if (window.location.pathname === "/")
			HomePageLink?.classList.add("active");
		else
			HomePageLink?.classList.remove("active");

	}, [])
	return (
		<li className="nav-item">
			<NavLink className="nav-link" to={to}>
				{pageName}
			</NavLink>
		</li>
	);
};

export default NavbarLink;
