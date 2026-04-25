# Deployment Guide: Hosting LegalMate for Free

This guide provides step-by-step instructions on how to host the LegalMate landing page (Frontend) and the Download API (Backend) for free.

---

## 1. Prerequisites
- A **GitHub account** with your code pushed to a repository.
- A **Vercel account** (for Frontend).
- A **Render account** (for Backend).

---

## 2. Hosting the Backend (Node.js) on Render
Render is one of the best free options for hosting Node.js applications.

### Steps:
1. **Login to [Render](https://render.com/)** and click **"New +"** -> **"Web Service"**.
2. **Connect your GitHub repository**.
3. **Configure the Service:**
   - **Name:** `legalmate-backend`
   - **Root Directory:** `FYP/server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
4. **Environment Variables:**
   - Go to the "Environment" tab and add any necessary variables (e.g., `PORT=10000`).
5. **Deploy:** Render will automatically deploy your code.
6. **Note:** Free instances spin down after 15 minutes of inactivity. The first request after a break may take 30-60 seconds to "wake up" the server.

---

## 3. Hosting the Frontend (Vite/React) on Vercel
Vercel is the recommended platform for Vite applications.

### Steps:
1. **Login to [Vercel](https://vercel.com/)** and click **"Add New"** -> **"Project"**.
2. **Import your GitHub repository**.
3. **Configure the Project:**
   - **Framework Preset:** `Vite`
   - **Root Directory:** `FYP/client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Environment Variables:**
   - You need to point the frontend to your newly deployed Render URL.
   - In `FYP/client/src/components/Download.jsx` and `Hero.jsx`, you currently use `http://localhost:5000`.
   - **Recommended:** Change those URLs to use an environment variable (e.g., `import.meta.env.VITE_API_URL`).
   - Add `VITE_API_URL` in Vercel settings with your Render URL (e.g., `https://legalmate-backend.onrender.com`).
5. **Deploy:** Click **Deploy**. Vercel will give you a production URL (e.g., `legalmate.vercel.app`).

---

## 4. Connecting Frontend and Backend (CORS)
Ensure your backend allows requests from your Vercel URL.
In `FYP/server/server.js`, update the CORS configuration:

```javascript
const corsOptions = {
  origin: ['http://localhost:5173', 'https://your-vercel-link.vercel.app'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
```

---

## 5. Summary of Recommended Services

| Component | Service | Why? |
| :--- | :--- | :--- |
| **Frontend** | [Vercel](https://vercel.com) | Best performance, automatic SSL, easy setup for Vite. |
| **Backend** | [Render](https://render.com) | Simple Node.js hosting with a generous free tier. |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | If you add a database later, Atlas offers a 512MB free cluster. |

---

## Tips for Success
- **Direct APK Downloads:** Ensure your APK file is correctly paths in the `server/public/apk/` folder so Render can serve it.
- **Waking up Render:** You can use a free service like [Cron-job.org](https://cron-job.org/) to "ping" your Render URL every 14 minutes to keep it from spinning down.
