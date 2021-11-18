require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.COGNITO_REGION });

const {
  COGNITO_CLIENT_ID: clientId,
  COGNITO_USER_POOL_ID: userPoolId,
  COGNITO_USERNAME: username,
  COGNITO_PASSWORD: password,
} = process.env;

(async () => {
  const cognito = new AWS.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  });

  let result = {};
  try {
    const params = {
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
      ClientId: clientId,
      UserPoolId: userPoolId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };

    const authRequest = await cognito.adminInitiateAuth(params).promise();
    result = authRequest.AuthenticationResult;

    console.log(result);
    return result;
  } catch (error) {
    console.error('getCognitoToken', error);
  }
  return result;
})();
