
import styled from "styled-components";

export const ListSection = styled.section`
  margin: 0 9em;
  box-sizing: border-box;
  padding: 1em 2em;
  background: rgb(248, 248, 248);
  min-height: 30em;
  position: relative;
  z-index: -5;
  

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
  }

  .guides__title {
  text-align:center;
    font-size: 3em;
    margin: 2em 1.5em;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2em;
      text-align: center;
    }
  }

  #guides__body {
    width: 100%;
    border-collapse: collapse;
    font-size: ${({ theme }) => theme.font.medium};
    text-align: center;
    table-layout: fixed;

    thead,
    tbody {
      tr {
        max-height: 15px;
        width: 100%;

        &:hover {
          background-color: rgba(0, 123, 255, 0.1);
        }

        > th,
        > td {
          padding: 3px;
          border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
          overflow-x: hidden;

          @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
            font-size: 0.7em;
          }
        }

         @media (prefers-color-scheme: dark) {

          td {
            border: 1px solid ${({ theme }) => theme.colors.light};
            }
        }
      }
    }
  }
`;

export const TableButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-size: cover;
  border: none;
  cursor: pointer;
  i{
    img{
    width:2em;
    height:2em;
    }
  }
`;
