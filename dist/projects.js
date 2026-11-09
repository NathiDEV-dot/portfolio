window.PORTFOLIO.projects = [
  {
    name: 'Iaac Commerce — Saelune Active', type: 'Full-stack development · AWS · React · .NET 10', tag: '01', color: '#b9c4ff',
    description: 'Built a reusable ecommerce platform and deployed the Saelune Active storefront to AWS. Developed React and TypeScript storefront and admin apps, a .NET 10 serverless API, and AWS infrastructure using CDK.',
    highlights: [
      'Designed DynamoDB tables and indexes around catalog, inventory, customer, and order access patterns.',
      'Implemented variant-based catalog browsing, customer profiles, carts, favorites, and admin product management.',
      'Built checkout workflows with atomic stock reservations, idempotency protections, Peach Payments hosted checkout, and Bob Go delivery integration.',
      'Used S3 and CloudFront for static hosting and product media; Cognito, SES, and SQS for identity, transactional email, and background processing.',
      'Organized backend features using Clean Architecture and vertical slices.'
    ],
    stack: 'React, TypeScript, C#, .NET 10, AWS CDK, Lambda, API Gateway, DynamoDB, S3, CloudFront, Cognito, SQS, SES',
    url: 'https://dnmpjdbyl3ja5.cloudfront.net/', video: '', images: []
  },
  {
    name: 'Primary Onboarding', type: 'Full-Stack SaaS Platform', tag: '02', color: '#acd3c1',
    description: 'Designed and built a multi-tenant business operations platform for South African freelancers and small businesses. It supports customer management, quotes, service agreements, invoicing, recurring email schedules, manual payment and receipt tracking, expense capture, and business reports.',
    highlights: [
      'Built a static React, Next.js and TypeScript frontend, delivered through Amazon S3 and CloudFront.',
      'Developed an ASP.NET Core API on .NET 10 with AWS Lambda and API Gateway.',
      'Modeled tenant- and branch-scoped access patterns across eight DynamoDB tables.',
      'Used AWS CDK and TypeScript to define and deploy infrastructure as code.',
      'Integrated Amazon Cognito authentication, SES email, SQS, EventBridge Scheduler, and private S3 file storage.',
      'Applied Clean Architecture, CQRS, and vertical-slice organization across backend features.',
      'Added CI checks with GitHub Actions, xUnit tests, DynamoDB Local integration tests, and CDK infrastructure assertions.'
    ],
    stack: 'React, Next.js, TypeScript, C#/.NET 10, AWS Lambda, API Gateway, DynamoDB, S3, CloudFront, Cognito, SES, SQS, EventBridge Scheduler, CDK, GitHub Actions',
    url: 'https://d3223h59o0v7yn.cloudfront.net/', video: '', images: []
  },
  {
    name: 'Serverless Blog & Custom CMS', type: 'Full-Stack Developer · Reusable publishing platform', tag: '03', color: '#edb6a4',
    description: 'Designed and developed a reusable, production-oriented blogging and content management platform for client websites. Each client gets a complete, easy-to-manage publication without rebuilding the backend, deployment pipeline, or content workflows for every project. Built with C# and .NET 10, a React/Next.js frontend, and AWS CDK infrastructure.',
    highlights: [
      'A CMS for creating, editing, reviewing, scheduling, publishing, and deleting articles.',
      'Editorial approvals, with role-based access for administrators and editors.',
      'Markdown and rich-text authoring, image and video uploads, thumbnails, and selectable blog layouts.',
      'Categories, search, category archive pages, SEO fields, metadata, and sitemap support.',
      'Newsletter signup with email confirmation, subscriber management, and scheduled campaigns.',
      'Website branding controls, contact forms, and an administrator inbox for submissions.',
      'A responsive public website and CMS with light and dark themes.',
      'Content caching and CloudFront routing to improve page load and publishing experiences.',
      'Separate AWS resources for each client, deployed into the client’s own AWS account using infrastructure as code.'
    ],
    stack: 'C#, .NET 10, React, Next.js, AWS CDK, Lambda, API Gateway, DynamoDB, S3, CloudFront, Cognito, SES, SQS',
    url: 'https://d2d5b0j6iun0gv.cloudfront.net/', video: '', images: []
  }
];
window.PORTFOLIO.projects[0].images = ['media/saelune-home.png', 'media/saelune-shop.png'];
window.PORTFOLIO.projects[1].images = ['media/primary-home.png', 'media/primary-features.png'];
window.PORTFOLIO.projects[2].images = ['media/blog-home.png'];
