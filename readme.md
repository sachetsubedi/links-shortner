<h1 align="center" style="border: 0;"> Links Shortner </h1>

<p align="center"><b>Simple tool to shorten your long boring links.</b></p>

<br><br>

## Table Of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Routes](#routes)
- [Usage](#usage)
- [Author](#author)

<br>

## Tech Stack

- Node 20
- `pnpm` package manager
- Typescript v5

<br>

## Prerequisites

This project requires following techs to be installed on your system.

- Node v20.12.2 or higher
- pnpm v9.4.0 or higher

## Installation

1. First `fork` the project.

<br>

2. Clone your fork onto you machine using git clone

   ```bash
   git clone https://your_fork_repo_url_here
   ```

<br>

3. Install the dependency

   ```bash
   pnpm install
   ```

<br>

4. Copy the `.env.example` to `.env`

   ```bash
   cp .env.example .env
   ```

<br>

5. Set the proper environment variables in `.env` file

```env
 BASE_URL = your_base_url_here
 LINKS_EXPIRATION_TIME = 15   // In minutes
```

<br>

6. Deploy the database migrations to your datavase

   ```bash
   pnpm migrate deploy
   ```

   <br>

7. Build the project

   ```bash
    pnpm build
   ```

<br>

7. Start the project

   ```bash
   pnpm start
   ```

   OR

   ```bash
   pnpm dev
   ```

<br>

## Routes

| Method | Path      | Use                               |
| ------ | --------- | --------------------------------- |
| Get    | `/status` | Get the status of the application |
| Get    | `/:path`       | Redirect to the link.             |
| Post   | `/`       | Create a link.                    |

<br>

## Usage

To use this URL Shortener, you can follow these steps:

- Send a `POST` request to the `/` route with a `JSON` payload containing the link you want to shorten.

  <br>

  **Payload possible values:**

  ```json
    "to": "https://example.com" // Required
    "randomPath": "true" // Optional - Default: false - If true, the path will be generated randomly.
    "path": "custom-path" // Optional - If randomPath is false, you can provide a custom path.
  ```

 <br>
 
   **Example Request**
 ```bash
 curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"to": "https://example.com", "randomPath": true}'
 ```

The `from ` result from the api response can be used as a shortned link to redirect to the link provided in the `to` field. Every link will expire in given time (Default 15 mins).
<br>

## Author

**Author Name** &nbsp; : &nbsp; Sachet Subedi <br>
**Author URI** &nbsp; &nbsp; &nbsp; : &nbsp; [https://sachetsubedi001.com.np](https://sachetsubedi001.com.np) <br>
**GitHub URI** &nbsp; &nbsp; &nbsp; : &nbsp; [sachetsubedi](https://github.com/sachetsubedi) <br>
**Mail** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; [mail@sachetsubedi001.com.np](mailto:mail@sachetsubedi001.com.np)<br>

Thank you for using this documentation.
