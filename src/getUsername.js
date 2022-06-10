const filterEnvArguments = (envArray) => {
  return envArray.filter((k) => {
    if (k.startsWith('--')) return true;
  });
};

const parseName = (filteredEnvArguments) => {
  if (filteredEnvArguments.length === 0) return 'User';
  const username = filteredEnvArguments[0].slice(filteredEnvArguments[0].indexOf('=') + 1);
  return username;
};


export const getUsername = () => {
  const envArguments = process.argv;
  const filteredEnvArguments = filterEnvArguments(envArguments);
  const username = parseName(filteredEnvArguments);
  return username;
};
