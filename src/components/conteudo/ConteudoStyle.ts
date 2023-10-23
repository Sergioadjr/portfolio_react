import styled from 'styled-components';

export const AboutContainer = styled.div`
  flex: 1 1 80%;
  min-height: 100vh;
  background-color: var(--about-bg-color);
  padding: 50px;
`; 

export const Nome = styled.h1`
  font-size: 42px;
  margin-bottom: 15px;
`;

export const Titulo = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const Highlight = styled.span`
color: var(--main-color);
`;

export const Descricao = styled.p`
  max-width: 75%;
  margin-bottom: 10px;
`;

export const ProjetoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SkillsSectionTitle = styled.h2`
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 32px;
`;

export const SkillsBox = styled.div`
  flex: 1 1 33%;
  max-width: 33%;
  margin-bottom: 35px;
  
  i {
    font-size: 405px;
    margin-right: 10px;
  }
`;

export const SkillsTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: bold;
  padding-left: 10px;
  border-left: 5px solid var(--main-color);
`;
