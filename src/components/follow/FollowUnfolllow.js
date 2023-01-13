import { useState } from "react";
import { set } from "react-hook-form";
import styled from "styled-components";
import api from "../../services/api";

export default function FollowUnfollow({ followed, setFollowed, id }) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function followUser() {
    setLoading(true);
    setDisabled(true)
    const promise = api.post(`/follow/${id}`, { id: id }, config);

    promise.then((res) => {
      console.log("foiiii");
      setFollowed(true);
      setLoading(false);
      setDisabled(false)
    });

    promise.catch((err) => {
      console.log(err);
      setLoading(false);
      setDisabled(false)
    });
  }

  function unfollowUser() {
    setLoading(true);
    setDisabled(true)

    const promise = api.post(`/unfollow/${id}`, { id: id }, config);

    promise.then((res) => {
      console.log("foiiii");
      setFollowed(false);
      setLoading(false);
      setDisabled(false)
    });

    promise.catch((err) => {
      console.log(err);
      alert("An error occured while trying to follow the user")
      setLoading(false);
      setDisabled(false)
    });
  }

  return (
    <>
      {followed !== true ? (
        <FollowButton onClick={followUser} disabled= {disabled} >Follow</FollowButton>
      ) : (
        <UnfollowButton onClick={unfollowUser} disabled= {disabled} >Unfollow</UnfollowButton>
      )}
    </>
  );
}

const FollowButton = styled.button`
  width: 112px;
  height: 31px;
  background-color: #1877f2;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
`;

const UnfollowButton = styled.button`
  width: 112px;
  height: 31px;
  background-color: #ffffff;
  border-radius: 5px;
  color: #1877f2;
  font-size: 14px;
`;
