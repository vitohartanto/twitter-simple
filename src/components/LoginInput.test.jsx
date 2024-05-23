/* eslint-disable comma-dangle */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { BrowserRouter } from 'react-router-dom';
import LoginInput from './LoginInput';

/**
 * - LoginInput Component Testing
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 */

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'ganmara888@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('ganmara888@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(emailInput, 'ganmara');

    // Assert
    expect(emailInput).toHaveValue('ganmara');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
      <BrowserRouter>
        <LoginInput login={mockLogin} />
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'ganmara888@gmail.com');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'ganmara');
    const loginButton = screen.getByTitle('Login');

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'ganmara888@gmail.com',
      password: 'ganmara',
    });
  });
});
