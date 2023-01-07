import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../post/Post";

import CreatePost from "../createPost/CreatePost";
import { Feed, MainContainer } from "./styles";

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);

  const [clicked, setClicked] = useState(undefined);
  const [whoLiked, setWhoLiked] = useState(undefined);

  const navigate = useNavigate();

  /*const config = {
        headers: {
             Authorization: `Bearer ${ tokenOnLocalStorage }`,
         },
     };*/

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const promise = axios.get(`http://localhost:4000/timeline`);
    promise.then((resposta) => {
      setPosts(resposta.data.posts);
      setWhoLiked(resposta.data.likes);
    });
    promise.catch((resposta) => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  }, [newPost, clicked]);

  if (posts === null) {
    return "carregando...";
  }

  console.log(posts);
  return (
    <MainContainer>
      <Feed>
        <p className="text-feed">timeline</p>
        <CreatePost newPost={newPost} setNewPost={setNewPost} />
        {posts.length === 0
          ? "There are no posts yet"
          : posts.map((post) => {
              return (
                <Post
                  post={post}
                  clicked={clicked}
                  setClicked={setClicked}
                  whoLiked={whoLiked}
                />
              );
            })}
      </Feed>
    </MainContainer>
  );
}
