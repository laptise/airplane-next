const dotenv = require("dotenv");

dotenv.config();
const load = (key) => {
  const value = process.env[key];
  console.log(`${key}: ${value}`);
  return value;
};

/**
 * @type {import('.').PublicRuntimeConfig}
 */
const publicRuntimeConfig = {
  cognito: {
    clientId: load("COGNITO_CLIENT_ID"),
    userPoolId: load("COGNITO_USER_POOL_ID"),
    issuer: load("COGNITO_DOMAIN"),
  },
};

module.exports = publicRuntimeConfig;