import {Link} from "react-router-dom";


const Header = () => {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <Link to='/' className='navbar-brand'>
                    <div className="d-flex">
                        <img src="https://w7.pngwing.com/pngs/81/179/png-transparent-graphql-hd-logo.png" alt="logo" className='mr-2'/>
                        <div>Project-MERN-GQL</div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
