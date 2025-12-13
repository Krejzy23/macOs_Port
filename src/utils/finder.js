const findPathToItem = (root, target) => {
  if (!root || !target) return null;

  // Pokud jsme našli cíl
  if (root === target) {
    return [root];
  }

  // Pokud má children, projdeme je
  if (Array.isArray(root.children)) {
    for (const child of root.children) {
      const path = findPathToItem(child, target);
      if (path) {
        return [root, ...path];
      }
    }
  }

  return null;
};

export default findPathToItem;
