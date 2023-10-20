import styled from 'styled-components';

export const BioContainer = styled.div`
  flex: 1 1 20%;
  min-height: 100vh;
  background-color: var(--bio-bg-color);
  text-align: center;
  padding: 30px 12px;
  border-right: 5px solid var(--bio-border-color);
`;
export const BioHeading = styled.h2`
  margin-bottom: 25px;
`;

export const BioParagraph = styled.p`
  margin-bottom: 20px;
`;

export const WelcomeText = styled.div`
  font-weight: bold;
`;

export const Highlight = styled.span`
color: var(--main-color);
`;

export const BioImage = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin-bottom: 25px;
`;

export const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 25px;
  padding-bottom: 25px;
`;

export const SocialItem = styled.li`
  flex: 1 1 0;
  max-width: 60px;
`;

export const SocialLink = styled.a`
  color: var(--main-color);
  font-size: 30px;
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 0;
  color: var(--main-color);
  font-size: 15px;
  margin-right: 5px;
`;

export const EmailLink = styled.a`
  flex: 1 1 0;
  color: var(--main-text-color);
  text-decoration: none;
  max-width: 225px;
`;
