/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");



const health = (req, res) => {
  logger.info("Health check called");
  res.send({ status: "ok" });
}

// Health Check Function
exports.health = functions.https.onRequest(health);

/** EXPORTS  */
// exports.api = functions.https.onRequest(api)