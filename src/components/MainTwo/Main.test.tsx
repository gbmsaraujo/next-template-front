import { render, screen } from '@testing-library/react';
import MainTwo from './Main';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<MainTwo />);

    expect(
      screen.getByRole('heading', {
        name: /oi, primeiro teste/i,
      })
    ).toBeInTheDocument();
  });
});
