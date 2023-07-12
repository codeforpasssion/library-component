const classNamesUtils = (...classes) => {
  console.log("classes", classes);
  return classes.filter(Boolean).join("");
}

export default classNamesUtils