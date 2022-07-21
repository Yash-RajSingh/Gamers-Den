import { HeaderBody, Title, UserContainer, NavLink } from "./headerElements";
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <HeaderBody>
                <Title>
                    Gamers Den
                </Title>
                <UserContainer>
                    <Link to='/' style={{textDecoration:"none"}}>
                        <NavLink>
                            Home
                        </NavLink>
                    </Link>
                    <Link to='/news' style={{textDecoration:"none"}}>
                        <NavLink>
                            News
                        </NavLink>
                    </Link>
                    <Link to='/login'  style={{textDecoration:"none"}}>
                        <NavLink >
                            Login
                        </NavLink>
                    </Link>
                </UserContainer>
            </HeaderBody>
        </>
    )
}

export default Header;