# Apex AutoCare Booking UI

A premium, modern, responsive frontend booking system for automotive services, built with React and Vite.

## Tech Stack

- React 18
- Vite
- React Router
- Plain CSS (custom design system)

## Project Highlights

- Public pages: landing, services, booking, time slots, auth
- User pages: dashboard, my bookings, booking details, profile
- Staff pages: technicians list and technician profile
- Admin pages: admin dashboard, manage bookings, schedule
- Premium UI styling with responsive layouts
- Frontend-only mock data architecture for easy backend integration later

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run preview` - preview built app

## Main Routes

- `/` - Landing page
- `/services` - Services and smart service finder
- `/booking` - Booking form
- `/time-slots` - Time slots view
- `/my-bookings` - Customer bookings
- `/booking/:id` - Booking details
- `/staff` - Technicians list
- `/staff/:id` - Technician profile
- `/dashboard` - User dashboard
- `/admin` - Admin dashboard
- `/admin/bookings` - Admin booking management
- `/schedule` - Admin schedule
- `/login` - Login
- `/register` - Register
- `/forgot-password` - Password reset

## Folder Structure

```text
src/
  components/
  data/
  layouts/
  pages/
  router/
  styles/
  utils/
```

## Notes

- This project is frontend-only and uses local mock data.
- Designed to be portfolio-ready and easy to connect to an API/backend later.
