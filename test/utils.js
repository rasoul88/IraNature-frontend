export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
