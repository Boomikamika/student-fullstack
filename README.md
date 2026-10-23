# Student Fullstack

A student management application built using Spring Boot, React, and MySQL.

## Project Structure
- `backend/` — Spring Boot REST API.
- `frontend/` — React application.

## Run Backend
1. Configure MySQL credentials in `backend/src/main/resources/application.properties`.
2. Open a terminal inside `backend/`.
3. Run `mvn spring-boot:run` if Maven is installed.

Backend: `http://localhost:8080`

## Run Frontend
1. Open a terminal inside `frontend/`.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the URL shown in the terminal, usually `http://localhost:5173`.

## Security
Never commit real database passwords. Use `application-example.properties` as a template.
