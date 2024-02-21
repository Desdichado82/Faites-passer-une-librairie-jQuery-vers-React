import {HeaderContainer, Logo} from '../../../styles/Components/Header/HeaderStyles'
import HRnet_Logo from '../../../assets/img/HRnet_Logo.png'

const Header = () => {
    return (
      <HeaderContainer>
        <Logo src={HRnet_Logo} alt="HRNet Logo" />
      </HeaderContainer>
    );
  };

  
export default Header;