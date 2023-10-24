import styled from 'styled-components';

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
justify-content: flex-start;

&:hover {
  background-color: transparent;
}
`;
