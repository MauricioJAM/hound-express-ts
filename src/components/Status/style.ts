// src/components/Status.styles.ts
import styled from "styled-components";

export const StatusSection = styled.section`
  margin: 0 9em;
  box-sizing: border-box;
  min-height: auto;
  padding: 1em 2em;
  background: rgb(248, 248, 248);
  position: relative;
  z-index: -5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
  }

  .status__title {
  text-align:center;
    font-size: 3em;
    margin: 2em 1.5em;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2em;
      text-align: center;
    }
  }
`;

export const StatusStatistics = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 5px;

  .status__statistics--item {
    display:flex;
    align-items:center;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    padding: 1em 2em;
    box-sizing: border-box;
    gap: 7px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    .status__logo {

       i {

       img{
       
       width: 1.5em;
      height: 1.5em;
      background-size: cover;
       }
      
    }
    }

    

    > h5 {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
