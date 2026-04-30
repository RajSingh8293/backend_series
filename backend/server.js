import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

// Dynamic CORS configuration
const corsOptions = {
  // origin: ["http://localhost:5173"],
  origin: ["https://backend-series-frontend.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
// app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World this is from expressjs with backend series");
});
app.get("/api/user", (req, res) => {
  const user = [
    { name: "Raj", age: 29, role: "Developer" },
    { name: "Amit", age: 39, role: "Full Stack Devloper" },
    { name: "Sumeet", age: 32, role: "Frontend Devloper" },
    { name: "Dhiraj", age: 32, role: " Devloper" },
    { name: "Komal", age: 32, role: "Frontend Devloper" },
  ];
  return res.json(user);
  // res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
