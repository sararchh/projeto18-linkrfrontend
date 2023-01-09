import axios from "axios";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { EachPost, FillRedHeart, OutLineHeart } from "./styles";
import { Tooltip, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function LikePost({ i, post, clicked, setClicked, whoLiked }) {
  const [tooltip, setTooltip] = useState([]);
  const [contentFill, setContentFill] = useState("");
  const [contentOut, setContentOut] = useState("");

  const usersLiked = whoLiked.filter((w) => post.postId === w.postId);

  console.log(usersLiked)

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    setTooltip(usersLiked);

    if (tooltip.length === 0) {
      setContentOut("Ninguém curtiu");
    }

    if (tooltip.length === 1) {
      setContentOut(`${usersLiked[0].username} curtiu`);
      setContentFill("Você curtiu");
    }

    if (tooltip.length === 2) {
      setContentFill(`Você e ${usersLiked[0].username} curtiram`);
      setContentOut(
        `${usersLiked[0].username} e ${usersLiked[1].username} curtiram`
      );
    }

    if (tooltip.length > 2) {
      setContentFill(
        `Você, ${usersLiked[0].username} e outras ${
          usersLiked.length - 2
        } pessoas curtiram`
      );
      setContentOut(
        `${usersLiked[0].username}, ${usersLiked[1].username} e outras ${
          usersLiked.length - 2
        } pessoas curtiram`
      );
    }
  }, [tooltip.length]);

  function like() {
    const promise = api.post(
      `/timeline/${post.postId}/like`,
      { id: post.id },
      config
    );

    promise.then((res) => {
      console.log("Foiii");
      clicked === true ? setClicked(false) : setClicked(true);
    });
    promise.catch((err) => console.log(err.responde.data));
  }

  function unlike() {
    const promise = api.post(
      `/timeline/${post.postId}/unlike`,
      { id: post.id },
      config
    );

    promise.then((res) => {
      clicked === true ? setClicked(false) : setClicked(true);
    });
    promise.catch((err) => console.log(err.response.data));
  }

  return (
    <EachPost>
      {post.isLiked ? (
        <FillRedHeart>
          <HiHeart id={`fillHeart-${i}`} onClick={unlike} />
          <Tooltip anchorId={`fillHeart-${i}`} content={contentFill} />
        </FillRedHeart>
      ) : (
        <OutLineHeart>
          <HiOutlineHeart id={`outLineHeart-${i}`} onClick={like} />
          <Tooltip anchorId={`outLineHeart-${i}`} content={contentOut} />
        </OutLineHeart>
      )}
    </EachPost>
  );
}
