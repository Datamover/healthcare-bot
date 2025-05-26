
# AI Healthcare Bot

## 🌐 Project Structure
- FastAPI backend (drug + trial recommendation)
- React frontend (configured for GitHub Pages)
- Streamlit chatbot version (optional)
- SQL schema + docker-compose

## 🚀 Deployment Steps

### Backend (Render)
1. Push to GitHub
2. Create a new Render Web Service
3. Build Command: `pip install -r requirements.txt`
4. Start Command: `uvicorn main:app --host 0.0.0.0 --port 8000`

### Frontend (GitHub Pages)
```bash
cd frontend
npm install
npm run build
npm run deploy
```

### Streamlit Chatbot
```bash
streamlit run streamlit_app/streamlit_app.py
```
