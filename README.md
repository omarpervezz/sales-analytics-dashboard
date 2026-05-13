````markdown
# Sales Analytics Dashboard

<div align="center">

**A professional real-time sales analytics platform for small and medium-sized businesses.**

Built with **Next.js 16** • **React 19** • **TypeScript 5** • **Tailwind CSS 4** • **Google Sheets API**

[Live Demo](#live-demo) • [Features](#-dashboard-features) • [Architecture](#-architecture)

</div>

---

## 🎯 About This Project

This project showcases a modern sales analytics dashboard designed for businesses that manage sales operations using Google Sheets or Excel.

It provides real-time visibility into revenue, commissions, sales performance, client analytics, and operational metrics — without requiring a full migration away from existing spreadsheet workflows.

---

## 🚨 What Problem Does This Solve?

Many growing businesses still manage operations using spreadsheets.

That works initially — until reporting becomes slow, manual, and difficult to scale.

### Common Challenges

- Sales teams spending hours building reports manually
- Revenue trends hidden across spreadsheet tabs
- Commission calculations becoming error-prone
- No centralized performance visibility
- Leadership lacking real-time business insights
- Difficulty identifying top-performing clients and products

---

## ✅ What This Dashboard Provides

- Real-time sales analytics
- Revenue and KPI tracking
- Commission calculations
- Sales representative performance metrics
- Monthly and year-over-year trend analysis
- Client and product performance insights
- Smart filtering and dashboard state management
- Responsive UI optimized for desktop and mobile

---

## 📸 Dashboard Preview

### Main Dashboard

![Main Dashboard](./public/dashboard-preview.png)

### Revenue Analytics

![Revenue Analytics](./public/revenue-preview.png)

### Mobile Responsive View

![Mobile Dashboard](./public/mobile-preview.png)

---

## 🚀 Custom Dashboard Implementation

I build customized versions of this dashboard for businesses that need better visibility into their sales operations.

### Ideal For

- Wholesale & distribution companies
- B2B sales teams
- E-commerce businesses
- Agencies & service companies
- Businesses managing sales inside Google Sheets

### Typical Implementation Includes

- Connecting your existing Google Sheets
- Mapping your business data structure
- Customizing KPIs and dashboard modules
- Production deployment
- Optional ongoing support

### Timeline

Typical implementation timeline is **1–2 weeks** depending on complexity and integrations.

### Need Something Similar?

📧 Contact: your-email@example.com

---

## 💻 Technical Overview

This repository showcases the architecture, implementation patterns, and frontend engineering practices used to build scalable analytics dashboards with modern web technologies.

---

## 🎯 Platform Overview

**Sales Analytics Dashboard** is a production-ready analytics platform designed for rapid deployment and real-time business visibility.

The platform integrates directly with Google Sheets, allowing businesses to continue using their existing workflows while gaining access to modern analytics capabilities.

---

## ✨ Key Benefits

✨ Real-time business visibility  
📊 Centralized KPI tracking  
💰 No expensive enterprise software required  
🚀 Rapid deployment architecture  
🔒 Secure server-side processing  
📱 Responsive mobile-ready UI  
⚡ Fast filtering and dashboard updates

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher
- Google Cloud Project with Sheets API enabled

---

### Installation

```bash
# Clone repository
git clone https://github.com/omarpervezz/sales-analytics-dashboard.git

# Enter project
cd sales-analytics-dashboard

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local

# Start development server
pnpm dev
```
````

Open:

```bash
http://localhost:3000
```

---

## 🔑 Environment Variables

Create `.env.local`

```bash
GOOGLE_SHEETS_ID=your-spreadsheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="your-private-key-with-escaped-newlines"
```

---

## 📊 Dashboard Features

### Analytics Modules

| Feature                 | Description                            |
| ----------------------- | -------------------------------------- |
| KPI Metrics             | Revenue, orders, AOV, completion rates |
| Revenue Trends          | Monthly and yearly sales visualization |
| Client Analytics        | Top clients by revenue                 |
| Product Analytics       | Best-selling products                  |
| Sales Rep Performance   | Rep-level performance metrics          |
| Commission Tracking     | Automated commission calculations      |
| Order Breakdown         | Order pipeline and statuses            |
| Year-over-Year Analysis | Historical revenue comparison          |
| Recent Orders           | Latest transaction visibility          |

---

## 🎛 Smart Filtering

- Filter by year
- Filter by sales representative
- URL-based dashboard state
- Shareable filtered views
- Real-time updates

---

## 💻 Tech Stack

| Layer           | Technology        |
| --------------- | ----------------- |
| Framework       | Next.js 16        |
| UI Library      | React 19          |
| Language        | TypeScript 5      |
| Styling         | Tailwind CSS 4    |
| API Integration | Google Sheets API |
| Package Manager | pnpm              |
| Linting         | ESLint            |

---

## 📁 Architecture

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── features/sales/
│   ├── components/
│   ├── repositories/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── data/
│
└── configuration files
```

### Architecture Highlights

- Feature-based architecture
- Repository pattern
- Service layer abstraction
- Type-safe implementation
- Reusable dashboard components
- Clear separation of concerns

---

## 🔌 Google Sheets Integration

### Integration Flow

1. Authenticate using service account credentials
2. Fetch data from multiple worksheets
3. Process and aggregate analytics
4. Render dashboard metrics in real-time

---

## 📄 Required Google Sheets

| Worksheet       |
| --------------- |
| Departments     |
| SalesReps       |
| Clients         |
| Products        |
| Orders          |
| CommissionRules |

---

## 📈 Setup Guide

### Step 1 — Google Cloud Setup

1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a service account
4. Generate JSON credentials
5. Save credentials securely

---

### Step 2 — Prepare Your Spreadsheet

Create worksheets:

- Departments
- SalesReps
- Clients
- Products
- Orders
- CommissionRules

Share the spreadsheet with your service account email.

---

### Step 3 — Configure Environment Variables

Extract values from your Google credentials file:

```bash
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

---

### Step 4 — Run The Application

```bash
pnpm dev
```

---

## 📊 Core Metrics

### KPI Calculations

- Total Orders
- Completed Orders
- Pending Orders
- Cancelled Orders
- Total Revenue
- Average Order Value

---

## 📈 Analytics Features

### Revenue Analysis

- Monthly revenue trends
- Year-over-year growth
- Revenue segmentation
- Department performance

### Sales Analysis

- Rep performance tracking
- Commission calculations
- Client analytics
- Product analytics

---

## 🚀 Deployment

### Recommended: Vercel

```bash
npm i -g vercel
vercel
```

Add environment variables inside Vercel project settings.

---

### Other Deployment Options

- AWS EC2
- Docker
- Self-hosted Linux servers
- Any Node.js hosting provider

---

## 🔒 Security & Best Practices

### Security

- Server-side API processing
- Environment variable protection
- No frontend credential exposure
- Type-safe implementation

### Performance

- Async server components
- Parallel data fetching
- Optimized filtering
- Responsive rendering

### Code Quality

- TypeScript strict mode
- ESLint configuration
- Modular architecture
- Reusable components

---

## 📈 Scalability

### Current Capacity

- Handles hundreds of sales records efficiently
- Multi-year filtering support
- Multiple sales representatives
- Real-time calculations

### Future Improvements

- Data caching
- Pagination
- Advanced charting
- Multi-tenant support
- Role-based access control

---

## 🧪 Development

### Commands

```bash
# Development
pnpm dev

# Build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

---

## 🧪 Mock Data Support

If Google Sheets credentials are unavailable, the dashboard automatically falls back to mock data for local development and testing.

Includes:

- Sample orders
- Clients
- Products
- Sales reps
- Departments
- Commission rules

---

## 📞 Support

### Common Issues

### Missing Environment Variables

Ensure `.env.local` contains:

```bash
GOOGLE_SHEETS_ID
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
```

### Google Sheets Access Issues

Make sure your spreadsheet is shared with the service account email.

### Dashboard Showing Mock Data

This occurs when Google Sheets credentials are unavailable or invalid.

---

## 📚 API Example

```typescript
getGoogleSheetsDashboardSummary(filters?: {
  year?: string
  repId?: string
})
```

Returns:

```typescript
{
  (totalRevenue,
    totalOrders,
    topClients,
    topProducts,
    salesRepPerformance,
    monthlyRevenueTrend,
    recentOrders);
}
```

---

## 👤 Author

Built by Omar Pervez

🌐 Portfolio: [https://www.omarpervez.com/](https://www.omarpervez.com/)
💼 LinkedIn: [https://www.linkedin.com/in/omarpervz/](https://www.linkedin.com/in/omarpervz/)
📧 Email: [omar@omarpervez.com](mailto:omar@omarpervez.com)

---

## 🌟 Support The Project

If you found this project useful, consider giving it a ⭐ on GitHub.

```

```
