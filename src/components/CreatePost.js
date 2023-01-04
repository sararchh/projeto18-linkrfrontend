import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function CreatePost({newPost, setNewPost}) {

    const [url, setUrl] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    /*const config = {
        headers: {
             Authorization: `Bearer ${tokenOnLocalStorage}`,
         },
     };*/
    //adicionar config depois

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

        const requisicao = axios.post("http://localhost:4000/timeline", {
            url: url,
            content: content,
        })


        requisicao.then(resposta => {
            setLoading(false)
            const dados = resposta.data
            console.log(dados)
            setNewPost(!newPost)
        });

        requisicao.catch(erro => {
            alert('Houve um erro ao publicar seu link')
            setLoading(false)
            console.log(erro.response.data);
        });


    }

    return (
        <CreatePostContainer>
            <ProfilePicture></ProfilePicture>
            <CreatePostContent>
                <p>What are you going to share today?</p>
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

const CreatePostContainer = styled.div`
margin-top: 43px;
width: 100%;
height: 209px;
background-color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
display: flex;

`
const PostButton = styled.button`
width: 112px;
height: 31px;
background: #1877F2;
border-radius: 5px;
`
const ProfilePicture = styled.div`
background: red;
border-radius: 26.5px;
width: 53px;
height: 53px;
`
const CreatePostContent = styled.div`
margin-top: 9px;
margin-left: 18px;
p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
div{
    display: flex;
    justify-content: end;
    width: 100%;
}
`
const Input = styled.input`
box-sizing: border-box;
width: 503px;
height: 30px;
margin-bottom: 5px;
background: #EFEFEF;
border-radius: 5px;
::placeholder{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
}
`
const InputText = styled.input`
box-sizing: border-box;
width: 503px;
height: 66px;
margin-bottom: 5px;
background: #EFEFEF;
border-radius: 5px;
::placeholder{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
}
`
