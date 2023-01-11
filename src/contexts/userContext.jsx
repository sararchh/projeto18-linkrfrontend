import React, { useState } from "react";
import { createContext } from "react";

import { toast } from 'react-toastify';
import api from "../services/api";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [trendingList, setTrendindList] = useState([]);
  const [posts, setPosts] = useState([]);

  const [whoLiked, setWhoLiked] = useState([]);
  const [dadosUser, setDadosUser] = useState('')
  

  const handleDataUsersPosts = () => {
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
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  }

  return (
    <UserContext.Provider
      value={{
        trendingList,
        setTrendindList,
        handleDataUsersPosts
      }}>
      {children}
    </UserContext.Provider>
  );
}