
import {PageContainer, BannerContainer, CtaLink} from '../../styles/Pages/CreateEmployee/CreateEmployeeStyles'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CreateEmployeeForm from '../../Components/Features/CreateEmployeeForm';
import Modal from '../../Components/Features/modal'
const CreateEmployeePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
    return (
      <PageContainer>
        <BannerContainer>
          <CtaLink as={NavLink} to="/employeeList">View Current Employees</CtaLink>
        </BannerContainer>
         
      <CreateEmployeeForm onEmployeeCreate={() => setIsModalOpen(true)}/>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} message="New employee successfully created"/>
      
      </PageContainer>
    );
  };
  
  export default CreateEmployeePage;
  