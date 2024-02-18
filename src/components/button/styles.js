import styled from "styled-components";

export const Container = styled.div`
  > button {
    border: none;
    background: none;

    cursor: pointer;

    transition: all ease 0.3s;

    margin-top: 5px;

    &:hover {
      transform: scale(1.12);
    }
  }
`;
