const list = document.querySelector('ul');
const items = document.querySelectorAll('li.item');
console.log('Number of categories:', items.length);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const lengthEl = item.querySelectorAll('li').length;
  console.log('Category:', title);
  console.log('Elements:', lengthEl);
});
