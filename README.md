
# Visual Search for Products

This project is a **Visual Search Engine** for products like jewelry, allowing users to upload an image and find visually similar products.  
It uses **image embeddings** and **cosine similarity** to identify similar products from a database.

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Node.js, Express.js
- **Vector Search:** Embedding generation + Cosine Similarity
- **Storage:** MongoDB (for product data), Cloudinary (for images)

---

## ✨ Features

- Upload an image from your device.
- Get real-time results of similar-looking products.
- Uses deep learning embeddings for smart visual search.
- Lightweight, fast, and scalable architecture.

---

## 📂 Project Structure

```
visual-search-for-products/
│
├── backend/         # Node.js server for handling search logic
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── package.json
│
└── frontend/        # React frontend for user interaction
    ├── public/
    ├── src/
    │   ├── Components/
    │   ├── images/
    │   ├── redux/
    │   ├── App.jsx
    │   ├── Layout.jsx
    │   └── main.jsx
    ├── eslint.config.js
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SajjaPremsai/Visual-Search-for-Products-.git
   cd Visual-Search-for-Products-
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   npm run start
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Open the app:**  
   Visit [http://localhost:3000](http://localhost:3000) (or whichever port your frontend runs on).

---

## 🧠 How It Works

- When a user uploads an image, the frontend sends the image to the backend.
- The backend **generates an embedding** (vector representation) for the uploaded image.
- It **compares** the embedding with the stored product embeddings using **cosine similarity**.
- Products with the highest similarity scores are returned and displayed.

---

## 🚀 Future Improvements

- Integrate a **vector database** like Pinecone, Qdrant, or Faiss for faster searches.
- Improve the embedding model for better search accuracy.
- Add filters (price range, category) to refine search results.
- Pagination or lazy loading for large search results.

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---