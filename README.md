# Database Project

NodeJS + MySQL + EJS

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    (some version)

    $ npm --version
    (some version)

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/nonny898/db_project
    $ cd db_project
    $ npm install

## Running the project

1. Open `utils/database.js` and `app.js` then edit it with your settings. You will need:

    - Change MySQL username and password

2. Run

        $ npm start

    This program will automatically create database and the required tables.

3. Import the `movie.csv` and `round.csv` in `utils` in their respective tables.

    - For `round.csv`, make sure that the first row of the file is the header of the table.

4. To access the website: [localhost:3000](localhost:3000)

5. To access admin homepage: [localhost:3000/admin/movies](localhost:3000/admin/movies)
