import cors from "cors";
import express, { Application, Request, Response } from "express";
import routes from "./routes/index";

const app: Application = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
//app.use("/.netlify/functions/app", routes);
//export const handler = serverless(app);
export default app;
