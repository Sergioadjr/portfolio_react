import React from 'react'
import * as CSS from './PerfilStyle';
import fotoPerfil from "../../assets/img/profile.jpg"
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import Email from '@mui/icons-material/Email';

const Perfil = () => {
    return (
        <CSS.BioContainer>
            <CSS.BioHeading>Sérgio A. David Jr</CSS.BioHeading>
            <CSS.BioImage src={fotoPerfil} alt='foto do perfil'></CSS.BioImage>

            <CSS.BioParagraph>
                Olá, meu nome é Sérgio e sou <CSS.Highlight>
                    Desenvolvedor FullStack</CSS.Highlight>
            </CSS.BioParagraph>
            <CSS.WelcomeText>
                Seja bem-vindo!
            </CSS.WelcomeText>
            <CSS.SocialContainer>
                <CSS.SocialItem><CSS.SocialLink href='https://www.linkedin.com/in/sergioadjr/'><LinkedIn /></CSS.SocialLink></CSS.SocialItem>
                <CSS.SocialItem><CSS.SocialLink href='https://www.instagram.com/sergio_adjr/'><Instagram /></CSS.SocialLink></CSS.SocialItem>
                <CSS.SocialItem><CSS.SocialLink href='https://github.com/Sergioadjr'><GitHub /></CSS.SocialLink></CSS.SocialItem>
                <CSS.SocialItem><CSS.SocialLink href='https://twitter.com/sergio_adjr'><Twitter /></CSS.SocialLink></CSS.SocialItem>
            </CSS.SocialContainer>
            <CSS.EmailContainer >
                <Email href="mailto:sergio.adjr@gmail.com" />
                <CSS.EmailLink>
                    sergio.adjr@gmail.com
                </CSS.EmailLink>
            </CSS.EmailContainer>
        </CSS.BioContainer>
    )
}

export default Perfil
