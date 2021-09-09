# Util - Cognito Authenticator

Simple and useful script to generate user token with Cognito.

# How to do it

Install the dependencies.
```
npm install
```

Create a ```.env``` file based on the ```.env.example```.
```
cp .env.example .env
```
Update the Client ID, User Pool ID, User Pool region, user name and password.
<br />
<br />
Now, run the ```index.js``` file to generate the token.
```
node index.js
```

# What if it fails?

It's important to remember that the flow ```ADMIN_USER_PASSWORD_AUTH``` needs to be enabled in the Cognito's app client configuration. <br />

Ask your AWS administrator to:
- Open Cognito;
- On the left menu, click on ```App clients```;
- Click on ```Show Details```;
- Under ```Auth Flows Configuration```, enable the first option (ADMIN_USER_PASSWORD_AUTH);