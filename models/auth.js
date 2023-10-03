const dB = require("../config/db")

async function register(payload) {
    const { username, password, role } = payload;
    try {
        if (role == "admin") {
            const query = `
                INSERT INTO admins (username,password,role)
                VALUES($1,$2,$3)
                RETURNING *
            `
            const values = [username, password, role];
            const { rows } = await dB.query(query, values);
            return rows;
        }
        else if (payload.role == "teacher") {
            const query = `
                INSERT INTO teacher (username,password,role)
                VALUES($1,$2,$3)
                RETURNING *
            `
            const values = [username, password, role];
            const result = await dB.query(query, values);
            console.log(result);
            await dB.end();
        }
        else if (payload.role == "student") {
            const query = `
            INSERT INTO student (username,password,role)
            VALUES($1,$2,$3)
            RETURNING *
        `
            const values = [username, password, role];
            const result = await dB.query(query, values);
            console.log(result);
            await dB.end();
        }
        else {
            throw Error("INVALID ROLE")
        }
    }
    catch (err) {
        throw err;
        // await dB.end();
    }
}


async function login(payload){
    const { username, password, role } = payload;
    try {
        if (role == "admin") {
            const query = `
            SELECT * FROM admins
            WHERE username = $1 AND password = $2
            `
            const values = [username, password];
            const result = await dB.query(query, values);
            return result.rows[0];
        }
        else if (payload.role == "teacher") {
            const query = `
            SELECT * FROM teachers
            WHERE username = $1 AND password = $2
            `
            const values = [username, password];
            const result = await dB.query(query, values);
            console.log(result);
            await dB.end();
        }
        else if (payload.role == "student") {
            const query = `
            SELECT * FROM students
            WHERE username = $1 AND password = $2
            `
            const values = [username, password];
            const result = await dB.query(query, values);
            console.log(result);
            await dB.end();

    }
}
    catch (err) {
        console.log(err);
        await dB.end();
    }
}



module.exports = {register,login} ;  