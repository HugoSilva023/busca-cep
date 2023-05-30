"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  min-height: 100vh;

  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const ContainerText = styled.div`
  @media (max-width: 920px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #fff;
`;

export const Btn = styled(Link)`
  padding: 5px 15px;
  border: 34px 0;
  font-size: 30px;
  text-decoration: none;
  color: #fff;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`;

export const Img = styled(Image)`
  width: 800px;

  @media (max-width: 400px) {
    display: none;
    width: 400px;
  }
`;
