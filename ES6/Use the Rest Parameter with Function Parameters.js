const sum = (...args) => {
    //const args = [x, y, z]; заменили rest
    return args.reduce((a, b) => a + b, 0);
  }