const parseEnv = () => {
  const args = process.env;
  for (let key in args) {
    if (key.startsWith('RSS_')) {
      console.log(`${key}=${args[key]}`)
    }
  }
};

parseEnv();