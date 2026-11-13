// Portfolio content.
window.PORTFOLIO = {
  "name": "Nkosinathi Tshabalala",
  "role": "Software Engineer | C# / .NET | AWS Serverless",
  "email": "",
  "github": "https://github.com/NathiDEV-dot",
  "linkedin": "",
  "about": "I build full-stack products and reusable platforms with C#/.NET and AWS. Explore my projects, read a note, or open My Documents for my CV.",
  "skills": [
    "C# / .NET",
    "React / TypeScript",
    "AWS Serverless",
    "Data and persistence",
    "Architecture / reliability",
    "Testing / delivery",
    "APIs and integrations"
  ],
  "projects": [
    {
      "name": "Orbit dashboard",
      "type": "Web application",
      "color": "#b9c4ff",
      "tag": "01",
      "description": "An illustrative analytics workspace with a calm interface and a clear view of what matters.",
      "stack": "React / TypeScript / CSS",
      "url": "",
      "video": "",
      "images": []
    },
    {
      "name": "Forma studio",
      "type": "Design & development",
      "color": "#edb6a4",
      "tag": "02",
      "description": "An illustrative portfolio concept for a small independent creative studio.",
      "stack": "HTML / CSS / JavaScript",
      "url": "",
      "video": "",
      "images": []
    },
    {
      "name": "Pocket weather",
      "type": "Weekend experiment",
      "color": "#acd3c1",
      "tag": "03",
      "description": "An illustrative compact weather app built around simple, glanceable information.",
      "stack": "JavaScript / API / UI design",
      "url": "",
      "video": "",
      "images": []
    }
  ],
  "documents": [
    {
      "name": "Nkosinathi Tshabalala - CV.pdf",
      "url": "documents/Nkosinathi_Tshabalala_CV.pdf",
      "download": true
    },
    {
      "name": "About me.txt",
      "text": "NKOSINATHI TSHABALALA\nSoftware Engineer | C# / .NET | AWS Serverless\nPretoria, South Africa\n\nI build full-stack products, reusable backend platforms and event-driven systems. My work focuses on C#/.NET backend development and AWS serverless applications, supported by React and TypeScript frontends.\n\nMy projects include an ecommerce platform for Saelune Active, a business operations platform for South African freelancers and small businesses, and a reusable blog and CMS platform.\n\nI use Clean Architecture, automated testing and infrastructure as code to keep systems understandable and repeatable.\n\nThis desktop is a small collection of that work. My Projects opens the live websites; Media Player contains their screenshot walkthroughs; this folder contains my CV and background.\n\nGitHub: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/"
    },
    {
      "name": "Project overview.txt",
      "text": "SELECTED PROJECTS\n=================\n\nIAAC COMMERCE / SAELUNE ACTIVE\nA reusable ecommerce platform with React/TypeScript storefront and admin apps, a .NET 10 serverless API and AWS CDK infrastructure.\n\nWork includes variant-based catalog browsing, profiles, carts, favourites and product administration. Checkout uses atomic stock reservations and idempotency protections, with Peach Payments hosted checkout and Bob Go delivery integration.\n\nLive: https://dnmpjdbyl3ja5.cloudfront.net/\n\nPRIMARY ONBOARDING\nA multi-tenant business operations platform for South African freelancers and small businesses. It brings customers, quotes, service agreements, invoices, payment records, receipts, expenses and reporting into one workflow.\n\nThe static React/Next.js frontend is served through S3 and CloudFront. An ASP.NET Core API runs on Lambda behind API Gateway, with tenant- and branch-scoped DynamoDB access patterns. Cognito, SES, SQS and EventBridge Scheduler support authentication and email automation.\n\nLive: https://d3223h59o0v7yn.cloudfront.net/\n\nSERVERLESS BLOG & CUSTOM CMS\nA reusable publication platform with article drafting, editorial approval, scheduling, publishing, rich-text/Markdown authoring, media uploads and role-based access.\n\nThe public site supports categories, search, SEO metadata, newsletters, branding and contact forms. CDK provisions separate AWS resources for client deployments.\n\nLive: https://d2d5b0j6iun0gv.cloudfront.net/\n\nPGLN.AUTH\nA reusable .NET 10 authentication platform using ASP.NET Core, EF Core and PostgreSQL. Features include email verification, JWT access tokens, refresh-token rotation with replay detection, password recovery, sessions and trusted devices.\n\nRepository: https://github.com/NuGetPackagesPGLN/PGLN.JwtAuth"
    },
    {
      "name": "Engineering approach.txt",
      "text": "HOW I APPROACH BACKEND WORK\n==========================\n\nSTART WITH THE WORKFLOW\nIdentify the business operation, who may perform it and the data it needs. In Primary Onboarding, a customer record carries through quotes, agreements, invoices and payment tracking.\n\nMAKE BOUNDARIES EXPLICIT\nClean Architecture separates domain rules and application use cases from AWS and database adapters. Vertical slices group code around capabilities; CQRS makes reads and writes explicit.\n\nDESIGN THE DATA ACCESS\nModel DynamoDB keys and indexes around concrete catalog, customer, inventory, order, tenant and branch queries. Keep authorization alongside the operation rather than trusting browser-side filtering.\n\nEXPECT RETRIES\nCheckout and background work need clear duplicate-handling rules. My projects use idempotency protections, atomic stock reservations, transactional outbox/inbox patterns and queued email processing where appropriate.\n\nKEEP DEPLOYMENTS REPEATABLE\nUse AWS CDK and TypeScript to declare infrastructure. Static sites and media are delivered through S3 and CloudFront; APIs and background processing use Lambda and managed AWS services.\n\nCHECK BUSINESS RULES AND INFRASTRUCTURE\nMy project work includes xUnit tests, DynamoDB Local integration tests, architecture tests, CDK infrastructure assertions and GitHub Actions CI.\n\nThese are approaches used across my projects; the exact architecture depends on the product and its requirements."
    },
    {
      "name": "Education and community.txt",
      "text": "EDUCATION & COMMUNITY\n=====================\n\nBSc INFORMATION TECHNOLOGY\nSoftware Engineering\nEduvos, Pretoria\n2022-2026\n\nAcademic results listed in my CV:\n76% average\n18 distinctions\n\nEDUDEV CODING CLUB\nCo-founder\n\nCo-founded a student coding club, organized weekly programming challenges and participated in peer code reviews.\n\nPROJECT-BASED EXPERIENCE\nMy hands-on integration work includes REST/JSON APIs, XML, Amazon SQS, Lambda, SES, Cognito, Peach Payments and Bob Go, delivered through personal and client projects.\n\nOPEN-SOURCE LIBRARIES\nPGLN.Media: a modular .NET media library with file-signature validation, MIME/extension checks, upload limits, storage abstractions and Azure storage integration.\n\nSAValidation: South African phone-number validation and normalization, operator detection, landline area identification and structured validation results.\n\nSee the CV in this folder for a concise overview of my skills and projects."
    }
  ],
  "notes": [
    {
      "title": "One last bug.txt",
      "text": "ONE LAST BUG\n============\n\nMy code and I have a healthy relationship.\n\nI tell it what to do.\nIt does exactly what I said.\nWe both agree this is the problem.\n\nAnyway, the fix is probably one line.\nFinding that line is tomorrow's problem."
    },
    {
      "title": "Before I ship.txt",
      "text": "BEFORE I SHIP\n=============\n\n[ ] Test the unhappy path. Then the really unhappy path.\n[ ] Check tenant boundaries. A filter is not authorization.\n[ ] Make retries safe. That message might arrive twice.\n[ ] Check the logs for secrets before the logs check me.\n[ ] Try it on a small screen and a slow connection.\n[ ] Make sure the error says something useful.\n[ ] Read the diff once more. Especially the tiny change.\n\nReminder to future me:\nA green build is a good start. Open the actual website."
    },
    {
      "title": "Too many tabs.txt",
      "text": "TOO MANY TABS\n=============\n\nA few thoughts while catching up on tech headlines.\n\nAI coding tools:\nI like help writing the first draft. I still want to understand the failure modes before I ship it.\n\nNew frameworks:\nThe demo is always exciting. I want the follow-up article about maintaining it six months later.\n\nCloud announcements:\nBefore adding another service, ask whether the existing queue and a small function would do the job.\n\nMy favourite kind of release note:\n\"We fixed the thing that has been quietly annoying you.\"\n\nPersonal opinions, subject to revision after coffee."
    }
  ],
  "photo": "media/nkosinathi-portrait-small.jpg",
  "photoFull": "media/nkosinathi-portrait.png",
  "skillDetails": {
    "C# / .NET": {
      "text": "C# / .NET\n=========\n\nASP.NET Core APIs and backend platforms on .NET 10.\n\nApplied in Iaac Commerce, Primary Onboarding, the blog/CMS and PGLN.Auth. Work includes authentication, business workflows, validation and background processing.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/CSharp and NET.txt"
    },
    "React / TypeScript": {
      "text": "REACT / TYPESCRIPT\n==================\n\nReact and TypeScript storefronts, administration interfaces and business applications. Next.js static exports are used in Primary Onboarding and the publishing platform.\n\nApplied in product browsing, client workflows, invoice interfaces and content management.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/React and TypeScript.txt"
    },
    "AWS Serverless": {
      "text": "AWS SERVERLESS\n==============\n\nLambda and API Gateway for APIs; S3 and CloudFront for static sites and media; Cognito for identity; SES for email; SQS and EventBridge Scheduler for background and scheduled work.\n\nInfrastructure is defined with AWS CDK and TypeScript.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/AWS Serverless.txt"
    },
    "Data and persistence": {
      "text": "DATA AND PERSISTENCE\n====================\n\nDynamoDB tables and indexes designed around catalog, inventory, customer, order, tenant and branch access patterns.\n\nPGLN.Auth uses EF Core and PostgreSQL. Other data experience listed in my CV includes SQL Server.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/Data and Persistence.txt"
    },
    "Architecture / reliability": {
      "text": "ARCHITECTURE / RELIABILITY\n==========================\n\nClean Architecture separates business rules from infrastructure. Vertical slices organize capabilities; CQRS separates queries and commands.\n\nProject work includes atomic stock reservations, idempotency protections, refresh-token replay detection and transactional outbox/inbox patterns.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/Architecture and Reliability.txt"
    },
    "Testing / delivery": {
      "text": "TESTING / DELIVERY\n==================\n\nxUnit, integration tests, DynamoDB Local, architecture tests and CDK infrastructure assertions.\n\nGitHub Actions supports continuous integration. Git, Docker and Postman support development and delivery.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/Testing and Delivery.txt"
    },
    "APIs and integrations": {
      "text": "APIS AND INTEGRATIONS\n=====================\n\nREST/JSON APIs and XML, Peach Payments hosted checkout, Bob Go delivery, Amazon Cognito, SES, SQS and Lambda.\n\nExperience comes from personal and client projects, including ecommerce checkout and scheduled transactional email.\n\nExplore my code: https://github.com/NathiDEV-dot\nPortfolio: https://nathidev-dot.github.io/portfolio/\n",
      "url": "downloads/Integrations.txt"
    }
  }
};
