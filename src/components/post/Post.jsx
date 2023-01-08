import styled from "styled-components";
import LikePost from "../likePost/LikePost";
import {
  PostContainer,
  PostContent,
  ProfilePicture,
  UrlContainer,
  Text,
  ContainerLeft,
} from "./styles";

export default function Post({ post, clicked, setClicked, whoLiked }) {
  return (
    <>
      <PostContainer>
        <ContainerLeft>
          <ProfilePicture src={post.pictureUrl} ></ProfilePicture>
          <LikePost post={post} clicked={clicked} setClicked={setClicked} whoLiked={whoLiked} />
        </ContainerLeft>
        <PostContent>
          <Text>{post.username}</Text>
          <h1>{post.content} </h1>
          <UrlContainer>
            <h2>{post.url} </h2>
          </UrlContainer>
        </PostContent>
      </PostContainer>
    </>
  );
}
