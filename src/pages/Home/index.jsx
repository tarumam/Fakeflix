import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel'
import Page from '../../components/Page';
function Home() {
  return (

    <Page>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />
      <Carousel
        category={dadosIniciais.categorias[0]} />
      <Carousel
        category={dadosIniciais.categorias[1]} />
      <Carousel
        category={dadosIniciais.categorias[2]} />
      <Carousel
        category={dadosIniciais.categorias[3]} />
    </Page>
  );
}

export default Home;
