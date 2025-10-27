# .gitignore Configuration Documentation

**Project:** Shaheem's Portfolio  
**Last Updated:** October 27, 2025  
**Purpose:** Prevent sensitive and unnecessary files from being committed to git

---

## 🎯 Overview

This `.gitignore` file is configured to protect sensitive information (especially EmailJS credentials) and exclude unnecessary files from version control.

---

## 🔒 Critical Security Patterns

### Environment Variables (MOST IMPORTANT)

```gitignore
# ❌ NEVER commit these files
.env
.env*.local
.env.development.local
.env.test.local
.env.production.local

# ✅ ALWAYS commit these files (they're templates)
!.env.example
!.env.sample
!.env.template
```

**Why this matters:**
- `.env.local` contains your actual EmailJS credentials
- If committed, credentials would be exposed in git history forever
- Even deleting the file later won't remove it from history

**Files protected:**
- `.env.local` - Your actual credentials ✅ IGNORED
- `.env.example` - Template without real values ✅ COMMITTED

### Verification

Check if `.env.local` is properly ignored:

```bash
# Should show which .gitignore rule is ignoring it
git check-ignore -v .env.local

# Expected output:
# .gitignore:44:.env*.local       .env.local
```

Check if any env files are accidentally tracked:

```bash
# Should return nothing (empty output)
git ls-files | grep '\.env'

# If it shows .env.local or similar, you have a problem!
```

---

## 📁 What Gets Ignored

### Dependencies (Node.js)

```gitignore
/node_modules        # npm/yarn/pnpm packages
/.pnp               # Yarn PnP
.pnp.*
.yarn/*             # Yarn cache and config
```

**Size saved:** Usually 200MB - 1GB  
**Why:** These can be regenerated with `npm install`

### Build Outputs

```gitignore
/.next/             # Next.js build output
/out/               # Next.js static export
/build              # General build directory
/dist               # Distribution directory
```

**Size saved:** Usually 50-200MB  
**Why:** Generated from source code, can be rebuilt

### TypeScript

```gitignore
*.tsbuildinfo       # TypeScript incremental build info
next-env.d.ts       # Next.js TypeScript declarations
```

**Why:** Auto-generated, changes frequently

### IDE/Editor Files

```gitignore
# JetBrains (WebStorm, IntelliJ)
.idea/
*.iml
*.iws
*.ipr

# VS Code
.vscode/*
!.vscode/settings.json  # Keep shared settings
!.vscode/tasks.json     # Keep shared tasks
!.vscode/launch.json    # Keep debug config
!.vscode/extensions.json # Keep recommended extensions

# Vim
*.swp
*.swo
*~

# Emacs
*~
\#*\#
```

**Why:** IDE settings are personal, shouldn't be shared (except team configs)

### Operating System Files

```gitignore
# macOS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Windows
ehthumbs.db
Thumbs.db
Desktop.ini
```

**Why:** OS-specific, no value in repository

### Logs and Debug Files

```gitignore
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
lerna-debug.log*
```

**Why:** Generated during development, can be massive, no historical value

### Temporary Files

```gitignore
*.tmp
*.temp
*.bak
*.backup
*.cache
.eslintcache
```

**Why:** Temporary, regenerated automatically

---

## ✅ What Gets Committed

These important files ARE committed to git:

```
✅ .env.example          # Template for environment variables
✅ .gitignore            # This file
✅ package.json          # Project dependencies
✅ package-lock.json     # Locked dependency versions
✅ next.config.mjs       # Next.js configuration
✅ tsconfig.json         # TypeScript configuration
✅ tailwind.config.ts    # Tailwind CSS configuration
✅ README.md             # Project documentation
✅ EMAILJS_*.md          # EmailJS documentation
✅ src/**/*              # All source code
✅ public/**/*           # Public assets
```

---

## 🔍 Verification Commands

### Check if a file is ignored

```bash
git check-ignore -v filename

# Example:
git check-ignore -v .env.local
# Output: .gitignore:44:.env*.local       .env.local
```

### List all ignored files in directory

```bash
git status --ignored
```

### Check if sensitive files are tracked

```bash
# Check for env files
git ls-files | grep '\.env'

# Check for IDE files
git ls-files | grep -E '\.idea|\.vscode|\.DS_Store'

# Check for log files
git ls-files | grep '\.log'
```

**Expected:** All commands should return empty or only show allowed files like `.env.example`

### Remove accidentally committed file

If you accidentally committed `.env.local`:

```bash
# Remove from git but keep local file
git rm --cached .env.local

# Commit the removal
git commit -m "Remove accidentally committed .env.local"

# ⚠️ WARNING: File is still in git history!
# To completely remove from history:
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (⚠️ only if you're sure!)
git push origin --force --all
```

---

## 🚨 Common Mistakes

### ❌ Mistake 1: Committing .env.local

```bash
# Check before committing
git status

# If you see .env.local:
git reset HEAD .env.local
git checkout -- .env.local
```

### ❌ Mistake 2: Using .env instead of .env.local

```bash
# ❌ DON'T create .env (it's less specific)
# ✅ DO create .env.local (it's explicitly local)

# Reason: .env might be committed in some setups
# .env.local is ALWAYS ignored by Next.js convention
```

### ❌ Mistake 3: Forgetting to add .env.example

```bash
# Create template after setting up .env.local
cp .env.local .env.example

# Edit .env.example and replace real values with placeholders
nano .env.example

# Commit the example
git add .env.example
git commit -m "Add environment variable template"
```

### ❌ Mistake 4: Committing large build directories

```bash
# If you see huge commits, check:
git status

# If .next/ or node_modules/ appear:
git reset HEAD .next/
git reset HEAD node_modules/

# Update .gitignore if needed
echo "/.next/" >> .gitignore
echo "/node_modules" >> .gitignore
```

---

## 📚 Best Practices

### 1. Always Check Before Committing

```bash
# Review what will be committed
git status

# Review actual changes
git diff --staged

# If you see any .env files or credentials, STOP!
```

### 2. Use Git Hooks (Optional but Recommended)

Create `.git/hooks/pre-commit`:

```bash
#!/bin/sh
# Check for sensitive files

if git diff --cached --name-only | grep -E '\.env\.local|\.env\.production'; then
    echo "❌ ERROR: Attempting to commit environment file with credentials!"
    echo "Files:"
    git diff --cached --name-only | grep -E '\.env'
    exit 1
fi

if git diff --cached | grep -E '(EMAILJS_SERVICE_ID|EMAILJS_PRIVATE_KEY|EMAILJS_PUBLIC_KEY)'; then
    echo "❌ ERROR: Attempting to commit code with hardcoded credentials!"
    exit 1
fi

exit 0
```

Make it executable:

```bash
chmod +x .git/hooks/pre-commit
```

### 3. Regular Audits

Run monthly:

```bash
# Check for accidentally committed secrets
git log --all --full-history --source -- .env.local

# Should return nothing
```

### 4. Use .gitignore_global

For personal files (like OS or IDE files):

```bash
# Create global gitignore
git config --global core.excludesfile ~/.gitignore_global

# Add personal preferences
echo ".DS_Store" >> ~/.gitignore_global
echo ".idea/" >> ~/.gitignore_global
echo ".vscode/" >> ~/.gitignore_global
```

---

## 🔧 Troubleshooting

### Problem: .env.local is showing in git status

**Solution:**

```bash
# 1. Check .gitignore has the pattern
grep "env.*local" .gitignore

# 2. If missing, add it
echo ".env*.local" >> .gitignore

# 3. Refresh git cache
git rm --cached .env.local
git add .gitignore
git commit -m "Update .gitignore to exclude .env.local"
```

### Problem: Large repository size

**Solution:**

```bash
# Check repository size
du -sh .git

# Find large files
git rev-list --objects --all | \
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | \
  sed -n 's/^blob //p' | \
  sort --numeric-sort --key=2 | \
  tail -n 10

# If you find node_modules or .next was committed:
git filter-branch --tree-filter 'rm -rf node_modules' --prune-empty HEAD
git filter-branch --tree-filter 'rm -rf .next' --prune-empty HEAD
```

### Problem: IDE files keep appearing

**Solution:**

```bash
# Remove all IDE files from git
git rm --cached -r .idea/
git rm --cached -r .vscode/
git rm --cached .DS_Store

# Commit the removal
git commit -m "Remove IDE and OS files from git"

# Verify .gitignore includes them
grep -E "\.idea|\.vscode|\.DS_Store" .gitignore
```

---

## 📊 File Size Impact

Here's what .gitignore saves you from committing:

| Pattern | Typical Size | Regenerable? |
|---------|-------------|--------------|
| `/node_modules` | 200-1000MB | ✅ Yes (`npm install`) |
| `/.next/` | 50-200MB | ✅ Yes (`npm run build`) |
| `.env.local` | < 1KB | ❌ No (contains secrets) |
| `.DS_Store` | 6-12KB | ✅ Yes (auto-generated) |
| `*.log` | Varies | ✅ Yes (new logs created) |
| `.idea/` | 1-10MB | ✅ Yes (IDE regenerates) |

**Total saved:** ~250-1200MB per commit!

---

## 🔐 Security Checklist

Before pushing to GitHub:

- [ ] `.env.local` exists locally with real credentials
- [ ] `.env.local` is listed in `.gitignore`
- [ ] `.env.local` is NOT in `git status`
- [ ] `.env.example` exists with placeholder values
- [ ] `.env.example` IS in `git status` (ready to commit)
- [ ] Run: `git check-ignore .env.local` (should confirm ignored)
- [ ] Run: `git ls-files | grep env.local` (should return nothing)
- [ ] No hardcoded credentials in source code
- [ ] All sensitive files listed in `.gitignore`

---

## 📖 Related Documentation

- **Security Implementation:** [EMAILJS_SECURITY_DOCS.md](./EMAILJS_SECURITY_DOCS.md)
- **Setup Guide:** [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
- **Quick Reference:** [EMAILJS_QUICKSTART.md](./EMAILJS_QUICKSTART.md)
- **Environment Template:** [.env.example](./.env.example)

---

## 🔗 External Resources

- **Git Documentation:** https://git-scm.com/docs/gitignore
- **GitHub .gitignore Templates:** https://github.com/github/gitignore
- **Next.js Environment Variables:** https://nextjs.org/docs/basic-features/environment-variables
- **Removing Sensitive Data:** https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

---

**Last Updated:** October 27, 2025  
**Status:** ✅ Configured and Verified  
**Security Level:** 🔒 High
