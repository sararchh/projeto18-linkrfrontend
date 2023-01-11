import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../post/Post";

import CreatePost from "../createPost/CreatePost";
import { Feed, MainContainer, TrendingListStyles } from "./styles";
import TrendingList from "../trendingList/TrendingList";
import api from "../../services/api";
import { UserContext } from "../../contexts/userContext";

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);

  const [clicked, setClicked] = useState(undefined);
  const [whoLiked, setWhoLiked] = useState(undefined);
  const [dadosUser, setDadosUser] = useState('');

  const { setTrendindList, trendingList } = useContext(UserContext);


  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");


    if (!token) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = api.get(`/timeline`, config);
    promise.then((resposta) => {
      setPosts(resposta.data.posts);
      setWhoLiked(resposta.data.likes);
      setDadosUser(resposta.data.dadosUser)
      setTrendindList(resposta.data.trendingList)

    });
    promise.catch((resposta) => {
      // alert(
      //   "An error occured while trying to fetch the posts, please refresh the page"
      // );
    });
  }, [newPost, clicked]);

  if (posts === null) {
    return "carregando...";
  }
  if (dadosUser === '') {
    return "carregando...";
  }

  return (
    <MainContainer>
      <Feed>
        <div>

          <p className="text-feed">timeline</p>
          <CreatePost newPost={newPost} setNewPost={setNewPost} dadosUser={dadosUser[0]} />
         
          {posts.length === 0
            ? "There are no posts yet"
            : posts.map((post, i) => {
              return (
                <Post
                  key={i}
                  i={i}
                  post={post}
                  setNewPost={setNewPost}
                  newPost={newPost}
                  clicked={clicked}
                  setClicked={setClicked}
                  whoLiked={whoLiked}
                  dadosUser={dadosUser[0]}
                />
              );
            })}
        </div>
        <TrendingListStyles>
          <TrendingList trendingList={trendingList} />
        </TrendingListStyles>
      </Feed>
    </MainContainer>
  );
}
