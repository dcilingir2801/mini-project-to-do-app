import "/src/components/Navbar.css";
export default function NavComponent() {
	return (
		<div className="navBar">
			<div className="logo">
				<img src="/src/assets/to-do-list.png" alt="Logo" />
			</div>
            <h1>DONE App</h1>
		</div>
	);
}