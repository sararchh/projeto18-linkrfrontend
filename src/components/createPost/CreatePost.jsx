import { useState } from "react";
import axios from "axios";
import { CreatePostContainer, CreatePostContent, Form, Input, InputText, PostButton, ProfilePicture, Text } from "./styles";
import api from "../../services/api";

export default function CreatePost({newPost, setNewPost, dadosUser}) {

    const [url, setUrl] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    

    function publicar(event) {
        event.preventDefault();
        if (loading === true) {
            return
        }
        if(!url){
            alert('Preencha o campo de url')
            return
        }
        setLoading(true)

        const token = localStorage.getItem("token");
    console.log(token)

    const config = {
        headers: {
             Authorization: `Bearer ${token}`,
         },
     };
        const requisicao = api.post("/timeline", {
            url: url,
            content: content,
        }, config)


        requisicao.then(resposta => {
            setLoading(false)
            const dados = resposta.data
            console.log({dados})
            setNewPost(!newPost)
            setContent('')
            setUrl('')
        });

        requisicao.catch(erro => {
            alert('Houve um erro ao publicar seu link')
            setLoading(false)
            console.log(erro.response.data);
        });


    }

    return (
        <CreatePostContainer>
            <ProfilePicture src={dadosUser.pictureUrl} ></ProfilePicture>
            <CreatePostContent>
                <Text>What are you going to share today?</Text>
                {
                    loading
                        ?
                        (
                            <Form onSubmit={publicar}>
                                <Input type="text" placeholder="  http://..." value={url} onChange={e => setUrl(e.target.value)} disabled />
                                <InputText type="text" placeholder="  Awesome article about #article" value={content} onChange={e => setContent(e.target.value)} disabled />
                                <div>
                                <PostButton disabled>
                                    Publishing...
                                </PostButton>
                                </div>
                            </Form>
                        )
                        :
                        (
                            <Form onSubmit={publicar}>
                                <Input type="text" placeholder="  http://..." value={url} onChange={e => setUrl(e.target.value)} />
                                <InputText type="text" placeholder="  Awesome article about #article" value={content} onChange={e => setContent(e.target.value)} />
                                <div>
                                <PostButton type="submit">
                                    Publish
                                </PostButton>
                                </div>
                            </Form>
                        )
                }

            </CreatePostContent>
        </CreatePostContainer>
    );
}


