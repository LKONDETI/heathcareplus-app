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

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo guides](https://docs.expo.dev/guides)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)
- [ASP.NET Core documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [PostgreSQL documentation](https://www.postgresql.org/docs/)

## Community

- [Expo on GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)
