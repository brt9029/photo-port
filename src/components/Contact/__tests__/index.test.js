import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot();
    });
});

it('renders h1tag id', () => {
    render(<Contact />);
    expect(screen.getByTestId('h1tag')).toHaveTextContent('Contact me');
});

it('renders button testid', () => {
    render(<Contact />);
    expect(screen.getByTestId('button')).toHaveTextContent('Submit')
});