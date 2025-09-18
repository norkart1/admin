# CoreUI React Admin Template - Replit Setup

## Overview
This is a CoreUI Free React Admin Template that has been imported from GitHub and configured to run in the Replit environment. The project is a complete admin dashboard interface built with React, Vite, and CoreUI components.

## Project Architecture
- **Frontend Framework**: React 18 with Vite build tool
- **UI Library**: CoreUI 5.0 with React components
- **Styling**: SCSS with Tailwind CSS integration
- **State Management**: Redux with React Context API
- **Routing**: React Router DOM v6
- **Authentication**: JWT token-based authentication with external API
- **Backend Integration**: Connects to external API at `sargalayamserver-production.up.railway.app`

## External Dependencies
The application connects to an external backend API hosted on Railway:
- Admin endpoints: `https://sargalayamserver-production.up.railway.app/admin`
- Teams endpoints: `https://sargalayamserver-production.up.railway.app/teams`
- Image URLs: `https://sargalayamserver-production.up.railway.app/teamImages` and `https://sargalayamserver-production.up.railway.app/programImg`

## Development Setup
- **Development Server**: Configured to run on port 5000 with host `0.0.0.0`
- **Node.js Version**: 20
- **Package Manager**: npm
- **Build System**: Vite with React plugin

## Key Features
- User authentication with JWT tokens
- Team management system
- Program management
- Dashboard with charts and analytics
- Responsive admin interface
- Image upload and management

## Replit Configuration
- Development workflow: `npm start` runs on port 5000
- Deployment: Configured for autoscale with build command `npm run build` and serve command `npm run serve`
- Vite server configured with `host: '0.0.0.0'` for Replit proxy compatibility

## Recent Changes (2025-09-18)
- Installed Node.js 20 and project dependencies
- Updated Vite configuration to bind to `0.0.0.0:5000` for Replit compatibility
- Configured development workflow with proper port settings
- Set up deployment configuration for production builds
- Verified application loads successfully in Replit environment

## Notes
- The application shows some SASS deprecation warnings which are non-critical
- Authentication system connects to external backend - requires valid credentials
- All API integrations point to external Railway-hosted backend