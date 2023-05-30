"use client";
import Link from "next/link";
import * as S from './Navbar.style'

export default function Navbar() {
    return (
      <S.Navbar>
        <S.Logo href={'/'}>
          Busca CEP
        </S.Logo>
        
        <S.Pages>
            <S.Page>
                <S.Lk href={'/'}>Home</S.Lk>
            </S.Page>
            <S.Page>
                <S.Lk href={'/busca'}>Consulta</S.Lk>
            </S.Page>

        </S.Pages>
      </S.Navbar>
    )
  }
  