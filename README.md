# UI Automation

Playwright UI automation for the Conduit application using **TypeScript** and the **Page Object Model (POM)**.

## Setup

```bash
npm install
npx playwright install
```

Create a `.env` file in the project root:

```env
BASE_URL=https://conduit.bondaracademy.com
USEREMAIL=your-email@example.com
PASSWORD=your-password
```

## Commands

Run all tests:

```bash
npm test
```

Run article tests:

```bash
npm run test:article
```

View HTML report:

```bash
npx playwright show-report
```

Build check:

```bash
npm run build
```

## Tech Stack

* Playwright
* TypeScript
* Page Object Model (POM)
* Playwright HTML Reporter
