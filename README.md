---

# Express Google OAuth2 Example

This repository contains a basic Express.js application that demonstrates Google OAuth2 authentication. It allows users to log in using their Google accounts and displays a dashboard page with user information after successful authentication.

## Getting Started

1. **Clone the Repository**: Begin by cloning this repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/express-google-oauth2.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:

   ```
   cd express-google-oauth2
   npm install
   ```

3. **Obtain Google API Credentials**:

   - Create a project on the [Google Developer Console](https://console.developers.google.com/).
   - Enable the Google+ API for the project.
   - Create OAuth 2.0 credentials for a Web application.
   - Note down the **Client ID** and **Client Secret**.

4. **Configure Google API Credentials**:

   In the `config/googleCreds.js` file, replace `< CLIENT_ID HERE >` and `< CLIENT_SECRET HERE >` with your actual Google API credentials.

5. **Run the Application**:

   Run the Express server using the following command:

   ```
   npm start
   ```

   The server will start on port 3001 by default. You can access the application by visiting `http://localhost:3001` in your browser.

## Usage

1. **Log In**: Access the login page by going to `http://localhost:3001/login`. Click on "Login with GOOGLE" to initiate the Google OAuth2 authentication flow.

2. **Dashboard**: After successful authentication, you'll be redirected to the dashboard page at `http://localhost:3001/dashboard`, displaying user information retrieved from Google.

3. **Logout**: To log out, send a POST request to `/logout` or simply close the browser window.

## Important Files

- `index.js`: Entry point of the application. Defines routes, sessions, and handles user authentication.

- `middleware/checkAuthenticated.js`: Middleware function to check if the user is authenticated.

- `routes/auth/googleAuth.js`: Defines the Google OAuth2 authentication routes.

- `modules/pass.js`: Configures and uses the Google Strategy for Passport.js authentication.

- `config/googleCreds.js`: Example configuration file for Google API credentials. **Remember to replace with your actual credentials.**

## Compiling Google API Credentials

To compile the `config/googleCreds.js` file with your Google API credentials:

1. Rename `example-googleCreds.js` to `googleCreds.js`.

2. Replace `< CLIENT_ID HERE >` with your actual Google Client ID and `< CLIENT_SECRET HERE >` with your actual Client Secret obtained from the Google Developer Console.

3. Save the `googleCreds.js` file.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---