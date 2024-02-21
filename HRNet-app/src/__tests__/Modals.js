/**
 * @jest-environment jsdom
 */
// Modal.test.js

import { render, fireEvent } from '@testing-library/react';
import Modal from '../Components/Features/modal';

describe('Modal Component', () => {
  it('renders correctly when open', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}} message="Hello, world!" />
    );

    // Assert that the modal content is present
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}} message="Hello, world!" />
    );

    // Assert that the modal content is not present
    expect(queryByText('Hello, world!')).toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose} message="Hello, world!" />
    );

    // Simulate clicking the close button
    fireEvent.click(getByText('Close'));

    // Assert that onClose is called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
