import {PageContainer, CtaLink} from '../../styles/Pages/CreateEmployee/CreateEmployeeStyles'
import {BannerContainerList} from '../../styles/Pages/EmployeeList/EmployeeListStyles'
import { NavLink } from 'react-router-dom';
import{MyDataTable} from '../../Components/Features/MyDataTable'


const EmployeeListPage = () => {
  console.log('EmployeeListPage rendered');
    return (
        <PageContainer>

        <BannerContainerList>
          <CtaLink as={NavLink} to="/">Home</CtaLink>
        </BannerContainerList>

         <br></br>
        
        <MyDataTable/>
       
      </PageContainer>
    );
  };
  
  export default EmployeeListPage;