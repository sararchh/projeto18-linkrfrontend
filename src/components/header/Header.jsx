import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import { HeaderContainer, Icon, Menu, Profile } from './styles';

export default function Header() {
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <HeaderContainer >
                <p>
                    linkr
                </p>
                <div>
                    <Icon onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

                    </Icon>
                    <Profile onClick={() => setOpenMenu(false)}></Profile>
                </div>

                {openMenu &&
                    <Menu onMouseOut={()=>setOpenMenu(false)} >
                        <button onClick={handleLogout}>
                            <p> Logout</p>
                        </button>
                    </Menu>}
            </HeaderContainer>
        </>
    );
}


