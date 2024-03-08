## SUPA_TEMPLATE

![supa_template banner image](https://i.ibb.co/NnQ6nTk/Supa-Template-Banner-1.png)

**Overview**

SUPA_TEMPLATE is an open-source project that provides a comprehensive starter template for building Software as a Service (SaaS) applications using Supabase. This project, currently under development, aims to simplify the process of creating a production-ready SaaS platform. **The goal is to make high-quality software development accessible to everyone, free of charge**.

## Features

- **Next.js 14 Integration**: Leverages the latest features of Next.js 14, including server actions, to enhance Developer Experience (DX) by streamlining server-side and client-side operations within a unified framework.

- **Shadcn Components for UI**: Utilizes Shadcn, a modern UI library, to create visually appealing and responsive user interfaces with ease. Shadcn components are designed for flexibility and style, ensuring a high-quality user experience.

- **Schema Validation with Zod**: Incorporates Zod for robust schema validation, allowing shared validation logic between the frontend and backend. This ensures data integrity and reduces redundancy in validation code.

- **Stripe Integration (Coming Soon)**: Future support for Stripe will simplify payment processing, making it easier to handle subscriptions, one-time payments, and other financial transactions directly within your application.

- **Database Safety with Supabase Types (Coming Soon)**: Ensures database interactions are type-safe by leveraging Supabase-generated types. This feature enhances code reliability and developer confidence by providing compile-time checks and autocomplete for database queries, directly aligning with Supabase schemas.

- **Multi-language Support with Next.js i18n (Coming Soon)**: Implements internationalization (i18n) using Next.js built-in support for multi-language functionality. This feature allows for the creation of a global SaaS platform, catering to users from different linguistic backgrounds by delivering a localized user experience.

- **SEO Optimization with Next.js Metadata**: Enhances Search Engine Optimization (SEO) through Next.js's capabilities to manage metadata efficiently. This feature improves the visibility of your application on search engines by allowing customized metadata for each page, including titles, descriptions, and Open Graph tags, ensuring better ranking and discoverability.

**Getting Started**

**Prerequisites**

- Git
- Node.js
- Supabase Account

**Setup**

1. Clone the Repository:

```bash
git clone https://github.com/yourusername/supa_template.git
cd supa_template
```

2. Install Dependencies:

```bash
npm install
```

3. Configure Supabase:

- Create a new project in Supabase.
- Copy the `example.env.local` file to `.env.local` and fill in your Supabase project details.

4. Run the Application:

```bash
npm run dev
```

5. Visit `http://localhost:3000` in your browser to see the application running.

**Environment Handling**
Next.js, by default, supports loading environment variables from .env.local, .env.development, .env.test, and .env.production files, among others. The specific environment file that gets used depends on the context in which your Next.js application is running:

Development (next dev): Next.js will automatically prioritize .env.development for environment variables if it exists, falling back to .env.local and then .env if not.

Production build (next build): In this case, .env.production will be used, with .env.local and .env as fallbacks. Note that .env.local is typically not used in production to avoid accidentally overriding production secrets with local development settings.

Testing: If you are running tests (for instance, with Jest or another testing framework), you can manually load .env.test using a package like dotenv or modify your testing setup to ensure that environment variables from .env.test are loaded.

**Contributing**

Contributions are welcome and appreciated! Please refer to the project's contribution guidelines for more information.

**License**

Distributed under the MIT License. See `LICENSE` for more information.

**Acknowledgments**

- Supabase for providing a powerful open-source Firebase alternative.
- The open-source community for continuous support and inspiration.

**Support**

For support, join the Discord server: [https://support.discord.com/hc/en-us/articles/360034842871-How-do-I-join-a-Server](https://support.discord.com/hc/en-us/articles/360034842871-How-do-I-join-a-Server)

By providing a solid foundation for SaaS applications, SUPA_TEMPLATE aims to lower the barrier to entry for developers of all skill levels. Whether you're a seasoned developer or just starting out, this project offers the tools and guidance needed to create robust, scalable applications on the Supabase platform.
