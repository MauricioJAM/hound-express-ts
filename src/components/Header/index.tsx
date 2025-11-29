import { HeaderContainer, LogoSection, Navigation } from "./style";
import menu from '../../assets/img/menu_2.svg';
import user from '../../assets/img/user_1.svg'
const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <div className="logo__nav"></div>

        <div className="countries">
          <a className="phone" href="tel:+52(55)-4000-1920">
            <span className="spanCountry">MX</span>+52(55)-4000-1920
          </a>
          <a className="phone" href="tel:+1(95)-6568-3443">
            <span className="spanCountry">USA</span>+1(95)-6568-3443
          </a>

          <select className="language">
            <option value="default">Idioma</option>
            <option value="en">En</option>
            <option value="es">Es</option>
          </select>
        </div>
      </LogoSection>

      <Navigation>
        <div className="header__menu">
          <i>
            <img src={menu} alt="Icono de menu" />
          </i>
        </div>

        <ul className="header__nav--izq">
          <li className="nav__item"><a href="#">Inicio</a></li>
          <li className="nav__item"><a href="#">Nosotros</a></li>
          <li className="nav__item"><a href="#">Servicios</a></li>
          <li className="nav__item"><a href="#">Preguntas</a></li>
          <li className="nav__item"><a href="#">Noticias</a></li>
          <li className="nav__item"><a href="#">Blog</a></li>
          <li className="nav__item"><a href="#">Contacto</a></li>
        </ul>

        <ul className="header__nav--der">
          <li className="nav__item"><a href="#">Rastrear paquete</a></li>
          <li className="nav__item"><a href="#">Portal de cliente</a></li>
        </ul>

        <div className="header__user">
          <i>
            <img src={user} alt="Icono de usuario" />
          </i>
        </div>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
