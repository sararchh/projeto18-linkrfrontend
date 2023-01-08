import axios from "axios";
import styled from "styled-components";
import LikePost from "../likePost/LikePost";
import ReactModal from "react-modal";

import {
    PostContainer,
    PostContent,
    ProfilePicture,
    UrlContainer,
    Text,
    ContainerLeft,
    Icon,
    Input,
    Form
} from "./styles";
import { useState } from "react";

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

export default function Post({ post, clicked, setClicked, whoLiked, setNewPost, newPost, dadosUser }) {
    let subtitle;
    let botoes;
    let botaoNao;
    let botaoSim;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [content, setContent] = useState('')
    let yourPost;

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
        const requisicao = axios.delete(`http://localhost:4000/timeline/${post.postId}`, config);
        requisicao.then((resposta) => {
            console.log(resposta.data)
            setNewPost(!newPost)
            closeModal()
            setLoading(false)
        });
        requisicao.catch((resposta) => {
            alert(
                "An error occured while trying to delete the post"
            );
        });
    }

    function editPost() {
        setEditing(true)
    }
    function confirmEdit() {
       
        const requisicao = axios.post(`http://localhost:4000/timeline/${post.postId}`,{
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
                    <LikePost post={post} clicked={clicked} setClicked={setClicked} whoLiked={whoLiked} />
                </ContainerLeft>
                <PostContent>
                    <Text>{post.username}</Text>
                    {yourPost
                        ? (<>
                            <Icon onClick={openModal}>lixeira</Icon>
                            <Icon onClick={editPost}>lapis</Icon>
                        </>) : <></>
                    }
                    {editing
                        ?
                        <Form onSubmit={confirmEdit}>
                            <Input type="text" placeholder="  http://..." value={content} onChange={e => setContent(e.target.value)} />
                        </Form>
                        :
                        <h1>{post.content} </h1>
                    }
                    <UrlContainer>
                        <h2>{post.url} </h2>
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
