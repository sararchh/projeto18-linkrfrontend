import styled from "styled-components"


export const PostContainer = styled.div`
box-sizing: border-box;
margin-top: 43px;
width: 100%;
height: 276px;
background-color: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
display: flex;
`
export const ProfilePicture = styled.img`
border-radius: 26.5px;
width: 53px;
height: 53px;
`
export const PostContent = styled.div`
margin-left: 18px;
h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
    margin-bottom: 6px;
}

`

export const Text = styled.div`
    margin-top: 4px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px !important;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 7px;
    cursor: pointer;
`;



export const ContainerLeft = styled.div`

`;

export const Icon = styled.div`
font-size: 30px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
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

export const TextLine = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const IconContainer = styled.div`
display: flex;
`
export const UrlContainer = styled.div`
box-sizing: border-box;
width: 503px;
height: 155px;
border: 1px solid #4D4D4D;
border-radius: 11px;
display: flex;
justify-content: space-between;
`
export const LeftSide = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
h2{
    width: 250px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 13px;
    color: #CECECE;
    margin-bottom: 3px;
}
h3{
    width: 263px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size:11px;
    line-height: 11px;
    color: #CECECE;
    margin-bottom: 2px;
}
h4{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
}
`
export const RightSide = styled.img`
border-radius: 0px 12px 13px 0px;
width: 154px;
height: 155px;
`