import express from 'express';
import router from './api/main.router';
import cors from 'cors'

const app = express();
const {PORT = 3000} = process.env;

app.use(express.json());
app.use(cors());
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});