// eslint-disable-next-line import/no-anonymous-default-export
export default {
  api:
    process.env.REACT_APP_CT_API_HOST ||
    "https://api.us-central1.gcp.commercetools.com",
  auth: {
    host:
      process.env.REACT_APP_CT_AUTH_HOST ||
      "https://auth.us-central1.gcp.commercetools.com",
    projectKey: process.env.REACT_APP_CT_PROJECT_KEY || "",
    credentials: {
      clientId: process.env.REACT_APP_CT_CLIENT_ID || "",
      clientSecret: process.env.REACT_APP_CT_CLIENT_SECRET || "",
    },
    scopes:
      (process.env.REACT_APP_CT_SCOPE &&
        process.env.REACT_APP_CT_SCOPE.split("|")) ||
      [],
  },
};
