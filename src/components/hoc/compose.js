export default (...func) => comp => {
  return func.reduceRight((preResult, f) => f(preResult), comp);
};
