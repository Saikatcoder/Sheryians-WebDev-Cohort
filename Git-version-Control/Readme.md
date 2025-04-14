# Git Basics - Learning Guide

This repository contains a beginner-friendly guide to understanding **Git** with simple explanations, examples, and interview questions. The material is extracted from **Day 49 & 50 of the Git Training** and is ideal for anyone looking to learn or revise Git for development or interviews.

---

## 📌 What is Git?
Git is a **version control system** used to track changes in code over time. It lets developers:

- 🔁 Go back to previous versions
- 👥 Collaborate with teammates
- 🕵️‍♂️ Track what changed, when, and by whom
- 🧪 Create branches to experiment without breaking the main codebase

Git keeps a history of all project changes, like a "history book" for your code. Each saved version is called a **commit**, and developers can work together safely by using **branches**.

---

## 🧱 Key Git Concepts

| Concept | Description |
|--------|-------------|
| **Repository** | A folder tracked by Git (local or remote) |
| **Working Directory** | Your current folder where edits happen |
| **Staging Area** | A prep area to collect files before a commit |
| **Commit** | A saved snapshot of staged changes |
| **Branch** | A separate line of development |
| **Remote Repository** | A hosted version on GitHub/GitLab etc. |

---

## 🧰 Git Command Cheat Sheet

### 🔧 Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 📦 Initialize / Clone
```bash
git init                      # Start new Git repo
git clone <url>               # Copy existing repo
```

### 📝 Working with Changes
```bash
git status                   # See changes
git add <file> / .           # Stage file(s)
git commit -m "message"      # Commit staged changes
git diff                     # View unstaged changes
git diff --staged            # View staged vs last commit
```

### 💡 Undoing Things
```bash
git restore <file>           # Discard changes
git restore --staged <file>  # Unstage file
```

### 🔍 Logs
```bash
git log                      # Full history
git log --oneline            # Short history
```

### 🌱 Branching
```bash
git branch                   # Show branches
git branch <name>            # Create new branch
git checkout <name>          # Switch branch
git checkout -b <name>       # Create + switch branch
git merge <branch>           # Merge into current branch
git branch -d <branch>       # Delete branch
```

### ☁️ Remote
```bash
git remote add origin <url>  # Add remote repo
git push origin <branch>     # Upload code
git pull origin <branch>     # Download + merge
git fetch                    # Download only
```

---

## ❓ Git Interview Questions

1. What is Git and why is it important in software development?
2. Explain the difference between `git add`, `git commit`, and `git push`.
3. What is a branch in Git and why is it useful?
4. How do you merge changes from one branch to another?
5. What is a remote repository?
6. Describe a typical Git workflow for developing a feature.
7. What is a merge conflict and how do you resolve it?

---

## 🧠 Tips for Git

- ✅ Commit frequently with meaningful messages
- ✅ Use branches for features/bug fixes
- ✅ Don’t push directly to `main` (use pull requests)

---

## 📚 Resources
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/en/get-started)
- [Git Cheat Sheet PDF](https://education.github.com/git-cheat-sheet-education.pdf)

---

> **This guide is part of a Git learning series prepared for revision and interview practice.** Feel free to fork and contribute!

