## Modal Component Documentation
The Modal component is a customizable modal overlay that can be used to display messages, alerts, or other content in a visually appealing way. It is built using styled components from the styled-components library.

## Installation
Make sure you have styled-components installed in your project:

npm install styled-components

## Usage
Import the Modal component into your React application:
import Modal from './Modal'; // Adjust the path based on your project structure

## Use the Modal component in your application:

// Example usage
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Other components */}
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Hello, this is a sample modal message!"
      />
    </div>
  );
};

## Props
isOpen (boolean, required): Determines whether the modal is visible.
onClose (function, required): Callback function to close the modal.
message (string, optional): The message to display inside the modal.

## Styling
The Modal component uses styled components for styling. You can customize the appearance by adjusting the styles in the following components:

ModalOverlay: The semi-transparent background overlay covering the entire viewport.
ModalContent: The white container for the modal content.
ModalMessage: The font size and styling for the message.
CloseButton: The close button (customize as needed).

Example
Here’s an example of how to use the Modal component:

<Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  message="Hello, this is a sample modal message!"
/>

Notes
Clicking outside the modal content will close the modal.
The modal is hidden when isOpen is false.