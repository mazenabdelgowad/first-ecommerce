import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
type NavbarLinkPropsType = {
	to: string;
	pageName: string | ReactNode;
	className: string;
};


const NavbarLink = ({ to, pageName, className }: NavbarLinkPropsType) => {

	useEffect(() => {
		const HomePageLink: Element = document.querySelector("a.home")!;
		if (window.location.pathname === "/")
			HomePageLink?.focus();
		else
			HomePageLink?.classList.remove("active");

	}, [])
	return (
		<li className="nav-item">
			<Link className={className ? className : ""} to={to}>
				{pageName}
			</Link>
		</li>
	);
};

export default NavbarLink;
