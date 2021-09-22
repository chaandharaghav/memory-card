import { render } from '@testing-library/react';
import Board from '../components/Board';

test('Board renders without errors', () => {
  render(<Board />);
  const linkElement = document.querySelector('#board');
  expect(linkElement).toBeInTheDocument();
});
