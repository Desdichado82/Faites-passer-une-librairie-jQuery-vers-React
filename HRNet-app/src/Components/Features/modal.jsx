import styled from 'styled-components';

// Styled components for modal elements
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
  background-color: white; /* White background for modal */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
`;

const ModalMessage = styled.p`
  font-size: 16px; /* Message font size */
`;

const CloseButton = styled.button`
  background-color: transparent; /* Transparent background */
  border: none; /* No border */
  cursor: pointer; /* Pointer cursor */
`;

// Modal component definition
const Modal = ({ isOpen, onClose, message }) => {
  // If modal is not open, return null to render nothing
  if (!isOpen) return null;

  return (
    // Modal overlay to cover the entire viewport and handle click events to close the modal
    <ModalOverlay onClick={onClose}>
      {/* Modal content container */}
      <ModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent closing the modal when clicking inside the modal content */}
        {/* Display the message passed as prop */}
        <ModalMessage>{message}</ModalMessage>
        {/* Close button to close the modal */}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal; // Export the Modal component
