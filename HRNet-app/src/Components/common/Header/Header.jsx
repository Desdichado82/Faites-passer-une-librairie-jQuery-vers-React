import {HeaderContainer, Logo} from '../../../styles/Components/Header/HeaderStyles'
import HRnet_Logo from '../../../assets/img/wealthHealth_logo.webp'

const Header = () => {
    return (
      <HeaderContainer>
        <Logo src={HRnet_Logo} alt="HRNet Logo" />
      </HeaderContainer>
    );
  };

  
export default Header;