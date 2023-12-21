import React from 'react'
import * as CSS from './ConteudoStyle';
import Card from '../cardProjeto/Card'

// GIF'S
import calculadora from "../../assets/gifs/calculadora_flutter.gif";
import geradorQRCODE from "../../assets/gifs/gerador_qrcode.gif";
import consultaCEP from "../../assets/gifs/consultaCEP.gif";
import tabuada from "../../assets/gifs/tabuada_flutter.gif";
import todoList from "../../assets/gifs/todo_list.gif";
import quiz from "../../assets/gifs/quiz.gif";
import portfolio from "../../assets/gifs/portfolio.gif";
import snake from "../../assets/gifs/snake.gif";
import Skills from '../skills/Skills';

const Conteudo = () => {
    const projetos = [
        {
            titulo: "Snake-Game",
            descricao: "Tecnologias utilizadas:",
            categorias: ["JAVA"],
            imgSrc: snake,
            url: "https://github.com/Sergioadjr/Snake-Game.git"
        },
        {
            titulo: "Calculadora - modelo IOS",
            descricao: "Tecnologias utilizadas:",
            categorias: ["FLUTTER", "DART"],
            imgSrc: calculadora,
            url: "https://github.com/Sergioadjr/calculadora-flutter"
        },
        {
            titulo: "Gerador de QRCode para WhatsApp",
            descricao: "Tecnologias utilizadas:",
            categorias: ["HTML", "CSS", "JS"],
            imgSrc: geradorQRCODE,
            url: "https://github.com/Sergioadjr/gerador_qrcode"
        },
        {
            titulo: "To do list",
            descricao: "Tecnologias utilizadas:",
            categorias: ["REACT"],
            imgSrc: todoList,
            url: "https://github.com/Sergioadjr/Digix-studies"
        },
        {
            titulo: "Gerador de Tabuada",
            descricao: "Tecnologias utilizadas:",
            categorias: ["FLUTTER", "DART"],
            imgSrc: tabuada,
            url: "https://github.com/Sergioadjr/tabuada-flutter.git"
        },
        {
            titulo: "Consulta de CEP - consumindo API",
            descricao: "Tecnologias utilizadas:",
            categorias: ["JAVA"],
            imgSrc: consultaCEP,
            url: "https://github.com/Sergioadjr/consultaCEP.git"
        },
        {
            titulo: "Portfólio em react - responsivo",
            descricao: "Tecnologias utilizadas:",
            categorias: ["REACT"],
            imgSrc: portfolio,
            url: "https://github.com/Sergioadjr/portfolio_react"
        },
        {
            titulo: "Quiz - Show do Serjão ",
            descricao: "Tecnologias utilizadas:",
            categorias: ["FLUTTER", "DART"],
            imgSrc: quiz,
            url: "https://github.com/Sergioadjr/show_milhao.git"
        },
    ];

    return (
        <CSS.AboutContainer>
            <CSS.Nome>Sérgio Augusto David Júnior</CSS.Nome>
            <CSS.Titulo><CSS.Highlight>Desenvolvedor FullStack</CSS.Highlight></CSS.Titulo>
            <CSS.Descricao>Sou um desenvolvedor que está pronto para enfrentar desafios e criar soluções eficazes. </CSS.Descricao>
            <CSS.Descricao>
                Atuo tanto no <CSS.Highlight>front </CSS.Highlight>como no <CSS.Highlight>back-end</CSS.Highlight>, e amo tecnologia, estudo todos os dias para me tornar cada vez
                melhor e escrever código de qualidade.</CSS.Descricao>
            <CSS.Descricao>Estou ansioso para colaborar no seu próximo<CSS.Highlight> projeto</CSS.Highlight>!</CSS.Descricao>

            <CSS.SkillsSectionTitle>
            </CSS.SkillsSectionTitle>

            <CSS.SkillsTitle>
                Meus Projetos:
            </CSS.SkillsTitle>

            <CSS.ProjetoContainer>
                {projetos.map((projeto, index) => (
                    <div key={index}>
                        <Card
                            titulo={projeto.titulo}
                            descricao={projeto.descricao}
                            categorias={projeto.categorias}
                            imgSrc={projeto.imgSrc}
                            url={projeto.url}
                        />
                    </div>
                ))}
            </CSS.ProjetoContainer>

            <CSS.SkillsSectionTitle>
            </CSS.SkillsSectionTitle>

            <CSS.SkillsTitle>
                Minhas Skills:
            </CSS.SkillsTitle>
            <CSS.ProjetoContainer>
                <CSS.SkillsBox>
                    <Skills title="Front-end" categories={['HTML', 'CSS', 'JS']} />
                </CSS.SkillsBox>
                <CSS.SkillsBox>
                    <Skills title="Back-end" categories={['JAVA', 'NODE', 'DART']} />
                </CSS.SkillsBox>
                <CSS.SkillsBox>
                    <Skills title="Databases" categories={['MYSQL', 'POSTGRES']} />
                </CSS.SkillsBox>
                <CSS.SkillsBox>
                    <Skills title="Front-end Frameworks" categories={['REACT', 'FLUTTER']} />
                </CSS.SkillsBox>
                <CSS.SkillsBox>
                    <Skills title="Back-end Frameworks" categories={['SPRING', 'DJANGO',]} />
                </CSS.SkillsBox>
                <CSS.SkillsBox>
                    <Skills title="Tools" categories={['FIGMA', 'GITHUB', 'VSCODE']} />
                </CSS.SkillsBox>
            </CSS.ProjetoContainer>

        </CSS.AboutContainer >
    )
}

export default Conteudo
