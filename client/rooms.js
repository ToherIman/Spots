Template.rooms.helpers({
  rooms () {

    return Rooms.find({owner: Meteor.userId()});
  },
  isOwner () {
    return this.owner === Meteor.userId();

  }

});

Template.rooms.events({
  "submit .new-room" (event) {
    event.preventDefault();
    let roomName = event.target.text.value;

    Rooms.insert({
      name: roomName,
      createdAt: new Date(),
      owner: Meteor.userId(),
      guests: []
    });
    event.target.text.value = "";
  },
  "click .room" () {
    Session.set('room', this._id);
  }
});
