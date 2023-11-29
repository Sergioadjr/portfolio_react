import styled from 'styled-components';

export const AboutContainer = styled.div`
  flex: 1 1 80%;
  min-height: 100vh;
  background-color: var(--about-bg-color);
  padding: 50px;

  @media(max-width: 820px) {
    text-align: center;
    padding: 30px;
    .description {
      margin: 10px auto;
      max-width: 100%;
      line-height: 26px;
    }
  }
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

export const Descricao = styled.p`
  max-width: 75%;
  margin-bottom: 10px;
  @media(max-width: 820px) {
      max-width: 100%;
      text-align: center;
  }
`;

export const Highlight = styled.span`
color: var(--main-color);
`;

export const ProjetoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media(max-width: 820px) {
    text-align: center;
    justify-content: center;
}
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
  font-size: 45px;
  margin-right: 10px;
}

@media(max-width: 450px) {
  flex: 1 1 100%;
  max-width: 100%;
  margin-bottom: 40px;
  text-align: left;
  i {
    font-size: 60px;
  }
}
`;

export const SkillsTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: bold;
  padding-left: 10px;
  border-left: 5px solid var(--main-color);
`;
