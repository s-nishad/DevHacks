# DevHacks

**DevHacks** is a collection of developer-focused tutorials and cheatsheets,
This site aims to provide hands-on guides and practical code snippets for tools like Git, Docker, Python, and more.

---

## 🚀 Features



- 📝 Well-structured tutorials by topic  

- 📚 Cheatsheets for daily developer needs (e.g. Git)  

- 🔍 Built-in local search (via plugin)  

- 🛠 Hosted on GitHub Pages  

- 🤝 Open to community contributions  





## 📁 Folder Structure



```

DevHacks/

├── docs/

│   ├── .vitepress/

│   │   ├── config.js

│   ├── cheatsheets/

│   ├── tutorials/

│   └── index.md

├── README.md

├── package.json

```





## 🛠 Setup Instructions



```bash

# 1. Clone the repo

git clone git@github.com:s-nishad/DevHacks.git

cd DevHacks



# 2. Install dependencies

npm install



# 3. Start the dev server

npx vitepress dev docs



# 4. Build for production

npx vitepress build docs

```





## 📌 Deployment



This site is deployable via **GitHub Pages**.  






## 🤝 Contribution Guidelines



1. Fork the repository  

2. Create a new branch:  

   ```bash

   git checkout -b feature/your-feature-name

   ```

3. Add or edit `.md` files under `docs/tutorials/` or `docs/cheatsheets/`  

4. Update `config.js` if needed  

5. Commit and push:  

   ```bash

   git push origin feature/your-feature-name

   ```

6. Submit a Pull Request

---
