import React from 'react';
import styled from 'styled-components'; // Import styled-components


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffff; /* Use theme color for modal background */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  max-width: 90%; /* Limit modal width */
`;

const ModalMessage = styled.p`
  font-size: 16px; /* Message font size */
  color: #989898; /* Use theme color for text */
`;

const CloseButton = styled.button`
  background-color: #74E39A; /* Use theme color for button background */
  color: #fff; /* Use theme color for button text */
  border: none; /* No border */
  cursor: pointer; /* Pointer cursor */
  padding: 8px 16px; /* Adjust padding */
  border-radius: 4px; /* Rounded corners */
  
`;

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalMessage>{message}</ModalMessage>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
