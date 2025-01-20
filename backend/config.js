const PORT = process.env.PORT || 3001;

const PG_PORT = process.env.PG_PORT || 5433;
const PG_HOST = process.env.PG_HOST || "localhost";
const PG_USER = process.env.PG_USER || "postgres";
const PG_PASSWORD = process.env.PG_PASSWORD || "admin123";
const PG_DATABASE = process.env.PG_DATABASE || "minicore_db";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

module.exports = {
    PORT,
    PG_PORT,
    PG_HOST,
    PG_USER,
    PG_PASSWORD,
    PG_DATABASE,
    FRONTEND_URL
};
