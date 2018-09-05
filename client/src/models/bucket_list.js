const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function () {
  // PubSub.subscribe(INSERT FROM ITEMVIEW DELETE CLICKED, (evt) => {
  //   this.deleteBucketListItem(evt.detail);
  // });

  PubSub.subscribe('FormView:item-submitted', (evt) => {
    this.postListItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((listitems) => {
      PubSub.publish('BucketList:data-loaded', listitems);
    })
    .catch(console.error);
};

BucketList.prototype.postListItem = function (listItem) {
  const request = new Request(this.url);
  request.post(listItem)
  .then((listitems) => {
    PubSub.publish('BucketList:data-loaded', listitems);
  })
  .catch(console.error);
};

// BucketList.prototype.deleteListItem = function (listItemId) {
//   this.request.delete(listItemId)
//     .then((listitems) => {
//       PubSub.publish('BucketList:data-loaded', listitems);
//     })
//     .catch(console.error);
// };

module.exports = BucketList;
