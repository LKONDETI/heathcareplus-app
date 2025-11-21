# HealthcarePlus App

Welcome to HealthcarePlus, a full-stack healthcare management solution. The frontend is built with [Expo](https://expo.dev) and React Native, and the backend uses ASP.NET Core with PostgreSQL.

## Features

- User authentication (login, signup, profile)
- Book and manage appointments
- View and submit health records
- Custom theming and reusable components
- Backend API for health conditions and more
- PostgreSQL database integration

## Project Structure

- `frontend/` – Expo React Native app
  - `app/` – Main app screens and routing
  - `components/` – Reusable UI components
  - `constants/`, `theme/`, `hooks/` – Theming and custom hooks
  - `assets/` – Images and icons
- `backend/` – ASP.NET Core Web API
  - `Controllers/` – API controllers (e.g., `ConditionsController`)
  - `Models/` – Entity models (e.g., `Condition`)
  - `Data/` – Database context (`AppDbContext`)
  - `appsettings.json` – Configuration (including PostgreSQL connection string)

## Getting Started

### Frontend

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```
2. **Start the app**
   ```bash
   npx expo start
   ```
   - Open in a development build, Android emulator, iOS simulator, or [Expo Go](https://expo.dev/go).
3. **Reset the project**
   ```bash
   npm run reset-project
   ```
   - Moves starter code to `app-example` and creates a blank `app` directory for fresh development.

### Backend

1. **Install dependencies**
   ```bash
   cd backend
   dotnet restore
   ```
2. **Configure PostgreSQL**
   - Ensure PostgreSQL is running locally.
   - Create a database (e.g., `healthcareplus_app`).
   - Update `appsettings.json` with your connection string:
     ```json
     "DefaultConnection": "Host=localhost;Port=5432;Database=healthcareplus_app;Username=postgres;Password=yourpassword"
     ```
3. **Run the backend**
   ```bash
   dotnet run
   ```

## Docker Integration Instructions

This project uses Docker Compose to run the frontend (Expo), backend (.NET), and PostgreSQL database together.

### Prerequisites
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### How to Start All Services

1. Open a terminal in the project root (where `docker-compose.yml` is located).
2. Run:
   ```bash
   docker compose up --build
   ```
   This will build and start the database, backend, and frontend containers.

### Accessing the Services
- **Frontend (Expo Web):** http://localhost:8081
- **Backend API:** http://localhost:5046
- **PostgreSQL:** localhost:5432 (user: postgres, password: password, db: healthcareplus_app)

### Common Commands
- Stop all services:
  ```bash
  docker compose down
  ```
- View logs:
  ```bash
  docker compose logs -f
  ```
- Rebuild containers:
  ```bash
  docker compose up --build
  ```

### Notes
- The backend connects to the database using the connection string in `docker-compose.yml`.
- The frontend uses the backend API URL via environment variable (for web; for mobile, use your LAN IP).
- You can develop locally and changes will reflect in the containers if you edit code.

---

For advanced usage, see the official Docker and Docker Compose documentation.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo guides](https://docs.expo.dev/guides)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)
- [ASP.NET Core documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [PostgreSQL documentation](https://www.postgresql.org/docs/)

## Community

- [Expo on GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)
