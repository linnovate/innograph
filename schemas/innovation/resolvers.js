const resolveFunctions = {
  RootQuery: {
    product() {
      console.log(arguments)
      return 'hello avraham';
    },
  }
};

export default () => [resolveFunctions]
