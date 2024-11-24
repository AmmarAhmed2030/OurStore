import cors from "cors";
import express, { Application } from "express";
import routes from "./routes/index";

const app: Application = express();

// List of allowed origins
const allowedOrigins = [
  "https://medical-sage-iota.vercel.app",
  "https://medical-panel.vercel.app",
  "http://localhost:5174",
  "http://localhost:5173",
  "https://checkout.stripe.com",
];

//CORS middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials such as cookies and headers
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

export default app;
