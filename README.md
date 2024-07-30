## SrvcHub

SrvcHub is a web application that connects users with local artisans. Users can search for artisans, view their profiles, and book appointments. The application displays the locations of artisans on a map for easy navigation.

### Features

    - User Authentication: Users can sign up, log in, and log out.
    - Search Functionality: Users can search for artisans by location.
    - Artisan Profiles: Detailed profiles of artisans, including images, categories, contact information, and bios.
    - Map Integration: Displays the locations of artisans on a map.
    - Booking System: Users can book services directly from the artisan's profile.

### Tech Stack

* Frontend: HTML, CSS, JavaScript, Google Maps APi
* Backend: Nodejs, Express
* Databse: MongoDB
* Deployment: Render.com

### Installation

- Clone the repository:

    ```

    git clone https://github.com/your-username/srvchub.git
    cd SrvcHub
    ```

- Install dependencies

    ```

    npm install ...
    ```

- Set up environment variables

    ```

    MONGO_URI=
    JWT_SECRET=
    ```

- Start the server

    ```

    npm start
    ```

- ThereAfter access on your localhost via port provided

### Project Structure

* srv-frontend: Constians the frontend files
* Backend: Contains all backend files
* .env: Environment variables file
* package.json: Project metadata and dependencies

### Deployment

The application has been deployed to Render.com. You can test the public version using the following link:
[https://srvchub.onrender.com/](https://srvchub.onrender.com/)
