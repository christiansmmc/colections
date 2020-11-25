import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .images {
    display: flex;
    justify-content: space-around;
    height: auto;
    margin: 2rem;
  }

  .img1 {
    width: 45%;
  }

  .img2 {
    width: 45%;
  }

  .phrase {
    margin: 1rem;
    text-align: center;
  }

  @media (min-width: 1440px) {
    .img1 {
      width: 25%;
      margin-right: 3rem;
    }
    .img2 {
      width: 25%;
      margin-left: 3rem;
    }

    .images {
      justify-content: center;
    }

    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;
