import styled from "styled-components";

export const CreatePostContainer = styled.div`
margin-top: 43px;
width: 100%;
max-height: 209px;
height: 209px;
background-color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
display: flex;
`

export const Text = styled.p`
    height: 30px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px !important;
    line-height: 24px;
    color: var(--text) !important;
`;

export const PostButton = styled.button`
width: 112px;
height: 31px;
background: #1877F2;
border-radius: 5px;
`
export const ProfilePicture = styled.img`
border-radius: 26.5px;
width: 53px;
height: 53px;
`
export const CreatePostContent = styled.div`
margin-left: 18px;
height: 100%;

`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 18px;
div{
    display: flex;
    justify-content: end;
    width: 100%;
}
`
export const Input = styled.input`
box-sizing: border-box;
width: 503px;
height: 30px;
margin-bottom: 5px;
background: #EFEFEF;
border-radius: 5px;
::placeholder{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
}
`

export const InputText = styled.input`
box-sizing: border-box;
width: 503px;
height: 66px;
margin-bottom: 5px;
background: #EFEFEF;
border-radius: 5px;
::placeholder{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
}
`