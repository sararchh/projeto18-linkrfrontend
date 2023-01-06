import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import CreatePost from "./CreatePost";

export default function Main() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);

    /*const config = {
        headers: {
             Authorization: `Bearer ${ tokenOnLocalStorage }`,
         },
     };*/

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate("/");
        }
         // eslint-disable-next-line
    }, []);

    useEffect(() => {

        const promise = axios.get(`http://localhost:4000/timeline`)
        promise.then(resposta => {
            setPosts(resposta.data)
        });
    }, []);

    if (posts === null) {
        return 'carregando...';
    }

    return (
        <MainContainer>
            <Feed>
                <p>timeline</p>
                <CreatePost />
                {/* {posts.map((post) => {
                    return (
                        <Post>d</Post>
                    )
                })} */}

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
const Post = styled.div`
margin-top: 43px;
width: 100%;
height: 209px;
background-color: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
`

