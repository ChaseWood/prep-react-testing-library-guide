import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestElements from '.././components/TestElements';

afterEach(cleanup);

// Below tests whether "counter" is equal to 0.
// We want to check this because this is what the state is set to initially counter should = 0

it('should equal to 0', () => {
	const { getByTestId } = render(<TestElements />);
	expect(getByTestId('counter')).toHaveTextContent(0);
});

// Below tests the counter "Up" button to make sure that it is enabled.

it('should be enabled', () => {
	const { getByTestId } = render(<TestElements />);
	expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

// Below tests the "Down" button to make sure that it is disabled.
it('should be disabled', () => {
	const { getByTestId } = render(<TestElements />);
	expect(getByTestId('button-down')).toBeDisabled();
});
