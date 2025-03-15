This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Variables

This project requires environment variables to function properly. Create a `.env.local` file in the root directory with the following variables:

```bash
# Airtable API Key - Get this from your Airtable account
NEXT_PUBLIC_AIRTABLE_API_KEY=your_airtable_personal_access_token_here
```

You can copy the `.env.example` file as a starting point:

```bash
cp .env.example .env.local
```

Then, replace the placeholder values with your actual API keys.

### Development Server

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

### Setting Up Environment Variables on Vercel

When deploying to Vercel, you need to add your environment variables to your project:

1. Go to your project on the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add the same environment variables that you have in your `.env.local` file
4. Deploy your project again to apply the changes

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
