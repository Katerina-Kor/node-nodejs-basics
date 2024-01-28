const parseEnv = () => {
  const envs = process.env;
  for (let env in envs) {
    if (env.startsWith('RSS_')) {
      console.log(`${env}=${envs[env]}`)
    }
  }
};

parseEnv();