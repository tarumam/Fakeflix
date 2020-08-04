import React from 'react';
import Page from '../../../components/Page';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
  return (
    <Page>
      <h1>Cadastro de vídeo</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </Page>
  )
}
export default CadastroVideo;