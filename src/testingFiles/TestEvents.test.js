import React from 'react';
import {
	render,
	cleanup,
	fireEvent,
	getByTestId,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestEvents from '../components/TestEvents';

afterEach(cleanup);

// These tests fires off a click event (fireEvent.click) and tests the functionality of the button by grabbing the ID of the element (getByTestId) and clicking the element.

it('increments counter', () => {
	const { getByTestId } = render(<TestEvents />);

	fireEvent.click(getByTestId('button-up'));
	expect(getByTestId('counter')).toHaveTextContent(1);
});

it('decrements counter', () => {
	const { getByTestId } = render(<TestEvents />);
	fireEvent.click(getByTestId('button-down'));
	expect(getByTestId('counter')).toHaveTextContent(-1);
});
