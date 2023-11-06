function choice(items) {
  let rand = Math.floor(Math.random() * items.length) * 1;
  return items[rand];
}

function remove(item, items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };
