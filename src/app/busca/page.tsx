"use client";
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from '@/service/api';
import * as S from './page.style';

export default function Home() {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({});

    const handleSearch = async () => {
        if (input === '') {
            alert("Prencha algum cep!")
            return
        }

        console.log(cep)
        console.log(input)

        try {
            const res = await api.get(`${input}/json`)
            setCep(res.data)
            setInput('')
            
        } catch (error) {
            if (error) {
                alert('Ops, confira o Cep e tente novamente!')
                setInput('')
            }
        }
    }
  return (
    <S.Container>
        <S.Title>Busca CEP</S.Title>

        <S.ContainerInput>
            <input
             type="text"
             placeholder="Digite seu cep"
             value={input}
             onChange={(e) => setInput(e.target.value)}
            />

            <S.ButtonSearch onClick={handleSearch}>
                <FiSearch
                 size={25}
                 color="FFF"
                />
            </S.ButtonSearch>
        </S.ContainerInput>

        {Object.keys(cep).length > 1 &&
            <S.Main>
                <h2>CEP {cep.cep}</h2>
                <span>Rua {cep.logradouro}</span>
                <span>Bairro {cep.bairro}</span>
                <span>{cep.localidade} - {cep.uf}</span>
            </S.Main>
        }

    </S.Container>
  )
}