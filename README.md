# Learning Management System - LMS-Platform

Tech-Stack: Next.js, React.js, TypeScript, Tailwind, Prisma, PostgreSQL

## Key features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- PostgreSQL database using Supabase

## How to use?

1. setup *.env* file
2. npx prisma generate
3. npx prisma push db
4. node scripts/seed.ts
5. npm run dev
6. npx prisma studio

for testing stripe api:

    stripe listen --forward-to localhost:3000/api/webhook

for testing payments, use dummy credit card info:

    Card number: 4242 4242 4242 4242