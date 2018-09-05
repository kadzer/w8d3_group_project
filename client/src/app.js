const FormView = require('./views/form_view.js');
const GridView = require('./views/form_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketListForm = document.querySelector('form#bucket-list');
  const bucketListFormView = new FormView(bucketListForm);
  bucketListFormView.bindEvents();

  const bucketListContainer = document.querySelector('div#bucket-list-item');
  const bucketlistGridView = new GridView(bucketListContainer);
  BucketListGridView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
  bucketList.getData();
})
