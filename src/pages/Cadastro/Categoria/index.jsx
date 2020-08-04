import React from 'react';
import Page from '../../../components/Page';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
  return (
    <Page>
      <h1>Cadastro de categoria</h1>
      <Link to="/">
        Ir para home      </Link>
    </Page>
  )
}
export default CadastroCategoria;