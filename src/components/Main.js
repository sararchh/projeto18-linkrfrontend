import styled from "styled-components";

export default function Main() {
    return (
        <MainContainer>
            <Feed>
                <p>timeline</p> 
                <CreatePost></CreatePost>
                <Post>d</Post>
            </Feed>
        </MainContainer>
    );
}

const MainContainer = styled.div`
width: 100vmax;
height: 100vmax;
background-color: #333333;
display: flex;
justify-content: center;
`
const Feed = styled.div`

width: 611px;
margin-top: 150px;
p{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;

}
`
const CreatePost = styled.div`
margin-top: 43px;
width: 100%;
height: 209px;
background-color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
`

const Post = styled.div`
margin-top: 43px;
width: 100%;
height: 209px;
background-color: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
`