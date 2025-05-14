import { config } from "dotenv";
config();
export default {
  appName: process.env.APP_NAME || "Express API",
  host: process.env.APP_HOST || "http://localhost",
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "mydatabase",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
  },
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
  corsOptions: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
};
