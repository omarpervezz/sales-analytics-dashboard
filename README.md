# Sales Analytics Dashboard - Custom Service

<div align="center">

**A professional real-time sales analytics dashboard service for small to medium businesses.**

Built with **Next.js 16** | **React 19** | **TypeScript 5** | **Tailwind CSS 4** | **Google Sheets API**

[View Live Demo](#live-demo) • [GitHub](#github) • [Services](#custom-services)

</div>

---

## 🎯 About This Project

This is a **production-ready dashboard template** that I use to deliver custom sales analytics solutions to small and medium-sized businesses. If your team is tracking sales in Google Sheets or Excel and needs real-time visibility into revenue, orders, commissions, and key metrics - this dashboard can solve that problem.

### What This Solves

**The Problem:**

- Sales teams waste 5+ hours weekly on manual reporting
- Revenue trends stay hidden in spreadsheet rows
- Commission tracking is error-prone and time-consuming
- Decision-makers can't see real-time business performance

**The Solution:**
This dashboard connects to your existing Google Sheets and visualizes all your sales data in real-time.

### What You Get

✅ **12 Dashboard Components** - KPIs, trends, performance metrics, commission tracking  
✅ **Real-Time Sync** - Data updates automatically from your Google Sheets  
✅ **Smart Filtering** - Filter by year, sales rep, or custom date ranges  
✅ **Professional UI** - Dark theme, responsive design, mobile-ready  
✅ **Production-Ready Code** - TypeScript, clean architecture, well-documented

---

## 🚀 For Businesses: Custom Dashboard Service

If you need a custom sales dashboard tailored to your business:

**I build custom versions of this dashboard for:**

- Wholesale and distribution companies
- B2B sales teams
- E-commerce businesses
- Agencies and service companies
- Any team with sales data in Google Sheets

**Typical Implementation:**

- Connect your Google Sheets (no data migration)
- Customize dashboard for your data structure
- Deploy to production
- Ongoing support (optional)

**Timeline:** 3-5 days  
**Cost:** $1,000 - $2,500 depending on customization

**[Book a Demo](mailto:your-email@omarpervez.com)** to see how this works for your business.

---

## 💻 For Developers: View the Code

This repository contains the full source code. Feel free to explore the architecture, component structure, and implementation patterns.

**GitHub:** [github.com/omarpervezz/sales-analytics-dashboard](https://github.com/omarpervezz/sales-analytics-dashboard)

---

## 🎯 Overview

**Sales Analytics Dashboard** is a production-ready SaaS solution that empowers sales teams to make data-driven decisions. Built with modern web technologies and designed for rapid deployment, this dashboard integrates seamlessly with Google Sheets, making it accessible to businesses of all sizes.

### Key Benefits for SMBs

✨ **Instant Visibility** - Real-time sales metrics and KPI tracking  
📊 **Easy Setup** - Connect your Google Sheets in minutes, no complex integration  
💰 **Cost Effective** - Leverage your existing data infrastructure  
🚀 **Quick Deployment** - Ready to deploy on Vercel, AWS, or any Node.js environment  
🔒 **Secure** - Enterprise-grade security with server-side processing  
📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile

---

## � Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher
- Google Cloud Project with Sheets API enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/omarpervezz/sales-analytics-dashboard.git
cd sales-analytics-dashboard

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

### Environment Setup

Create `.env.local` with your Google Sheets credentials:

```bash
GOOGLE_SHEETS_ID=your-spreadsheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="your-private-key-with-escaped-newlines"
```

**Need help setting up Google Sheets?** See our [Setup Guide](#setup-guide) below.

---

## 📊 Dashboard Features

### 12 Pre-built Components

| Component                 | Capability                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| **KPI Cards**             | 6 key metrics: Total Orders, Revenue, Completion Rate, Average Order Value |
| **Revenue Trend**         | Monthly revenue visualization with time-series data                        |
| **Top Performers**        | Top clients and products by revenue contribution                           |
| **Department Breakdown**  | Revenue distribution across departments                                    |
| **Sales Rep Performance** | Individual rep metrics and commission tracking                             |
| **Order Analytics**       | Status breakdown and order pipeline insights                               |
| **Client Segmentation**   | Revenue by client type (Retail, Wholesale, Enterprise, etc.)               |
| **Year-over-Year**        | Historical revenue comparison and growth trends                            |
| **Recent Orders**         | Latest transactions with status and details                                |

### Smart Filtering

- Filter by **Year** (2024, 2025, All)
- Filter by **Sales Representative** (individual or all)
- URL-based state (shareable, bookmarkable dashboards)
- Real-time updates on filter change

---

## 💻 Tech Stack

| Layer               | Technology           | Version |
| ------------------- | -------------------- | ------- |
| **Framework**       | Next.js (App Router) | 16.2.4  |
| **UI Library**      | React                | 19.2.4  |
| **Language**        | TypeScript           | 5       |
| **Styling**         | Tailwind CSS         | 4       |
| **Package Manager** | pnpm                 | 8+      |
| **API Integration** | Google Sheets API v4 | -       |
| **Data Generation** | Faker.js (Testing)   | 10.4.0  |
| **Linting**         | ESLint               | Latest  |

---

## 🛠

## 📁 Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with styling
│   ├── page.tsx            # Main dashboard (async server component)
│   └── globals.css         # Global Tailwind styles
│
├── features/sales/
│   ├── components/         # 12 dashboard components
│   │   ├── kpi-card.tsx
│   │   ├── dashboard-filters.tsx
│   │   ├── monthly-revenue-trend.tsx
│   │   ├── top-clients.tsx
│   │   ├── top-products.tsx
│   │   ├── department-revenue.tsx
│   │   ├── client-type-revenue.tsx
│   │   ├── sales-rep-performance.tsx
│   │   ├── sales-rep-commissions.tsx
│   │   ├── year-over-year-revenue.tsx
│   │   ├── order-status-breakdown.tsx
│   │   └── recent-orders.tsx
│   │
│   ├── repositories/       # Data access layer
│   │   ├── google-sheets-client.ts
│   │   ├── google-sheets-reader.ts
│   │   ├── google-sheets-sales-repository.ts
│   │   ├── mock-sales-repository.ts
│   │   └── sales-repository.types.ts
│   │
│   ├── services/           # Business logic
│   │   ├── sales-dashboard-service.ts
│   │   └── sales-service.ts
│   │
│   ├── types/
│   │   └── sales.ts        # TypeScript definitions
│   │
│   ├── utils/
│   │   └── formatters.ts   # Currency & data formatting
│   │
│   └── data/
│       └── mock-data.ts    # Sample data for testing
│
└── Configuration Files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── tailwind.config.js
    ├── eslint.config.mjs
    └── pnpm-workspace.yaml
```

**Architecture Pattern**: Feature-based structure with clear separation of concerns (Repository → Service → Component)

---

## 🔌 Google Sheets Integration

### How It Works

1. **Authenticate** - JWT service account credentials
2. **Fetch Data** - 6 core entities from different sheets (parallel fetching)
3. **Process** - Aggregate, filter, and calculate metrics
4. **Display** - Real-time dashboard updates

### Required Sheets

Your Google Sheet should have these worksheets:

| Sheet               | Columns                                                                |
| ------------------- | ---------------------------------------------------------------------- |
| **Departments**     | id, name                                                               |
| **SalesReps**       | id, name, email, departmentId, targetAmount                            |
| **Clients**         | id, name, type, city, country, assignedRepId                           |
| **Products**        | id, name, category, unitPrice                                          |
| **Orders**          | id, clientId, repId, productId, quantity, unitPrice, orderDate, status |
| **CommissionRules** | id, departmentId, rate                                                 |

### Data Types

```typescript
type ClientType =
  | "retail"
  | "wholesale"
  | "enterprise"
  | "distributor"
  | "other";
type OrderStatus = "pending" | "completed" | "cancelled";

interface Order {
  id: string;
  clientId: string;
  repId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  orderDate: string; // YYYY-MM-DD format
  status: OrderStatus;
}
```

---

## 📈 Setup Guide

### Step 1: Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google Sheets API**:
   - Search for "Google Sheets API"
   - Click "Enable"
4. Create a **Service Account**:
   - Go to "Service Accounts" in IAM section
   - Click "Create Service Account"
   - Grant "Editor" role
5. Create a **JSON Key**:
   - Go to Service Account → Keys tab
   - Create new key → Select JSON
   - Download and save securely

### Step 2: Prepare Your Google Sheet

1. Create a new Google Sheet
2. Add worksheets named: `Departments`, `SalesReps`, `Clients`, `Products`, `Orders`, `CommissionRules`
3. Add headers as specified in [Required Sheets](#required-sheets)
4. Populate with sample data or connect your real data
5. Share the sheet with your service account email (from JSON key)

### Step 3: Configure Environment

1. Extract from your JSON key file:
   - `project_id` → Not needed
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY` (with `\n` escaped as `\\n`)

2. Get your spreadsheet ID from the URL:

   ```
   https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit
   ```

3. Create `.env.local`:
   ```bash
   GOOGLE_SHEETS_ID=your-spreadsheet-id-here
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
   ```

### Step 4: Test Connection

Run the development server:

```bash
pnpm dev
```

If successful, you should see real data from your Google Sheet. If not, check:

- Sheet names match exactly
- Service account has access to the sheet
- Environment variables are set correctly
- Private key has proper newline escaping

---

## 📊 Core Features

### KPI Metrics (Calculated in Real-Time)

- **Total Orders** - Count of all orders
- **Completed Orders** - Orders with status = "completed"
- **Pending Orders** - Orders awaiting fulfillment
- **Cancelled Orders** - Cancelled transactions
- **Total Revenue** - Sum of completed order amounts
- **Average Order Value** - Revenue ÷ completed orders

### Analytics Methods (16 Available)

**Core Metrics:**

- `getTotalRevenue(filters?)`
- `getTotalOrders(filters?)`
- `getCompletedOrders(filters?)`
- `getPendingOrders(filters?)`
- `getCancelledOrders(filters?)`
- `getAverageOrderValue(filters?)`

**Analysis:**

- `getTopProducts(limit?, filters?)`
- `getTopClients(limit?, filters?)`
- `getDepartmentRevenue(filters?)`
- `getRevenueByClientType(filters?)`

**Performance:**

- `getSalesRepPerformance(filters?)`
- `getSalesRepCommissions(filters?)`

**Trends:**

- `getMonthlyRevenueTrend(filters?)`
- `getYearOverYearRevenue()`
- `getOrderStatusBreakdown(filters?)`
- `getRecentOrders(limit?, filters?)`

All methods support optional filters: `{ year?: string, repId?: string }`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to connect GitHub repository
```

**Environment Variables on Vercel:**

1. Go to Project Settings → Environment Variables
2. Add all three variables from `.env.local`
3. Redeploy

### Deploy to Other Platforms

**AWS EC2:**

```bash
npm install -g pm2
pnpm build
pm2 start "npm start"
```

**Docker:**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build
ENV NODE_ENV=production
CMD ["pnpm", "start"]
```

**Self-Hosted (Linux):**

```bash
pnpm build
pnpm start  # Runs on port 3000 by default
```

---

## 🔒 Security & Best Practices

✅ **Security Features**

- Google credentials stored in environment variables only
- No API keys exposed to frontend
- All Sheets API calls execute server-side
- JWT authentication with read-only scopes
- TypeScript strict mode for type safety

✅ **Performance**

- Server-side data fetching (async server components)
- Parallel API requests for 6 data entities
- Efficient filtering without redundant calculations
- Responsive UI with Tailwind CSS

✅ **Code Quality**

- 100% TypeScript for type safety
- ESLint configuration for code standards
- Repository pattern for data access
- Service layer for business logic
- Reusable, testable components

---

## 📈 Performance & Scalability

### Current Capacity

- Handles **500+ orders** efficiently
- Filters across **multiple years** seamlessly
- **8+ sales representatives** tracked
- Real-time metric calculations

### Optimization Recommendations

- Implement caching for frequently accessed data (React Query/SWR)
- Add pagination for large order lists
- Use CDN for static assets
- Consider data aggregation at Google Sheets level
- Lazy load chart libraries for faster initial load

### Monitoring

- Track API response times
- Monitor dashboard load times
- Set up alerts for API errors
- Log filter usage patterns

---

## 🧪 Testing & Development

### Development Commands

```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code (if configured)
pnpm format
```

### Testing with Mock Data

If Google Sheets credentials are missing, the app automatically falls back to mock data:

- 500 sample orders (2024-2025)
- 40 clients across different types
- 20 products with realistic pricing
- 8 sales representatives
- 4 departments with commission rules

This allows you to develop and test without Google Sheets.

---

## 📞 Support & Documentation

### Common Issues

**Q: "Error: Missing environment variable GOOGLE_SHEETS_ID"**

- A: Create `.env.local` with all three required variables

**Q: "Error: Service account does not have access to this spreadsheet"**

- A: Share your Google Sheet with the service account email address

**Q: "No data appears on dashboard"**

- A: Verify sheet names match exactly (case-sensitive): Departments, SalesReps, Clients, Products, Orders, CommissionRules

**Q: "Dashboard shows mock data instead of my data"**

- A: Mock data loads when Google Sheets is unavailable. Check your credentials and internet connection.

### Getting Help

- 📖 Read the [Setup Guide](#-setup-guide)
- 🐛 Check [Common Issues](#common-issues)
- 💬 Open an issue on GitHub
- 📧 Contact support

---

## 🔄 CI/CD Integration

### GitHub Actions Example

```yaml
name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: "pnpm"
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm build
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod
```

---

## 📚 API Reference

### Main Dashboard Service

```typescript
getGoogleSheetsDashboardSummary(filters?: {
  year?: string  // "2024", "2025", etc.
  repId?: string // "rep-1", "rep-2", etc.
})

// Returns
{
  // KPIs
  totalOrders: number
  completedOrders: number
  pendingOrders: number
  cancelledOrders: number
  totalRevenue: number
  averageOrderValue: number

  // Analytics
  topClients: Array
  topProducts: Array
  departmentRevenue: Array
  clientTypeRevenue: Array
  salesRepPerformance: Array
  monthlyRevenueTrend: Array
  yearOverYearRevenue: Array
  salesRepCommissions: Array
  orderStatusBreakdown: Array
  recentOrders: Array

  // Raw data
  departments: Department[]
  salesReps: SalesRep[]
  clients: Client[]
  products: Product[]
  orders: Order[]
  commissionRules: CommissionRule[]
}
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:

- Code follows ESLint standards
- Types are properly defined
- Components are reusable
- Documentation is updated

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

MIT License - Feel free to use in personal and commercial projects.

---

## 👤 Author

Created with ❤️ for sales teams who deserve better analytics.

- **Portfolio**: [Your Website]
- **GitHub**: [github.com/omarpervezz]
- **LinkedIn**: [linkedin.com/in/yourprofile]

---

## 🌟 Show Your Support

If this project helps you, please give it a ⭐ on GitHub!
