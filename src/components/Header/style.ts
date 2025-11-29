import styled from "styled-components";
import logoLight from "../../assets/img/logo-light.png"
import logoDark from "../../assets/img/logo-dark.png"
export const HeaderContainer = styled.header`
  box-sizing: border-box;
  padding: 1em 2em 0 2em;
`;

export const LogoSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .logo__nav {
    background: url(${logoLight});
    background-size: cover;
    background-repeat: no-repeat; 
    width: 14em;
    height: 4em;
  }

 
  .countries {
    margin-left: 2em;
    text-align: end;

    .spanCountry {
      font-size: ${({ theme }) => theme.font.medium};
      color: ${({ theme }) => theme.colors.dark};
      margin-left: 8em;
    }

    .phone {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.font.medium};
    }

    .language {
      margin-left: 8em;
      border: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 0.6em;
      margin: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    .logo__nav {
      background-image: url("${logoDark}");
    }

    .countries{
      .spanCountry {
      color: ${({ theme }) => theme.colors.light};
    }

    .language {
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
    }
    }
    
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 4em;
  background-color: ${({ theme }) => theme.colors.dark};
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  z-index: 10;

  .header__menu,
  .header__user {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.miniLaptop}) {
      display: inline;
      width: 2em;
      padding: 1em;
    }
  }

  .header__nav--izq {
    display: flex;
    height: 100%;

    .nav__item {
      width: 7em;
      height: 100%;
      cursor: pointer;
      padding-top:1em;

      &:hover {
        background-color: rgba(106, 198, 222, 0.1);
      }

      a {
        color: #fff;
        font-size: 1.2em;
        text-decoration:none;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.miniLaptop}) {
      display: none;
    }
  }

  .header__nav--der {
    font-size: ${({ theme }) => theme.font.large};
    display:flex;
    align-items:center;  
    li {
      &:last-child {
        display: block;
        padding: 1em 1.4em;

        @media (max-width: ${({ theme }) => theme.breakpoints.miniLaptop}) {
          display: none;
        }
      }

      a {
        color: ${({ theme }) => theme.colors.primary};
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
        font-size: ${({ theme }) => theme.font.medium};
      }
    }
  }
`;
