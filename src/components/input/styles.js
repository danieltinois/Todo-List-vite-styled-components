import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 60px;

  display: flex;
  align-items: center;

  padding: 0 15px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;

  background: ${({ theme }) => theme.COLORS.VIOLENT_DARK};

  > input {
    width: 90%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 17px;

    border: none;
    background: none;

    margin-left: 10px;

    &:focus {
      box-shadow: none;
      outline: none;
    }

    &::placeholder {
      font-style: italic;
    }
  }
`;
