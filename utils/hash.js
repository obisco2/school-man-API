const bcrypt = require("bcryptjs");

const secretKey = '$2a$10$wTHGYJUkJaFoa6x2GSJcIu';

let password = "excellencyjumo";

async function Hashing() {
    let hashed = await bcrypt.hash(password, secretKey)

    console.log(hashed)

    let checkIfPasswordIsValid = await bcrypt.compare(password, hashed);

    console.log("THE BOOLEAN RESULT", checkIfPasswordIsValid);
}

Hashing();