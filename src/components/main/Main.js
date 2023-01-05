import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../post/Post";

import CreatePost from "../createPost/CreatePost";
import { Feed, MainContainer } from "./styles";

export default function Main() {

    const [posts, setPosts] = useState(null)
    const [newPost, setNewPost] = useState(false)
    const navigate = useNavigate();

    /*const config = {
        headers: {
             Authorization: `Bearer ${ tokenOnLocalStorage }`,
         },
     };*/

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            //TO DO adicionar validacao no login para caso existir o token no localstorage permanecer logado
            navigate("/");
        }
         // eslint-disable-next-line
    }, []);

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




