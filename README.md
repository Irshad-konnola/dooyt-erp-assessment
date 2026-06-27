# Dooyt ERP - Full-Stack Developer Assessment

A pixel-perfect, frontend-first full-stack Next.js application built for the Dooyt developer assessment. This project reconstructs the Dooyt ERP landing page with high-fidelity, responsive UI components and powers its dynamic sections using a custom-built REST API.

## 🚀 Tech Stack

**Frontend (60%)**
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Forms & Validation:** React Hook Form + Zod
* **State & Interactions:** React Hooks (Client Components) for toggles, accordions, and modals.

**Backend (30%) — *Selected Stack: Next.js Route Handlers***
* **API Layer:** Next.js Route Handlers (`/api/...`)
* **Database:** SQLite (File-based, zero configuration required)
* **ORM:** Prisma (v6)
* **Validation:** Zod (for request payload validation)

## ✨ Key Features & Architectural Decisions

1. **Unified Full-Stack Repository:** I chose **Next.js Route Handlers** over a separate Python backend to maintain a clean, single-repository architecture. This allows for seamless end-to-end type safety, shared Zod schemas, and a frictionless setup experience for reviewers.
2. **Portable Database:** The backend is powered by a local **SQLite** database managed via **Prisma**. This ensures the application is 100% self-contained. No external database servers or Docker containers are required to evaluate this project.
3. **Pure CSS UI Mockups:** Instead of relying on static, exported images for the internal dashboard previews (e.g., in the Dashboard Showcase and Features sections), I built these complex, overlapping layers using pure Tailwind CSS and inline SVGs. This guarantees razor-sharp scaling on high-DPI displays and demonstrates deep DOM mastery.
4. **Advanced Server-Side Logic:** The 15% annual discount on the pricing tier is dynamically calculated server-side based on the query parameter.
5. **Secure Endpoints:** All `POST`, `PUT`, `DELETE`, and `/api/admin/*` routes are protected using a reusable middleware function that validates the `X-Api-Key` header.
6. **Dynamic Route Segments:** Protected CRUD operations utilize a centralized Next.js dynamic catch-all route (`/api/[entity]/[id]`) to keep the API layer DRY and efficient.
7. **Graceful Error Handling:** Includes global Next.js `loading.tsx` and `error.tsx` boundaries to ensure a seamless user experience.

## 🛠️ How to Run the Project Locally

Follow these exact steps to spin up the frontend and the populated backend in under two minutes.

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize the Database
This project uses SQLite. Generate the Prisma client and push the schema to create your local `.db` file:
```bash
npx prisma generate
npx prisma db push
```

### 3. Seed the Database
Populate the SQLite database with the assessment's provided `seed.json` data:
```bash
npx prisma db seed
```

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🧪 API Contract Implementation

The REST API strictly adheres to the provided requirements, including the paginated envelope format `{ "data": [], "page": 1, "limit": 10, "total": X }`.

### Public Routes
* `GET /api/modules` (Supports `?search=` and `?category=`)
* `GET /api/industries`
* `GET /api/plans` (Supports `?billing=monthly|annual`)
* `GET /api/testimonials` (Supports pagination)
* `GET /api/faqs`
* `POST /api/demo-requests` (Validates `fullName` and `email` via Zod. Returns `201` on success, `422` on unknown plan/bad data).

### Protected Routes
*Require `X-Api-Key: dooyt-demo-key-2026` header.*
* `POST / PUT / DELETE /api/{modules|plans|testimonials|faqs}/{id}`
* `GET /api/admin/demo-requests` (Supports `?status=`, `?page=`, `?limit=`)
* `PATCH /api/admin/demo-requests/{id}` (Updates status to `new`, `contacted`, or `closed`)

## 📝 Git Hygiene
This repository utilizes atomic, conventional commits (e.g., `feat:`, `refactor:`, `chore:`) to ensure a readable and traceable development history mapping directly to the assessment milestones.