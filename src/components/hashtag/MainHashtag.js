import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../services/api";
import TrendingList from "../trendingList/TrendingList";
import { Feed, MainContainer, TrendingListStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import Post from "../post/Post";

export default function MainHashtag({ hashtag }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const [clicked, setClicked] = useState(undefined);
  const [whoLiked, setWhoLiked] = useState(undefined);
  const [trendingList, setTrendindList] = useState(undefined);
  const [dadosUser, setDadosUser] = useState("");
  const [clickedHashtag, setClickedHashtag] = useState(false)


  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = api.get(`/hashtag/${hashtag}`, config);

    promise.then((resposta) => {
      setPosts(resposta.data.posts);
      setWhoLiked(resposta.data.likes);
      setDadosUser(resposta.data.dadosUser);
      setTrendindList(resposta.data.trendingList);
      console.log(resposta.data);
    });

    promise.catch((res) => {
      console.log(res.responde.data);
    });
  }, [hashtag]);

  if (posts === null) {
    return (
        <Feed>
            <p>Carregando...</p>
        </Feed>
    );
  }
  if (dadosUser === "") {
    return "carregando...";
  }

  return (
    <MainContainer>
      <Feed>
        <div>
          <p className="text-feed">{`# ${hashtag}`}</p>

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
                    clickedHashtag={clickedHashtag}
                    setClickedHashtag={setClickedHashtag}
                  />
                );
              })}
        </div>
        <TrendingListStyles>
          {trendingList === undefined ? (
            <h2>Carregando... </h2>
          ) : (
            <TrendingList trendingList={trendingList} />
          )}{" "}
        </TrendingListStyles>
      </Feed>
    </MainContainer>
  );
}
