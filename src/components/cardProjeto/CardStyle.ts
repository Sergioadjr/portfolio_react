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

export const BotaoProjeto = styled.a`
  font-weight: bold;
  font-size: 16px;
  color: var(--main-text-color);
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  text-decoration: none;
  transition: .5s;
  margin: 25px 0;
  padding: 5px 10px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  
  &:hover {
    background-color: transparent;
  }
`;