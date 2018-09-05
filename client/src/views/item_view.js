// const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
};

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';
  const name = this.createHeading(item.name);
  itemContainer.appendChild(name);

  const description = this.createDetail('Description', item.description);
  itemContainer.appendChild(description);
  this.container.appendChild(itemContainer);
};

ItemView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

ItemView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

module.exports = ItemView;
