// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeFlux title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeFlux/i);
    expect(titleElement).toBeInTheDocument();
});
