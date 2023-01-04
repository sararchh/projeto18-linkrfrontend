import { useState, useEffect } from "react";
import styled from "styled-components";
import CreatePost from "./CreatePost";
import axios from "axios";
import Post from "./Post";

export default function Main() {

    const [posts, setPosts] = useState(null)
    const [newPost, setNewPost] = useState(false)

    /*const config = {
        headers: {
             Authorization: `Bearer ${ tokenOnLocalStorage }`,
         },
     };*/

    useEffect(() => {

        const promise = axios.get(`http://localhost:4000/timeline`)
        promise.then(resposta => {
            setPosts(resposta.data)
        });
        promise.catch(resposta => {
            alert("An error occured while trying to fetch the posts, please refresh the page")
        });

    }, [newPost]);

    if (posts === null) {
        return 'carregando...';
    }

    console.log(posts)
    return (
        <MainContainer>
            <Feed>
                <p>timeline</p>
                <CreatePost newPost={newPost} setNewPost={setNewPost} />
                {posts.length === 0
                    ?
                    'There are no posts yet'
                    :
                    posts.map((post) => {
                        return (
                            <Post post={post} />
                        )})}



            </Feed>
        </MainContainer>
    );
}

const MainContainer = styled.div`
width: 100vmax;
height: 100vh;
background-color: #333333;
display: flex;
justify-content: center;
margin-top: 72px;
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


