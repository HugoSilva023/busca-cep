"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerInput = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

    input {
        background-color: transparent;
        border: 0;
        font-size: 20px;
        color: #fff;
        outline: none;
        margin-right: 8px;
    }

    input::placeholder {
        color: #f1f1f1
    }
`

export const Title = styled.h1`
    font-size: 85px;
    color: #fff;

    @media (max-witdh: 620px) {
        font-size: 60px;
    }
`

export const ButtonSearch = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;

    &hover {
        transform: scale(1.2);
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    width: 500px;
    border-radius: 8px;

    @media (max-witdh: 620px) {
        width: 80%;
        min-height: 250px;
    }

    h2 {
        margin: 16px 0;
        font-size: 39px;

        @media (max-witdh: 620px) {
            font-size: 28px;
        }
    }

    span {
        margin-bottom: 16px;
        font-weight: bold;
    }
`