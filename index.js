import express from "express";
import initConnection from "./db/initConnection.js";
import userRoutes from "./src/modules/users/user.routes.js";
import dotenv from "dotenv";
import productRoutes from "./src/modules/products/product.routes.js";
import categoryRoutes from "./src/modules/categries/category.routes.js";
import couponRoutes from "./src/modules/coupons/coupon.routes.js";
import cartRoutes from "./src/modules/carts/cart.routes.js";
import orderRoutes from "./src/modules/orders/order.routes.js";

import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);
dotenv.config();
initConnection();
const server = express();
server.use(cors());

server.use(express.static(path.join(__dirname, "/src/views")));
server.get("/ammar", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/views/verify.html"));
});
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(userRoutes);
server.use(productRoutes);
server.use(categoryRoutes);
server.use(couponRoutes);
server.use(cartRoutes);
server.use(orderRoutes);

server.listen(3000);
