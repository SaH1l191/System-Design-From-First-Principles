# System Design from First Principles

> A comprehensive, stage-by-stage reference for backend engineers and system design interviews — built from the ground up.

[![Project built with Next.js + Nextra](https://img.shields.io/badge/next.js-%23000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Documentation framework](https://img.shields.io/badge/nextra-%23000000?style=flat&logo=nextra&logoColor=white)](https://nextra.org/)
[![React](https://img.shields.io/badge/react-%2361DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## What Is This?

**System Design from First Principles (SDFP)** is an open-source documentation site that teaches system design by starting from fundamentals — not by memorizing acronyms. Each topic is broken into:

1. **The Problem** — why this concept exists and what goes wrong without it
2. **First Principles** — the core idea explained from the ground up
3. **How It Works** — mechanics, internals, and data structures
4. **Tradeoffs** — comparison tables and decision frameworks
5. **Interview Tips** — when to bring it up and common mistakes to avoid
6. **Visual Models** — ASCII diagrams, flow charts, and architecture boxes

---

## The Stages

The content is organized into **11 stages** that progress from fundamentals to advanced topics:

| Stage | Title | Topics |
|-------|-------|--------|
| 01 | **Core Building Blocks** | APIs, Databases, Caching, Load Balancing, Proxies |
| 02 | **Scalability & Performance** | Horizontal vs Vertical Scaling, Sharding, Replication, Rate Limiting |
| 03 | **Distributed Systems** | CAP Theorem, Consistency Models, Consensus Algorithms, Transactions, PACELC |
| 04 | **Advanced Topics** | Design Patterns, Message Queues, Event Sourcing & CQRS |
| 05 | **Architecture Patterns** | Microservices, Serverless, Event-Driven, Domain-Driven Design |
| 06 | **Design Decisions** | Tradeoff frameworks and decision matrices |
| 07 | **Concurrency & Parallelism** | Threading, Locks, Distributed Coordination |
| 08 | **Observability & Monitoring** | Logging, Metrics, Tracing, Alerting |
| 09 | **Security** | Authentication, Encryption, Threat Models |
| 10 | **Real-Time & Communication** | WebSockets, Server-Sent Events, Video Streaming |
| 11 | **Location & Geospatial** | Spatial Indexes, Geohashing, H3 |
| — | **Resources** | Master checklist and additional references |

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) — or npm/yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/SaH1l191/sys-design-site.git
cd sys-design-site

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Tech Stack

- **[Next.js](https://nextjs.org/)** — React framework for static page generation
- **[Nextra](https://nextra.org/)** — Markdown-based documentation framework built on Next.js
- **[Nextra Theme Docs](https://nextra-theme-docs.vercel.app/)** — Documentation theme with sidebar, table of contents, and copy-to-code features
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe configuration and components

---

## Project Structure

```
sys-design-site/
├── pages/                  # MDX documentation pages and navigation
│   ├── _meta.json          # Site-wide sidebar configuration
│   ├── index.mdx           # Homepage / overview
│   ├── 01-core-building-blocks/   # Stage 1 content
│   ├── 02-scalability/            # Stage 2 content
│   ├── 03-distributed-systems/    # Stage 3 content
│   ├── 04-advanced-topics/        # Stage 4 content
│   ├── 05-architecture-patterns/  # Stage 5 content
│   ├── 06-design-decisions/       # Stage 6 content
│   ├── 07-concurrency/            # Stage 7 content
│   ├── 08-observability/          # Stage 8 content #Brewing
│   ├── 09-security/               # Stage 9 content #Brewing
│   ├── 10-real-time/              # Stage 10 content #Brewing
│   ├── 11-geospatial/             # Stage 11 content #Brewing
│   └── resources/                 # Cheat sheets & checklists
├── components/             # Shared React components (e.g., Hero)
├── public/                 # Static assets (favicon, custom styles)
├── styles/                 # Global stylesheets
├── theme.config.tsx        # Nextra theme configuration (logo, meta, fonts)
├── next.config.mjs         # Next.js + Nextra setup
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

---

## Contributing

This project is **built in the open and improved by the community**. Contributions of all sizes are welcome!

Whether it's fixing a typo, adding a new diagram, clarifying an explanation, or expanding a section — every improvement makes this reference better for the next engineer.

**[Contribute on GitHub →](https://github.com/SaH1l191/sys-design-site)**

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-fix`)
3. Commit your changes (`git commit -m 'Add some amazing content'`)
4. Push to the branch (`git push origin feature/amazing-fix`)
5. Open a Pull Request

---



<p align="center">
  <em>Learn the fundamentals, and the frameworks become obvious.</em>
</p>
