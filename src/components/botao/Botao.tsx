import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';  
import * as CSS from './BotaoStyle';

interface Props {
  url: string;
}

const Botao: React.FC<Props> = ({ url }) => {
  const handleClick = () => {
    window.open(url, '_blank'); 
  };

  return (
    <CSS.BotaoProjeto onClick={handleClick}>
      <VscLinkExternal size={16} style={{ marginRight: '5px'}} /> Ver projeto
    </CSS.BotaoProjeto>
  );
}

export default Botao;

