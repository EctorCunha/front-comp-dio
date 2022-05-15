import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 30vh;
  margin-top: 2rem;
  gap: 10rem;

`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  width: 8vw;
  padding: 1rem;
  border: 1px solid;
  border-radius: 7px;
`;

export const Imagem = styled.img`
  border-radius: 50%;
  width: 15vw;
  margin-left: 2rem;
`;