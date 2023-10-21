import React from 'react'
import * as CSS from './ConteudoStyle';
import Card from '../cardProjeto/Card'

// GIF'S
import calculadora from "../../assets/gifs/calculadora_flutter.gif";
import geradorQRCODE from "../../assets/gifs/gerador_qrcode.gif";
import tabuada from "../../assets/gifs/tabuada_flutter.gif";
import todoList from "../../assets/gifs/todo_list.gif";

const Conteudo = () => {
    const projetos = [
        {
            titulo: "Calculadora",
            descricao: "Tecnologias utilizadas:",
            categorias: ["FLUTTER"],
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
            categorias: ["FLUTTER"],
            imgSrc: tabuada,
            url: "https://github.com/Sergioadjr/tabuada-flutter.git"
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

            </CSS.ProjetoContainer>

        </CSS.AboutContainer >
    )
}

export default Conteudo
