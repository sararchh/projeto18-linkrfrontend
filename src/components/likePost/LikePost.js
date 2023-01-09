import axios from "axios";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { EachPost, FillRedHeart, OutLineHeart } from "./styles";
import { Tooltip, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useEffect, useState } from "react";

export default function LikePost({ i, post, clicked, setClicked, whoLiked }) {
  const [tooltip, setTooltip] = useState([]);
  const [contentFill, setContentFill] = useState("");
  const [contentOut, setContentOut] = useState("");

  const usersLiked = whoLiked.filter((w) => post.id === w.postId);

  //console.log(usersLiked);

  useEffect(() => {
    setTooltip(usersLiked);

    if (usersLiked.length === 0) {
      setContentOut("Ninguém curtiu");
    }

    if (usersLiked.length === 1) {
      setContentOut(`${usersLiked[0].username} curtiu`);
      setContentFill("Você curtiu");
    }

    if (usersLiked.length === 2) {
      setContentFill(`Você e ${usersLiked[0].username} curtiram`);
      setContentOut(
        `${usersLiked[0].username} e ${usersLiked[1].username} curtiram`
      );
    }

    if (usersLiked.length > 2) {
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
  }, []);

  function like() {
    const promise = axios.post(
      `http://localhost:4000/timeline/${post.id}/like`
    );

    promise.then((res) => {
      clicked === true ? setClicked(false) : setClicked(true);
    });
    promise.catch((err) => console.log(err.responde.data));
  }

  function unlike() {
    const promise = axios.post(
      `http://localhost:4000/timeline/${post.id}/unlike`
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
