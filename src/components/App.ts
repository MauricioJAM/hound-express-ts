import styled from "styled-components";

export const AppContainer = styled.div`
    background-color: $colorLight;
    line-height: 1;
    font-family: $font-main;
    color: $colorDark;

    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
    }

`

export const MainContainer = styled.main`
    box-sizing: border-box;
    position: relative;
    top: -40px;
    z-index: 5;
    color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.font.main};
    background-color: ${({ theme }) => theme.colors.light};


     @media (prefers-color-scheme: dark) {
      box-shadow: 10px 20px 50px ${({ theme }) => theme.colors.light};
    }
     
`

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100dvh;
    background: url("https://twooceanspty.com/wp-content/uploads/2020/03/bigstock-Truck-Transport-Container-On-T-trans-sld-3-scaled.jpg")
      no-repeat top;
    background-size: cover;
    box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.dark};
`