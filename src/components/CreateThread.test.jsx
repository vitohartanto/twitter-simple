/* eslint-disable comma-dangle */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { BrowserRouter } from 'react-router-dom';
import CreateThread from './CreateThread';

expect.extend(matchers);

describe('CreateThread component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <CreateThread />
      </BrowserRouter>
    );

    const titleInput = screen.getByPlaceholderText("Thread's Title");

    // Action
    await userEvent.type(titleInput, 'Hello Title');

    // Assert
    expect(titleInput).toHaveValue('Hello Title');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <CreateThread />
      </BrowserRouter>
    );

    const categoryInput = screen.getByPlaceholderText("Thread's Category");

    // Action
    await userEvent.type(categoryInput, 'category');

    // Assert
    expect(categoryInput).toHaveValue('category');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <CreateThread />
      </BrowserRouter>
    );

    const bodyInput = screen.getByTitle('body');

    // Action
    await userEvent.type(bodyInput, 'Hello Body');

    // Assert
    expect(bodyInput).toBeInTheDocument();
    expect(bodyInput).toContainHTML('Hello Body');
  });
});
