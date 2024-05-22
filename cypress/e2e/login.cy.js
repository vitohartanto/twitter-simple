/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert(react-hot-toast) when email is empty
 *   - should display alert(react-hot-toast) when password is empty
 *   - should display alert(react-hot-toast) when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Sign In$/)
      .should('be.visible');
  });

  it('should display alert(react-hot-toast) when email is empty', () => {
    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('toast.error', (str) => {
      expect(str).to.equal('Please complete both inputs');
    });
  });

  it('should display alert(react-hot-toast) when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('ganmara888@gmail.com');

    // klik tombol login tanpa mengisi password
    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi toast untuk menampilkan pesan dari API
    cy.on('toast.error', (str) => {
      expect(str).to.equal('Please complete both inputs');
    });
  });

  it('should display toast when email and password are wrong', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('wrong_email@gmail.com');

    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi toast.error untuk menampilkan pesan dari API
    cy.on('toast.error', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('ganmara888@gmail.com');

    // mengisi password
    cy.get('input[placeholder="Password"]').type('ganmara');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi toast.success untuk menampilkan pesan dari API
    cy.on('toast.success', (str) => {
      expect(str).to.equal('Login Successful');
    });

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav')
      .contains(/^Threads$/)
      .should('be.visible');

    cy.get('nav')
      .contains(/^Leaderboards$/)
      .should('be.visible');

    cy.get('button[title="Sign out"]').should('be.visible');
  });
});
