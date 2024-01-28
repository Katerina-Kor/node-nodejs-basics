const parseArgs = () => {
  const args = process.argv.slice(2);
  for (let i = 1; i < args.length; i = i + 2) {
    console.log(`${args[i - 1].slice(2)} is ${args[i]}`)
  }
};

parseArgs();