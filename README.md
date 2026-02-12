<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# ui-ai-generator– Deterministic Agent System
The Overview
This project implements a deterministic AI-powered UI generator inspired by Claude Code for UI
The system converts natural language intent into working UI code and a live preview using a fixed, deterministic component library.

Architecture
The system uses a 3-step agent architecture:
1. Planner
- Interprets user intent
- Selects target component(s)
- Produces structured UI tree
- Supports incremental edits
2. Generator
- Converts structured UI tree into JSX code
- Uses only allowed components
- Produces deterministic output
3. Explainer
- Explains decisions made by the planner
- Clarifies incremental changes
- Improves trust and debuggability

Deterministic Component System
Allowed Components:
- Card
- Button

Constraints:
- No inline styles
- No arbitrary Tailwind generation
- No new components created dynamically
- All color mappings are predefined

Features
- Multi-component support
- Incremental modification (no full rewrite)
- Version history + rollback
- Live preview
- Generated JSX view
- Explainable reasoning
- Deterministic color mapping

Safety & Validation
- Component whitelist enforced
- Controlled color mapping
- Structured UI tree
- Prevents unknown component types

>>>>>>> b762679777154d3c2c61fd8f257ccc04c5c4b64d
