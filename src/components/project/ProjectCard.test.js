import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('Project Card', () => {
  const mockProject = {
    name: "Mock Test 0",
    budget: "1900",
    category: {
      id: 1,
      name: "Infra"
    },
    cost: 0,
    services: [],
    id: 0
  }

  beforeEach(() => {
    const handleRemoveMock = jest.fn()
    render(
      <BrowserRouter>
        <ProjectCard 
          id={mockProject.id}  
          name={mockProject.name}
          budget={mockProject.budget}
          category={mockProject.category.name}
          key={mockProject.key}
          handleRemove={handleRemoveMock}
        />
      </BrowserRouter>
    );
  });

  it('Should show name like a h4 tag', () => {
    const name = screen.getByRole('heading', {name: 'Mock Test 0'});
    expect(name).toBeInTheDocument();
  })
})