import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: #333333;
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;
export const Feed = styled.div`
display: flex;
  width: 611px;
  margin-top: 150px;

  .text-feed {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }
`;

export const TextTimeline = styled.div`
  color: #ffffff;

`

export const TrendingListStyles = styled.div`
    min-width: 301px;
    width: 301px;
    height: 406px;
    border-radius: 16px;
    background-color: #171717;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 20px;
    margin-left: 20px;
    margin-top: 102px;

    h1 {
      margin-bottom: 20px;
    }

    hr {
      width: 100%;
      background-color: var(--text);
      margin-bottom: 20px;
    }
`