import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Header from '../../components/header/Header';
import Post from '../../components/post/Post';
import TrendingList from '../../components/trendingList/TrendingList';
import { UserContext } from '../../contexts/userContext';
import api from '../../services/api';

import { Feed, MainContainer, TrendingListStyles } from "./styles";

function UserById() {
  const navigate = useNavigate();
  const query = useLocation();
  const [searchParams] = useSearchParams(query.search);

  const [idOperation] = useState(searchParams.get('id')); // Id do usuário
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [whoLiked, setWhoLiked] = useState(0);
  const [dadosUser, setDadosUser] = useState('');

  const { setTrendindList, trendingList, handleDataUsersPosts } = useContext(UserContext);

  useEffect(() => {
    handleDataUsersPosts();
    handleSearchedUserPosts();
  }, []);

  const handleSearchedUserPosts = async () => {
    try {
      const { data } = await api.get(`/users/post/${idOperation}`);
      setPosts(data?.userPosts);
      setDadosUser(data?.username);
      setWhoLiked(data?.likes) 
    } catch (error) {
      console.log("error sara", error);
      toast.error("Erro ao buscar dados")
    }
  }

  console.log({posts});

  return (
    <MainContainer>
      <Header />
      <Feed>

        <div>

          <p className="text-feed">timeline</p>


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

          <TrendingListStyles>
            <TrendingList trendingList={trendingList} />
          </TrendingListStyles>

        </div>
      </Feed>
    </MainContainer>
  );
}

export default UserById;