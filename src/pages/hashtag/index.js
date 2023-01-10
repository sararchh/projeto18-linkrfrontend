import React from "react";
import { useParams } from "react-router-dom";
import MainHashtag from "../../components/hashtag/MainHashtag";
import Header from "../../components/header/Header";

function Hashtag() {
  const { hashtag } = useParams();

  return (
    <>
      <Header />
      <MainHashtag hashtag={hashtag} />
    </>
  );
}

export default Hashtag;
