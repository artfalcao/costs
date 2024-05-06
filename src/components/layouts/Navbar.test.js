import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import {createMemoryHistory} from 'history'
import Navbar from './Navbar';

const renderNavbar = () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

const renderNavbarWithRouter = () => {
  const history = createMemoryHistory();
  render(
    <BrowserRouter history={history}>
      <Navbar />
    </BrowserRouter>
  );
  return history
};

describe('Navbar Component', () => {
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
    const linkItem = screen.getAllByRole('listitem');
    linkItem.forEach(link => {
      userEvent.hover(link);
      waitFor(() => {
        expect(link.closest('a')).toHaveStyle('color: #ffbb33');
      });
    })
  });
});

describe('Navbar Redirects', () => {
  it('Redirect to Projects Page', async () => {
    let history = renderNavbarWithRouter();
    const projectsLink = screen.getByText('Projetos');
    userEvent.click(projectsLink);
    waitFor(() => {
      expect(history.location.pathname).toBe('/projects');
    });
  });
})