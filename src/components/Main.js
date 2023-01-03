import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function Main() {
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

        const requisicao = axios.post("http://localhost:4000/posts", {
            url: url,
            content: content,
        })


        requisicao.then(resposta => {
            setLoading(false)
            const dados = resposta.data
            console.log(dados)

        });

        requisicao.catch(erro => {
            alert('Houve um erro ao publicar seu link')
            setLoading(false)
            console.log(erro.response.data);
        });


    }


    return (
        <MainContainer>
            <Feed>
                <p>timeline</p>
                <CreatePost>
                    <ProfilePicture>

                    </ProfilePicture>
                    <CreatePostContent>
                        <p>What are you going to share today?</p>
                        {
                            loading
                                ? 
                                (
                                    <Form onSubmit={publicar}>
                                        <Input type="text" placeholder="  http://..." value={url} onChange={e => setUrl(e.target.value)} disabled />
                                        <Input type="text" placeholder="  Awesome article about #article" value={content} onChange={e => setContent(e.target.value)} disabled />
                                        <PostButton disabled>
                                            Publishing...
                                        </PostButton>
                                    </Form>
                                )
                                : 
                                (
                                    <Form onSubmit={publicar}>
                                        <Input type="text" placeholder="  http://..." value={url} onChange={e => setUrl(e.target.value)} />
                                        <Input type="text" placeholder="  Awesome article about #article" value={content} onChange={e => setContent(e.target.value)} />
                                        <PostButton type="submit">
                                            Publish
                                        </PostButton>
                                    </Form>
                                )
                        }

                    </CreatePostContent>
                </CreatePost>
                <Post>d</Post>
            </Feed>
        </MainContainer>
    );
}

const MainContainer = styled.div`
width: 100vmax;
height: 100vmax;
background-color: #333333;
display: flex;
justify-content: center;
`
const Feed = styled.div`

width: 611px;
margin-top: 150px;
p{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;

}
`
const CreatePost = styled.div`
margin-top: 43px;
width: 100%;
height: 272px;
background-color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
display: flex;
p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
}
`

const Post = styled.div`
margin-top: 43px;
width: 100%;
height: 209px;
background-color: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
padding: 20px;
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
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
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
