import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <span className="ml-1">React with TypeScript</span>
                </Link>
            </div>
        </nav>
    );
};

export default Menu;