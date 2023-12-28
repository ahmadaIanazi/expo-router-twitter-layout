const { onRequest } = require("firebase-functions/v2/https");
/** IMPORTS  */
const { health } = require("../v1/health");

/** EXPORTS  */
exports.health = onRequest(health)
