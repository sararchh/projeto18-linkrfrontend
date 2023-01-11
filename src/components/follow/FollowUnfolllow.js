import { useState } from "react";
import { set } from "react-hook-form";
import styled from "styled-components";
import api from "../../services/api";

export default function FollowUnfollow({ followed, setFollowed, id }) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState("disabled");

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function followUser() {
    setLoading(true);
    const promise = api.post(`/follow/${id}`, { id: id }, config);

    promise.then((res) => {
      console.log("foiiii");
      setFollowed(true);
      setLoading(false);
    });

    promise.catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  function unfollowUser() {
    setLoading(true);

    const promise = api.post(`/unfollow/${id}`, { id: id }, config);

    promise.then((res) => {
      console.log("foiiii");
      setFollowed(false);
      setLoading(false);
    });

    promise.catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  return (
    <>
      {followed !== true ? (
        <FollowButton onClick={followUser}>Follow</FollowButton>
      ) : (
        <UnfollowButton onClick={unfollowUser}>Unfollow</UnfollowButton>
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
