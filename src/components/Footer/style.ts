
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 75em;
  margin: auto;
    

    .footer-section {
      flex: 1;
      min-width: 250px;
      margin: 10px;

      h3 {
        margin-bottom: 15px;
        font-size: 18px;
        border-bottom: 2px solid #555;
        padding-bottom: 5px;
      }
    
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 10px;

  li {
    margin: 8px 0;
  }
`;

export const Information = styled.ul`
  line-height: 1.3em;

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
  }
`;
