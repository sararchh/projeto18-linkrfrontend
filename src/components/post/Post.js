import styled from "styled-components";
import { PostContainer, PostContent, ProfilePicture, UrlContainer } from "./styles";

export default function Post({ post }) {
    return (
        <>
            <PostContainer>
                <ProfilePicture>

                </ProfilePicture>
                <PostContent>
                    <p>Daniel </p>
                    <h1>{post.content} </h1>
                    <UrlContainer>
                        <h2>{post.url} </h2>
                    </UrlContainer>

                </PostContent>
            </PostContainer>
        </>
    );
}

