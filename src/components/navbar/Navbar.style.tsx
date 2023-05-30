"use client";
import Link from "next/link";
import styled from "styled-components";

export const Navbar = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  margin: 0;
  border: 0;
`;

export const Logo = styled(Link)`
  display: block;
  padding: 1em 2em;
  line-height: 2em;
  text-decoration: none;
  color: #fff;
`;

export const Pages = styled.ul`
  list-style: none;
`;

export const Page = styled.li`
  float: left;
`;

export const Lk = styled(Link)`
  display: block;
  padding: 0 1em;
  line-height: 2em;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #085662;
    background: #44cade;
  }
`