"use client";
import iconLaptop from '../../public/icon-laptop.png'
import useWindowDimensions from 'use-window-dimensions';
import * as S from './page.style'

export default function Home() {
  const { width, height } = useWindowDimensions();

  console.log(width)
  console.log(height)

  return (
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Bem vindo ao Busca CEP
        </S.Title>
        
        <S.Btn href={'/busca'} >Experimentar</S.Btn>
      </S.ContainerText>
      
      <S.Img
        src={iconLaptop}
        alt='Imagem de um laptop com a tela de um mapa, e algumas caixas de encomenda'
        width={ width > 920 ? width/2 : 200 }
      />
    </S.Main>
  )
}
