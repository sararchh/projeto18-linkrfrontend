import styled from "styled-components";

export const LogoContainer = styled.div`
    height: 100vh;
    width: 60vw;
    display: flex;
    background-color: #000000;
`

export const Content = styled.div`
    margin: 15% 0 0 15%;
    h1 {
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    h2 {
        display: block;
        width: 460px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        color: #FFFFFF;
    }
`

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const RegisterContainer = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: #2e2e2e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin-top: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        background-color: #FFFFFF;
        width: 430px;
        height: 65px;
        margin-bottom: 13px;
        border-radius: 6px;
        padding-left: 17px;
        box-sizing: border-box;
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #9F9F9F;
    }

    button {
        background-color: #1877F2;
        width: 429px;
        height: 65px;
        border-radius: 6px;
        box-sizing: border-box;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #FFFFFF;
    }
`