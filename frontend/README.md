# HealthcarePlus Frontend

This folder contains the frontend code for the HealthcarePlus app, built with [Expo](https://expo.dev) and React Native.

## Project Structure

- `app/` – Main app screens and routing
- `components/` – Reusable UI components
- `constants/`, `theme/`, `hooks/` – Theming and custom hooks
- `assets/` – Images and icons
- `scripts/` – Utility scripts

## Getting Started

1. **Install dependencies**
   ```bash
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

## Notes

- The `.expo` folder is automatically created by Expo and should not be committed. It is already listed in `.gitignore`.
- All asset and config paths are set up for the current folder structure.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo guides](https://docs.expo.dev/guides)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)

---

> Why do I have a folder named ".expo" in my project?
>
> The ".expo" folder is created when an Expo project is started using "expo start" command.
>
> What do the files contain?
>
> - "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
> - "settings.json": contains the server configuration that is used to serve the application manifest.
>
> Should I commit the ".expo" folder?
>
> No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
> Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
