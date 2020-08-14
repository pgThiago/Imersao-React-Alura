import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import url_top from '../../config';

function Home() {

  const [ dadosIniciais, setDadosIniciais ] = useState([]);

  useEffect(() => {
    const { URL_TOP } = url_top;
    async function loadData(){
      const URL = `${URL_TOP}/categorias?_embed=videos`;
      const response = await (await fetch(URL)).json();
      setDadosIniciais(response);
    }
    
    loadData();

  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0){
          return (
            <div key={categoria.id}>
              <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription="Você realmente sabe no que os fascistas acreditavam?"
              />    

              <Carousel 
              ignoreFirstVideo
              category={dadosIniciais[0]}
              />         
            </div>
          )
        }
        return (
          <Carousel 
          key={categoria.id}
          category={categoria}
          />
        )
      })}  

    </PageDefault>
  );
}

export default Home;