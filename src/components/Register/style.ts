
import styled from "styled-components";

export const RegisterSection = styled.section`
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

  .register__title {
  text-align:center;
    font-size: 3em;
    margin: 2em 1.5em;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2em;
      text-align: center;
    }
  }

   .register__form {
    width: 60%;
    margin: 0 auto;
    padding: 4em 3em;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 80%;
    }
}
  
`;

export const RegisterForm = styled.form`
     
      display: flex;
      flex-direction: column;
      width: 400px;
      gap: 0.7em;
      margin:0 auto;
      font-size: ${({ theme }) => theme.font.large};

      .currentState--select {
        max-width: 400px;
      }

      input,
      .currentState--select {
        border-left: 2px solid black;
        height: 2.5em;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      }

      .button__form {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
        width: 80%;
        height: 3em;
        padding: 1em 0.5em;
        margin: 0 auto;
        border-radius: 20px;
        cursor: pointer;
      }
    @media (prefers-color-scheme: dark) {

    .button__form {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`