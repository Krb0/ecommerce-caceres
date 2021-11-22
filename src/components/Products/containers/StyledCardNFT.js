import styled from "styled-components";

const StyledCardNFT = styled.div`
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(235, 232, 232, 0.8);
  border: rgba(235, 232, 232, 0.9) 1px solid;
  border-radius: 5px;
  flex: 1 1 5rem;
  margin: 0.1rem;
  align-items: center;
  max-width: 450px;
  img {
    width: 95%;
    max-width: 350px;
    height: 280px;
    object-fit: cover;
    object-position: center;
  }
  h1 {
    font-family: "Orbitron", sans-serif;
    font-size: 0.24rem;
    font-weight: 800;
    height: 50%;
    color: #525252;
    width: 80%;
    padding: 0 0.2rem;
  }
  .detail-container {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .price-container {
      display: flex;
      flex-direction: column;
      h3 {
        margin: 0.15rem 0 0 0;
        font-size: 0.25rem;
        color: #525252;
        text-align: right;
      }
      h4 {
        display: flex;
        font-size: 0.3rem;
        align-items: center;
        svg {
          margin-right: 0.1rem;
          color: purple;
        }
      }
    }
    .counter-div {
      display: flex;
      height: 0.5rem;

      p {
        font-size: 20px;
        margin: 0;
      }
    }

    .name-div {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledCardNFT;