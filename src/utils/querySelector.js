export const querySelector = (root, selector) => {
  if (!root || (root.nodeType !== 1 && root.nodeType !== 9)) return null;
  // selector error 검사
  if (!selector) {
    if (selector.trim() === "") {
      throw new DOMException(
        "Failed to execute 'querySelector' on 'Document': The provided selector is empty."
      );
    } else {
      throw new TypeError(
        "TypeError: Failed to execute 'querySelector' on 'Document': 1 argument required, but only 0 present."
      );
    }
  } else if (!validate(selector)) {
    throw new DOMException(
      `Failed to execute 'querySelector' on 'Document': '${selector}' is not a valid selector.`
    );
  }

  const rootNode = root.nodeType === 9 ? root.body : root;

  if (rootNode.matches(selector)) return rootNode;
  for (const childNode of rootNode.children) {
    const result = querySelector(childNode, selector);
    if (result) return result;
  }

  return null;
};

const validate = (selector) => {
  const regex =
    /^(#[a-zA-Z0-9_-]+|\.[a-zA-Z0-9_-]+|[a-zA-Z0-9_-]+|\*|\[[a-zA-Z0-9_-]+\]|\s+|>|~|\+)+$/;
  return regex.test(selector);
};
