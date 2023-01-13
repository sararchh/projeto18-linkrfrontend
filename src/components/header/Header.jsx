import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import { HeaderContainer, Icon, Menu, Profile, ContainerInput, Card } from './styles';
import { DebounceInput } from 'react-debounce-input';

import { toast } from "react-toastify";

import api from '../../services/api';

export default function Header() {
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);
    const [inputSearch, setInputSearch] = useState();
    const [users, setUsers] = useState([]);
    const [pictureURL, setPictureURL] = useState();
    const [userId, setUserId] =useState(undefined);

    useEffect(() => {
        getUsers();

    }, [inputSearch]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    const getUsers = async () => {
        try {
            const users = await api.get(`users/${inputSearch}`);
            const imgUser = localStorage.getItem("picture");
            setPictureURL(imgUser);
            setUsers(users.data.selectedUsers);
            setUserId(users.data.userId)
        } catch (error) {
            return toast.error('Usuário não encontrado!')
        }
    }

    console.log(users)

    return (
        <>
            <HeaderContainer >
                <p>
                    linkr
                </p>

                <ContainerInput>

                    <DebounceInput
                        minLength={3}
                        debounceTimeout={300}
                        onChange={e => setInputSearch(e.target.value)} />
                    <BsSearch />

                    <Card>
                        {users?.length > 0 && users?.map((i) => (
                            <div key={i.id} className="cardAvatar">
                                <img src={i.pictureUrl} alt='Avatar do usuário' />
                                <p onClick={()=>navigate(`/user?id=${users?.data.selectedUsers[0]?.id}`)}>{i.username} </p>
                                {(userId === i.followsUserId ) ? (<span>  ●  following</span>) :""}
                            </div>
                        ))}
                    </Card>
                </ContainerInput>

                <div>
                    <Icon onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

                    </Icon>
                    <Profile onClick={() => setOpenMenu(false)}>
                        <img src={pictureURL} alt="avatar usuário" />
                    </Profile>
                </div>

                {openMenu &&
                    <Menu onMouseOut={() => setOpenMenu(false)} >
                        <button onClick={handleLogout}>
                            <p> Logout</p>
                        </button>
                    </Menu>}
            </HeaderContainer>
        </>
    );
}


