import React from 'react';
import { FiLink } from 'react-icons/fi';  
import * as CSS from './BotaoStyle';

interface Props {
  url: string;
}

const Botao: React.FC<Props> = ({ url }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Abrir a URL em uma nova guia
  };

  return (
    <CSS.BotaoProjeto onClick={handleClick}>
      <FiLink size={16} style={{ marginRight: '5px' }} /> Ver projeto
    </CSS.BotaoProjeto>
  );
}

export default Botao;
