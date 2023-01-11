import axios from "axios";
import styled from "styled-components";
import LikePost from "../likePost/LikePost";
import ReactModal from "react-modal";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

import {
    PostContainer,
    PostContent,
    ProfilePicture,
    UrlContainer,
    Text,
    ContainerLeft,
    Icon,
    Input,
    Form,
    TextLine,
    IconContainer,
    LeftSide,
    RightSide
} from "./styles";
import { useState } from "react";
import api from "../../services/api";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFFFFF',
        height: '210px',
        width: '248px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
};


export default function Post({ i, post, clicked, setClicked, whoLiked, setNewPost, newPost, dadosUser, clickedHashtag, setClickedHashtag }) {

    let subtitle;
    let botoes;
    let botaoNao;
    let botaoSim;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [content, setContent] = useState('')
    let yourPost;
    const navigate = useNavigate();

    

    function clickHashtag(h) {
        const hashtag = h.replace("#", "")
        navigate(`/hashtag/${hashtag}`)
        setClickedHashtag(!clickedHashtag);
    }

    if (dadosUser.id === post.id) {
        yourPost = true
    } else yourPost = false

    const token = localStorage.getItem("token");


    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    function deletePost() {
        setLoading(true)
        const requisicao = api.delete(`/timeline/${post.postId}`, config);
        requisicao.then((resposta) => {
         
            setNewPost(!newPost)
            closeModal()
            setLoading(false)
        });
        requisicao.catch((resposta) => {
            closeModal()
            alert(
                "An error occured while trying to delete the post"
            );
        });
    }

    
    function confirmEdit() {
       
        const requisicao = api.post(`/timeline/${post.postId}`,{
            content: content,
        }, config);
        requisicao.then((resposta) => {
            console.log(resposta.data)
            setNewPost(!newPost)
            setEditing(false)
        });
        requisicao.catch((resposta) => {
            alert(
                "An error occured while trying to edit the post"
            );
        });
    }

    function openModal(event) {
        event.preventDefault();
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000000';
        subtitle.style.fontFamily = 'Roboto';
        subtitle.style.fontStyle = 'normal';
        subtitle.style.fontWeight = '700';
        subtitle.style.fontSize = '18px';
        subtitle.style.lineHeight = '21px';
        subtitle.style.textAlign = 'center';

        botoes.style.display = 'flex'
        botoes.style.justifyContent = 'space-around'

        botaoNao.style.width = '95px'
        botaoNao.style.height = '52px'
        botaoNao.style.backgroundColor = '#CECECE'
        botaoNao.style.borderRadius = '8px';
        botaoNao.style.color = '#FFFFFF'
        botaoNao.style.fontFamily = 'Roboto';
        botaoNao.style.fontStyle = 'normal';
        botaoNao.style.fontWeight = '700';
        botaoNao.style.fontSize = '14px';
        botaoNao.style.lineHeight = '16px';

        botaoSim.style.width = '95px'
        botaoSim.style.height = '52px'
        botaoSim.style.backgroundColor = '#151515'
        botaoSim.style.borderRadius = '8px';
        botaoSim.style.color = '#FFFFFF'
        botaoSim.style.fontFamily = 'Roboto';
        botaoSim.style.fontStyle = 'normal';
        botaoSim.style.fontWeight = '700';
        botaoSim.style.fontSize = '14px';
        botaoSim.style.lineHeight = '16px';

    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <PostContainer>
                <ContainerLeft>
                    <ProfilePicture src={post.pictureUrl} ></ProfilePicture>
                    <LikePost i={i} post={post} clicked={clicked} setClicked={setClicked} whoLiked={whoLiked} />
                </ContainerLeft>
                <PostContent>
                    <TextLine>
                    <Text onClick={()=>navigate(`/user?id=${post.userId}`)}>{post.username}</Text> 
                    {yourPost
                        ? (
                            <IconContainer>
                            <Icon onClick={openModal}><ion-icon name="trash"></ion-icon></Icon>
                            <Icon onClick={()=> setEditing(true)}><ion-icon name="create"></ion-icon></Icon>
                            </IconContainer>
                        ) : <></>
                    }</TextLine>
                    {editing
                        ?
                        
                        <Form onSubmit={confirmEdit}>
                            <Input  type="text" placeholder="" value={content} onChange={e => setContent(e.target.value)} />
                        </Form>
                        :
                        (<ReactTagify tagClicked={clickHashtag}><h1>{post.content}</h1></ReactTagify>)
                        
                    }
                    
                    <UrlContainer>
                        <LeftSide>
                        <h2>{post.title} </h2>
                        <h4>{post.description} </h4>
                        <h3>{post.url} </h3>
                        </LeftSide>
                        <RightSide src={post.image}>
                       
                        </RightSide>
                        
                    </UrlContainer>
                </PostContent>
            </PostContainer>
            {loading
                ?
                <ReactModal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Loading...</h2>

                </ReactModal>


                :
                <ReactModal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure you want to delete this post ?</h2>
                    <div ref={(_botoes) => (botoes = _botoes)}>
                        <button ref={(_botaoNao) => (botaoNao = _botaoNao)} onClick={closeModal}>Não</button>
                        <button ref={(_botaoSim) => (botaoSim = _botaoSim)} onClick={deletePost}>Sim</button>
                    </div>
                </ReactModal>
            }

        </>
    );
}
