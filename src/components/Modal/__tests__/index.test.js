import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const mockCurrentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders the component', () => {
        render(<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />)
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('click event', () => {
    it('calls onClose handler', () => {
        render(<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />);
        fireEvent.click(screen.getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
});