import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import AllCards from './AllCards';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;