const jwt = require("jsonwebtoken");

const secretKey = "sdfjdsnsdsjfnsdjfndfis";

function generateToken(payload) {
    const generatedToken = jwt.sign(payload, secretKey, {noTimestamp: true});
    return generatedToken;
}

async function verifyToken(token) {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
}

let token = generateToken({ name: "adejumo",courses:["CSC312","CSC313","CSC301"]});

console.log(token);

async function main() {
    let payload = await verifyToken(token);
    console.log(payload);
}

main();