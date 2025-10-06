# 💼 Portfolio Backend (Express + TypeScript + Prisma + PostgreSQL)

A **secure**, **scalable**, and **production-ready** backend for a personal **Portfolio Management System**, built with **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.  
It powers the **Next.js Portfolio frontend**, handling authentication, blogs, projects, and dashboard management through clean RESTful APIs.

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/BakiAbdullah/Portfolio_server-prisma

# Navigate into the folder
cd Portfolio_server-prisma

# Install dependencies
pnpm install

# Run Prisma migrations
npx prisma migrate dev

# Start the server
pnpm dev
```

---

## 🌱 Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database (PostgreSQL)
DATABASE_URL=postgresql://neondb_owner:npg_k7DSntUsl3QF@ep-broad-dew-a1a8g9cx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# Bcrypt
BCRYPT_SALT_ROUNDS=10
```

---

## 🚀 Features

- ✍️ **Blog Management System** (CRUD)
- 🧱 **Project Management** (CRUD)
- 📜 **About Section Update** (PUBLIC)
- 💬 **Contact Form Submission** API
- 🧩 **Prisma ORM** for type-safe queries
- 🧠 Clean and scalable folder structure (MVC pattern)
- 🧑‍💻 Written 100% in **TypeScript**

---

## 🏗️ Tech Stack

| Tech             | Description                        |
| ---------------- | ---------------------------------- |
| **Node.js**      | JavaScript runtime                 |
| **Express.js**   | Backend framework                  |
| **TypeScript**   | Type-safe development              |
| **Prisma ORM**   | Database toolkit for PostgreSQL    |
| **PostgreSQL**   | Relational database                |
| **bcrypt**       | Password hashing                   |
| **dotenv**       | Environment variable management    |
| **Cors**         | Cross-origin resource sharing      |

---

## 🧩 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint                  | Description                |
| ------ | -------------------------- | -------------------------- |
| POST   | `/api/v1/auth/login`      | User login (JWT token)     |

---

### 📰 Blog Routes

| Method | Endpoint                   | Description                |
| ------ | --------------------------- | -------------------------- |
| GET    | `/api/v1/blogs`            | Get all blogs              |
| GET    | `/api/v1/blogs/:id`        | Get blog by ID             |
| POST   | `/api/v1/blogs`            | Create new blog (Admin)    |
| PATCH  | `/api/v1/blogs/:id`        | Update blog (Admin)        |
| DELETE | `/api/v1/blogs/:id`        | Delete blog (Admin)        |

---

---

## 🔐 Roles & Permissions

| Role  | Permissions                                                                 |
| ------ | -------------------------------------------------------------------------- |
| Admin  | Can manage blogs, projects, about section, and view all contact messages   |

---

## ✅ Validation & Business Logic

- **Admin-only routes** secured using JWT middleware  
- **Prisma middleware hooks** for clean, reusable logic  
- **Password encryption** using bcrypt  
- **Centralized error handling** for cleaner code  

---

## 🧠 Developer Notes

- Modular architecture (Controllers, Routes, Services, Utils)  
- Reusable middleware for authentication and error handling  
- Follows **RESTful API design** principles  
- Uses **Prisma migrations** for schema management  
- Easily extendable for more entities (skills, testimonials, etc.)

---

## 🗂 Folder Structure

```
src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── routes/
 ├── services/
 ├── utils/
 ├── prisma/
 │   ├── schema.prisma
 └── server.ts
```

---

## 🧾 Prisma Schema Example

```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
}

enum Role {
  ADMIN
  USER
}

model Blog {
  id        String   @id @default(uuid())
  title     String
  content   String
  authorId  String
  author    User      @relation(fields: [authorId], references: [id])
  createdAt DateTime  @default(now())
}
```

---

## 🌍 Deployment

> This backend can be easily deployed to **Vercel** 
> Just connect your GitHub repo, set environment variables, and deploy 🚀  

