var Node = function(value){
  // this section is used to give each node its own unique id
  // the delay (while loop) is necessary because otherwise many
  // nodes could be created w/in the same milisecond and break the
  // unique constraint.
  // TODO: find a less hacky way to gurantee a unique ID
  // ********************************************************
  var timer = Date.now();
  while (Date.now() === timer){}
  this.id = Date.now();
  // ********************************************************
  this.value = value;
  this.next = null;
};