# 📑 Development Guide — Game2Earn Team

> **Required reading before writing any code.** This document explains how to work on the project without breaking the live website.

---

## 1. Branches — How We Organize Our Work

| Branch | Role | Access |
|---|---|---|
| `main` | 🔴 **PRODUCTION** — the live website | ⛔ Never touch directly |
| `dev` | 🟡 **GLOBAL TESTING** — all code comes together here | ✅ Via Pull Request only |
| `feature/your-task-name` | 🟢 **Your personal working branch** | ✅ Free to use |

---

## 2. Daily Workflow — Step by Step

### Step 1 — Start Your Day

**Always** pull the latest team code before writing anything:

```bash
git checkout dev
git pull origin dev
```

> ⚠️ Never skip this step. Working on an outdated version leads to merge conflicts later.

---

### Step 2 — Create Your Working Branch

```bash
git checkout -b feature/your-task-name
```

**Good branch name examples:**
```bash
git checkout -b feature/arena-page
git checkout -b feature/eclats-system
git checkout -b fix/score-calculation-bug
git checkout -b feature/sdk-submit-score
```

---

### Step 3 — Code and Test Locally

Use your usual method to see changes in real time:

```bash
# If the project uses Vite (recommended)
npm run dev

# If the project uses Create React App
npm start
```

> 🌐 Your local URL will typically be: **http://localhost:5173** (Vite)

Code and test normally with hot reload enabled.

---

### Step 4 — Cloudflare Validation (Before Pushing)

Once your code is ready, **verify it will work correctly on Cloudflare servers** before sharing — especially for API calls.

**1. Build the project:**
```bash
npm run build
```

**2. Run the Cloudflare emulator:**
```bash
npx wrangler pages dev ./dist
```

**3. Test at:** http://localhost:8788

> ✅ If everything works here, your code is ready to push.  
> ❌ If something breaks, fix it before moving to the next step.

---

## 3. Pushing Your Work to GitHub

Once everything is validated locally:

```bash
# 1. Stage all your modified files
git add .

# 2. Create a commit with a clear message
git commit -m "Add Arena page with category filters"

# 3. Push your branch to GitHub
git push origin feature/your-task-name
```

**Good commit message examples:**
```
Add game card component
Fix Eclats calculation at end of game
Integrate POST /api/scores endpoint
Add live leaderboard with WebSocket
```

---

## 4. Merging Your Work

1. Go to **GitHub.com** → the Game2Earn repository
2. Click **"Compare & pull request"** (appears automatically after pushing)
3. Make sure the PR goes from `feature/your-branch` → `dev` (and **NOT to main**)
4. Give your PR a clear title and describe what you did
5. Ask a co-founder to **review your PR** before merging
6. Once merged into `dev` → **delete your feature branch** on GitHub to keep the project clean

---

## ⚠️ Golden Rules

```
🚫 NEVER git push directly to main
🚫 NEVER git push directly to dev without a Pull Request
✅ ALWAYS pull the latest dev code before starting work
✅ ALWAYS test with wrangler pages dev before pushing
✅ ALWAYS get a review before merging
```

> **When in doubt, ask the lead before merging. No lone wolves! 🤝**

---

## 5. Why These Steps?

| Reason | Explanation |
|---|---|
| 🚀 **Speed** | You code with `npm run dev` as usual, no extra friction |
| 🔒 **Safety** | `wrangler` verifies API calls won't break before sharing |
| 🤝 **Collaboration** | PRs ensure a second pair of eyes reviews every change |
| 🌐 **Stability** | `main` always stays clean and ready to deploy to production |

---

## 6. Visual Flow Summary

```
dev (up to date)
    │
    └──► git checkout -b feature/my-task
              │
              ▼
         [Code + npm run dev]
              │
              ▼
         [npm run build]
         [npx wrangler pages dev ./dist]  ← Cloudflare validation
              │
              ▼
         git add . && git commit && git push
              │
              ▼
         Pull Request feature → dev
              │
              ▼
         Review by a co-founder ✅
              │
              ▼
         Merge into dev
              │
              ▼
         Delete feature branch 🗑️
```

---

*Game2Earn — Internal team document — v1.0*
