import styled from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.div`
background-color: #151515;
width: 100vmax;
height: 72px;
display: flex;
justify-content: space-between;
align-items: center;

position: fixed;
top: 0;
left: 0;

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
margin-right: 40px;
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

export const ContainerInput = styled.div`
       max-width: 563px;
       width: 563px;
       height: 45px;
       flex-direction: column;
       position: relative;

    svg {
        width: 34px;
        height: 34px;
        color: var(--text);

        position: absolute;
        top: 7px;
        right: 10px;

        z-index: 2;
    }

    input {
    min-width: 563px;
    width: 563px;
    height: 45px;
    border-radius: 8px;
    background-color: var(--white);

    font-size: 19px;
    padding: 20px;
    color: var(--text);

    z-index: 2;

    @media (max-width: 800px) {
        min-width: 350px;
        max-width: 350px;
        width: 350px;
        height: 45px;
    }  
    }


    @media (max-width: 800px) {
        margin-top:150px;
        max-width: 350px;
        width: 350px;
        height: 45px;
    }  
`;

export const Card = styled.div`
       max-width: 563px;
       width: 563px;
       height: auto;

       background-color: var(--text);

       border-radius: 8px;
       margin-top: -12px;

       display: flex;
       flex-direction: column;

       .cardAvatar {
        width: 500px;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        cursor: pointer;

        img {
            width: 39px;
            height: 39px;
            border-radius: 304px;
        }

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            line-height: 23px;
            color: var(--text-dark);
        }

        @media (max-width: 800px) {
        min-width: 350px;
        max-width: 350px;
        width: 350px;
        }  
       }

       @media (max-width: 800px) {
        min-width: 350px;
        max-width: 350px;
        width: 350px;
        height: auto;
    }  
`;
