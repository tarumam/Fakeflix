import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Page from '../../components/Page';
import categoryRepo from '../../repositories/category';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoryRepo.getAllWithVideos()
      .then((result) => setInitialData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page paddingAll={0}>
      {!initialData.length === 0 && (<div>Loading</div>)}

      {initialData.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription="O que é Front-end?"
              />
              <Carousel
                category={initialData[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            category={initialData[index]}
          />
        );
      })}
    </Page>
  );
}

export default Home;
