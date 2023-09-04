import configJson from "./auth_config.json";

export const getConfig = () => {
  const audience = configJson.audience ? configJson.audience : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
  };
};
