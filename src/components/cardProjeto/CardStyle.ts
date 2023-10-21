import styled from 'styled-components';

export const CardProjeto = styled.div`
  height: auto;
  width: calc(32.5% - px);
  margin-bottom: 75px;
  box-sizing: border-box;
  
  p {
    margin-bottom: 2px;
  }
  
  img {
    width: 30vh;
    height: 20vh;
  }

  a{
    width: 5px;
    height: 5px;
  }
  
  h3 {
    padding: 1px;
  }

  .categoria-icon {
    width: 25px; 
    height: 25px;
    margin-top: 20px
  }

  .alinhamento{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
  }

`;