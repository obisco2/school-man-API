const db = require ('../config/db');

// const getProfile = 'SELECT s FROM school s WHERE s.role = $1';

// const enrollStudentQuery = 'INSERT INTO admin (courses) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

// const studentProfileQuery = 'SELECT * FROM admin WHERE role = $1';

// const deletecourse = 'DELETE FROM admin WHERE course = $1';

async function getProfileQueries(payload) {
    const { username, password, role, courses } = payload;
  
    try {
      if (role === 'student') {
        const query = 'SELECT * FROM admin WHERE role = $1';
        const values = [username, password, role, courses]; // Assuming you want to filter by role
        const { rows } = await db.query(query, values);
  
        return rows; // Return the result of the query
      } else {
        return 'YOU ARE NOT A STUDENT'; // Handle other roles or cases as needed
      }
    } catch (error) {
      console.error('Error in getProfile:', error);
      throw error; // Rethrow the error for higher-level handling
    }
  }
  
async function enrollStudentQuery(payload){
    const {username, password, role, courses}= payload;
    try {
        if (role == 'student'){
            const query = 'INSERT INTO admin (courses) VALUES($1, $2, $3, $4) RETURNING *'
            const values = [username, password, role, courses];
            const {rows} = await db.query(query, values);
            return rows;
        }
        else {
            return 'YOU MUST BE A STUDENT TO ENROLL FOR A COURSE';
        }
    } catch (error){
        console.error('ERROR IN IN ENROLLING FOR A COURSE')
        throw error; 
    }
    
}

async function studentDeleteCourse (payload){
    const {username, password, role, courses}= payload;
    try {
        if (role == 'student' && password == payload.password){
            const query = 'DELETE FROM admin WHERE courses = ($1, $2, $3, $4) RETURNING *';
            const values = [username, password, role, courses];
            const {rows} = await db.query(query, values);
            return rows;
        } else {
            return 'IT IS EITHER YOU ARE NOT A STUDENT OR INCORRECT PASSWORD';
        }
    }
    catch (error){
        console.error(`ERROR IN DELETING COURSE(S)`);
        throw error
    };
};

module.exports = {
    getProfileQueries,
    enrollStudentQuery,
    studentDeleteCourse,
};