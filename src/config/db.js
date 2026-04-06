import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "demo_user",
  password: "demo_password",
  database: "demo_database"
});

export default pool;
