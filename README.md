# Courses Management Service - Curate

Educational Platform with User Registration, Login, Admin and User Roles. Admins manage all courses, updating specific fields, while users access individual course data.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Porgramming-Hero-web-course/l2b2a4-course-review-with-auth-reaxul.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

`JWT_ACCESS_SECRET`

## Functional Requirements

### User

- User can login and log out.
- User can update certain fields.

### Admin

- Admin can log in and log out.
- Admin can only update certain fields.

## API Endpoints

### Courses

- `POST api/courses`
- `GET api/courses`
- `PUT api/courses/:courseId`
- `GET api/courses/:courseId/reviews`
- `GET api/course/best`

### Category

- `GET api/category`
- `POST api/category`

### Reviews

- `POST api/reviews`

### Authentication

- `POST api/auth/register`
- `POST api/auth/login`
- `POST api/auth/change-password`

## Tech Stack

**Server:** Node, Express, Mongoose, TypeScript

**Validation:** Zod, EsLint

**Authentication:** Json Web Token

**Formatting:** Prettier

