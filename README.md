
![CoPilot Demo](https://github.com/KamsiyonnaObi/coPilotXR/assets/86691010/a1011600-aec3-4490-a168-0e7e9e7cc1c8)

<h3 align="center">A CoPilot Image uploader Demo</h3>

## 📋 <a name="table">Table of Contents</a>

1. 👋🏽 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🛠️ [Features in development](#development)
5. 🤸 [Quick Start](#quick-start)
6. 🔗 [Refernces](#links)
7. 🚀 [More](#more)


## <a name="introduction">👋🏽 Introduction</a>

Introducing CoPilot – your go-to platform for effortless image sharing and management! With a simple interface, you can create an account, securely log in, upload your images, and browse through a gallery of images shared by other users. 

Sign up and start sharing!


## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Shadcn
- TailwindCSS

## <a name="features">🔋 Features</a>

👉 **Authentication and Authorization**: Secure user access with registration, login, and route protection.

👉 **Image Gallery**: Explore user images

👉 **Profile Page**: View and edit your profile


## <a name="development">🛠️ Features in Development</a>

👉 **Image Recoloring**: Customize images by replacing objects with desired colors easily

👉 **Background Removal**: Extract objects from backgrounds with ease

👉 **Subscriptions**: Upgrade plan to enjoy better features!

👉 **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/kamsiyonnaobi/copilotxr.git
cd copilot
```

**Installation**

Install the project dependencies using npm:

```bash
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## <a name="links">🔗 References </a>

Style Guide was inspired by JavaScript Mastery

Design was also inspired by Canva

## <a name="more">🚀 More</a>

You can view more projects I have built [here](https://kamsiyonna.site)
