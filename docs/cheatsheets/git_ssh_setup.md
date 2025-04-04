# 🔐 Git SSH Setup for Local Machine

Follow these steps to securely connect your local machine with GitHub using SSH.

---

## ✅ Step 1: Check for Existing SSH Keys

```bash
ls -al ~/.ssh
```

Look for files like `id_rsa.pub` or `id_ed25519.pub`.

---

## ✳️ Step 2: Generate a New SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> 💡 Use RSA if `ed25519` is not supported:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- Press `Enter` to save to default location (`~/.ssh/id_ed25519`)
- Choose a passphrase (optional)

---

## 📋 Step 3: Add SSH Key to SSH Agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

---

## 📤 Step 4: Add Public Key to GitHub

Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

1. Go to [GitHub SSH Keys](https://github.com/settings/keys)
2. Click **"New SSH key"**
3. Paste the copied content
4. Give it a title (e.g., "My Laptop")

---

## 🔄 Step 5: Set Git Remote to SSH

Check current remote:

```bash
git remote -v
```

Change to SSH format:

```bash
git remote set-url origin git@github.com:your-username/your-repo.git
```

---

## ✅ Step 6: Test SSH Connection

```bash
ssh -T git@github.com
```

You should see:

```
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 🧪 Bonus: Try a Git Push

```bash
git add .
git commit -m "Set up SSH"
git push origin main
```

---

## 📝 Notes

- Make sure `ssh-agent` is running when using passphrase-protected keys.
- You can use `ssh-add -l` to list added keys.

---

Happy Hacking 🔐💻
