import styled from "styled-components"

export function Logo() {
    return (
        <LogoContainer>
            <Content>
                <h1>linkr</h1>
                <h2>save, share and discover
                    the best links on the web</h2>
            </Content>
        </LogoContainer>
    )
};

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