import {PageContainer, CtaLink} from '../../styles/Pages/CreateEmployee/CreateEmployeeStyles'
import {BannerContainerList} from '../../styles/Pages/EmployeeList/EmployeeListStyles'
import { NavLink } from 'react-router-dom';
import {DataTable} from '../../Components/Features/DataTable'


const EmployeeListPage = () => {
    return (
        <PageContainer>

        <BannerContainerList>
          <CtaLink as={NavLink} to="/">Home</CtaLink>
        </BannerContainerList>
         <DataTable/>
       
       
      </PageContainer>
    );
  };
  
  export default EmployeeListPage;