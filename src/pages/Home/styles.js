import styled from "styled-components";
import lofiGirlNight from "../../assets/lofi_girl_night.jpg";

export const BackgroundHalf = styled.div`
  width: 100%;
  min-height: 50vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${lofiGirlNight});
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: -10;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 97vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputContent = styled.div`
  margin-top: 90px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  text-align: left;
  font-weight: bold;

  margin-bottom: 2px;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Line = styled.div`
  width: 30%;
  height: 2px;

  margin-bottom: 45px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TasksContent = styled.div`
  width: 600px;
  height: auto;

  border-radius: 6px;

  margin-bottom: 80px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  background-color: ${({ theme }) => theme.COLORS.VIOLENT_DARK};
`;

export const TaskUl = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  list-style: none;
`;

export const TaskLi = styled.div`
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 40px 0px 15px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  &:last-child {
    border-bottom: none;
  }

  ${({ completed, theme }) =>
    completed &&
    `
    text-decoration: line-through;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ButtonComplete = styled.button`
  border: none;
  background: none;

  margin-right: 10px;
  margin-bottom: 8px;

  cursor: pointer;

  > svg {
    position: relative;
    top: 6.5px;
  }
`;

export const AlertNoTask = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const TotalTaks = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: red;   */

  margin-bottom: 20px;


  font-size: 20px;
  color: ${({theme}) => theme.COLORS.WHITE};
  
`;

export const LabelTaks = styled.label`
    font-size: 14px;

    margin: 0px 10px;

    opacity: 50%;

`