import styled from "styled-components";

export const HeaderContainer = styled.div`
background-color: #151515;
width: 100vmax;
height: 72px;
display: flex;
justify-content: space-between;
align-items: center;

position: relative;

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
export const Icon = styled.button`
color: #FFFFFF;
margin-right: 16px;

svg {
    width: 40px;
    height: 40px;
}
`
export const Profile = styled.div`
background: red;
border-radius: 26.5px;
width: 53px;
height: 53px;
margin-right: 17px;
`

export const Menu = styled.div`
    width: 150px;
    height: 47px;

    background-color: var(--black);

    position: absolute;
    bottom: -47px;
    right: 0;

    border-radius: 0px 0px 20px 20px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 15px;
    
    p {
    font-size: 17px;
    letter-spacing: 0.05em;
  }
`;