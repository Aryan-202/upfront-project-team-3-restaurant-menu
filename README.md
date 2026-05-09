# Restaurant Menu Application

A modern, responsive restaurant menu application built with React, TypeScript, and Express.js.

## Features

- **Interactive Menu Display**: Browse menu items organized by categories
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Nutritional Information**: View detailed nutritional facts for each menu item
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **API Integration**: Connects to a REST API for menu data
- **Fallback Support**: Uses mock data when backend is unavailable

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Radix UI** for accessible primitives

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **TypeScript** for type safety

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (for full functionality)
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd upfront-project-team-3-restaurant-menu
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   pnpm install

   # Install server dependencies
   cd ../server
   pnpm install
   ```

3. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd server
   pnpm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd client
   pnpm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## API Endpoints

- `GET /api/menu` - Retrieve all menu items with nutritional information

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/ui/  # Reusable UI components
│   │   ├── data/          # Mock data
│   │   └── App.tsx        # Main application component
├── server/                 # Express.js backend
│   ├── src/
│   │   ├── controllers/   # API controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   └── utils/         # Utilities (seeding, etc.)
└── docs/                  # Documentation
```

## Development

### Available Scripts

**Client:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

**Server:**
- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Compile TypeScript
- `pnpm run seed` - Seed database with sample data

### Mock Data

The application includes mock data that automatically loads when the backend API is unavailable, allowing for development and demonstration without requiring a full database setup.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.