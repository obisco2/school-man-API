// Assuming you're using a PostgreSQL database and 'pg' library for database operations
const db = require('../config/db'); // Assuming you have a db configuration file

class Admin {
  // Constructor for initializing properties
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  // Method to create a new admin
  async create() {
    try {
      const query = `
        INSERT INTO admins (username, password, role)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      const values = [this.username, this.password, this.role];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Method to get admin by username
  static async getByUsername(username) {
    try {
      const query = `
        SELECT * FROM admins
        WHERE username = $1
      `;
      const values = [username];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Admin;
