/* eslint-disable comma-dangle */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AddThreadButton from './AddThreadButton';

/**
 * - AddThreadButton Component Testing
 *   - should render component correctly
 *   - should display the correct text
 *   - should navigate to the correct URL when clicked
 */

// Extend expect with jest-dom matchers
expect.extend(matchers);

describe('AddThreadButton component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render component correctly', () => {
    // Arrange
    render(
      <BrowserRouter>
        <AddThreadButton />
      </BrowserRouter>
    );

    // Action
    // /back/i is Regular expression that matches the word "back" case-insensitively
    const linkElement = screen.getByTitle('Create New Thread');

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  it('should display the correct text', () => {
    // Arrange
    render(
      <BrowserRouter>
        <AddThreadButton />
      </BrowserRouter>
    );

    // Action
    const addSymbol = screen.getByText('+');

    // Assert
    expect(addSymbol).toBeInTheDocument();
  });

  it('should navigate to the correct URL when clicked', async () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <AddThreadButton />
      </BrowserRouter>
    );

    // Action
    const linkElement = container.querySelector('a');
    // Action - Click the link
    await userEvent.click(linkElement);

    // Assert
    expect(linkElement).toHaveAttribute('href', '/threads/newThread');
    // Assert - Check if the URL changes after clicking
    expect(window.location.pathname).toBe('/threads/newThread');
  });
});
