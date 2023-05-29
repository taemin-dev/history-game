import express from "express";

const app = express();
const PORT = 4000;

const handleListen = () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);