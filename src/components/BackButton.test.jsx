/* eslint-disable comma-dangle */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BackButton from './BackButton';

/**
 * - BackButton Component Testing
 *   - should render component correctly
 *   - should display the correct text
 *   - should navigate to the correct URL when clicked
 */

// Extend expect with jest-dom matchers
expect.extend(matchers);

describe('BackButton component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render component correctly', () => {
    // Arrange
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    );

    // Action
    // /back/i is Regular expression that matches the word "back" case-insensitively
    const linkElement = screen.getByRole('link', { name: /back/i });

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  it('should display the correct text', () => {
    // Arrange
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    );

    // Act
    const backSymbol = screen.getByText('<');
    const backText = screen.getByText('Back');

    // Assert
    expect(backSymbol).toBeInTheDocument();
    expect(backText).toBeInTheDocument();
  });

  it('should navigate to the correct URL when clicked', async () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    );

    // Action
    const linkElement = container.querySelector('a');
    // Action - Click the link
    await userEvent.click(linkElement);

    // Assert
    expect(linkElement).toHaveAttribute('href', '/');
    // Assert - Check if the URL changes after clicking
    expect(window.location.pathname).toBe('/');
  });
});
