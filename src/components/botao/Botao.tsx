import React from 'react';

interface Props {
  url: string;
}

const Botao: React.FC<Props> = ({ url }) => {
  return (
    <a href={url} id="btn-projects">
      
      <span>Ver projeto</span>
    </a>
  );
}

export default Botao;