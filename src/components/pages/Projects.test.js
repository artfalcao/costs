import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  const mockProjects = [
    {
      name: "Mock Test 0",
      budget: "1900",
      category: {
        id: 1,
        name: "Infra"
      },
      cost: 0,
      services: [],
      id: 0
    },
  ];

  const useStateSpy = jest.spyOn(React, 'useState');
  
  beforeEach(() => {
    useStateSpy.mockImplementation((init) => [init, jest.fn()]);
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Render the loading component initially', async () => {
    useStateSpy.mockImplementationOnce(() => [false, jest.fn()]);
    const loadImg = await screen.findByAltText('Loading');
    expect(loadImg).toBeInTheDocument();
  });

  it('Shows the message of none project when loading disappear', async () => {
    useStateSpy.mockImplementationOnce(() => [[], jest.fn()]);
    useStateSpy.mockImplementationOnce(() => [true, jest.fn()]);

    waitFor(() => {
      const msg = screen.getByText('Não há projetos cadastrados!');
      expect(msg).toBeInTheDocument();
    });
  })

  it('Show projects if exists', async () => {
    useStateSpy.mockImplementationOnce(() => [mockProjects, jest.fn()]);
    useStateSpy.mockImplementationOnce(() => [true, jest.fn()]);

    waitFor(() => {
      const nameProject = screen.getByText('Mock Test 0');
      expect(nameProject).toBeInTheDocument();
    });
  });
});