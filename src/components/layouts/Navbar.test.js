import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

const renderNavbar = () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
};

describe('Navbar', () => {
  beforeEach(() => {
    renderNavbar();
  });

  it('Has logo image', () => {
    const logo = screen.getByAltText('Costs');
    expect(logo).toBeInTheDocument();
  });

  it('Has 4 navigate links', () => {
    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(4);
  });

  it('Link should change color on hover', async () => {
    const linkItem = screen.getAllByRole('listitem')[0];
    userEvent.hover(linkItem);
    waitFor(() => {
      expect(linkItem.closest('a')).toHaveStyle('color: #ffbb33');
    });
  });

});