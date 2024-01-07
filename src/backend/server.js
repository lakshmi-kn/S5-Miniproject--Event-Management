const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://vercel.com/lakshmis-projects-1694b8a1/s5-miniproject-event-management/Fk8637RGxgLofZ48sow9z9moa9nb",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

const SUPABASE_API_URL = "postgresql://postgres:F0zDGuDA8OIZvjSe@db.gdbyyvsbjuqmwhppozle.supabase.co:5432/postgres";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkYnl5dnNianVxbXdocHBvemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NjQ4MTUsImV4cCI6MjAyMDA0MDgxNX0.h5H46F3J4v3CeAQoySPOexmEmXeGtaq1lALozHCXir0";

// Supabase connection pool
const supabaseUrl = SUPABASE_API_URL;
const pool = new Pool({
  connectionString: supabaseUrl,
});

app.post("/register", async (req, res) => {
  try {
    const { FirstName, LastName, PhoneNo, Email, Password } = req.body;
    const values = [FirstName, LastName, PhoneNo, Email, Password];
    const query =
      "INSERT INTO login (FirstName, LastName, PhoneNo, Email, Password) VALUES ($1, $2, $3, $4, $5)";

    const client = await pool.connect();
    const result = await client.query(query, values);

    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error", message: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const query = "SELECT * FROM login WHERE Email = $1 AND Password = $2";

    const client = await pool.connect();
    const result = await client.query(query, [Email, Password]);

    if (result.rows.length > 0) {
      res.json({ status: "Success", user: result.rows[0] });
    } else {
      res.json({ status: "Failed" });
    }
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error", message: err.message });
  }
});

app.get("/register", (req, res) => {
  console.log("Status");
  res.send("Status");
});

const server = app.listen(8081, "0.0.0.0", () => {
  const { port, address } = server.address();
  console.log(`Express server started on port ${port} at ${address}`);
});
