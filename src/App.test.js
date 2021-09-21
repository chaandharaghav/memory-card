import { render } from '@testing-library/react';
import App from './App';

test('renders without errors', () => {
  render(<App />);
  const linkElement = document.querySelector('.App');
  expect(linkElement).toBeInTheDocument();
});
