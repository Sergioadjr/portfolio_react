import React from 'react'
import * as CSS from './CardStyle';
// ICON'S
import html from "../../assets/icons/html-5.png";
import css from "../../assets/icons/css-3.png";
import js from "../../assets/icons/script-java.png";
import java from "../../assets/icons/java.png";
import node from "../../assets/icons/node-js.png";
import mysql from "../../assets/icons/mysql.png";
import postgres from "../../assets/icons/postgre.png";
import react from "../../assets/icons/react.png";
import flutter from "../../assets/icons/flutter.png";
import django from "../../assets/icons/django.png";
import spring from "../../assets/icons/springboot.png";
import github from "../../assets/icons/github.png";
import vscode from "../../assets/icons/vscode.png";
import figma from "../../assets/icons/figma.png";
import Botao from '../botao/Botao';

interface Props {
  titulo: string;
  descricao: string;
  categorias: string[];
  imgSrc: string;
  url: string;
}

interface CategoryIcons {
  [key: string]: string;
}

const categoryIcons: CategoryIcons = {
  // Front
  HTML: html,
  CSS: css,
  JS: js,
  // Back
  JAVA: java,
  NODE: node,
  // DB
  MYSQL: mysql,
  POSTGRES: postgres,
  // Frameworks
  REACT: react,
  FLUTTER: flutter,
  DJANGO: django,
  SPRING: spring,
  // TOOLS
  GITHUB: github,
  VSCODE: vscode,
  FIGMA: figma,
}

function Card({ titulo, descricao, categorias, imgSrc, url }: Props) {
  return (
    <CSS.CardProjeto>
      <h3>{titulo}</h3>
      <img src={imgSrc} alt="Projeto" />
      
      <div className="alinhamento">
        <h3>{descricao}</h3>
        {categorias.map((categoria, index) => (
          <img key={index} src={categoryIcons[categoria]} alt={'icon'} className="categoria-icon" />
        ))}

      </div>

      {/* <Botao url={url} /> */}

    </CSS.CardProjeto>
  )
}


export default Card
