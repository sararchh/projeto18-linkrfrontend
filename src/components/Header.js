import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <p>
                linkr
            </p>
            <div>
                <Icon> 'icon' </Icon>
                <Profile></Profile>
            </div>
        </HeaderContainer>
    );
}


const HeaderContainer = styled.div`
background-color: #151515;
width: 100vmax;
height: 72px;
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-left: 28px;
}
div{
    display: flex;
    align-items: center;
}
`
const Icon = styled.div`
color: #FFFFFF;
margin-right: 16px;
`
const Profile = styled.div`
background: red;
border-radius: 26.5px;
width: 53px;
height: 53px;
margin-right: 17px;
`