const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newItem = this.createItem(evt.target);
  PubSub.publish('FormView:item-submitted', newItem);
  evt.target.reset();
};

FormView.prototype.createItem = function (form) {
  const newItem = {
    name: form.name.value,
    description: form.description.value,
  };

  return newItem;
};

module.exports = FormView;
