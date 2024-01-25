/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let sortedStrs = strs.sort();

  // Compare the first and last strings in the sorted array
  const firstStr = sortedStrs[0];
  const lastStr = sortedStrs[strs.length - 1];

  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i];
    } else {
      break;
    }
  }

  return commonPrefix;
};
