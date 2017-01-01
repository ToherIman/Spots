Template.messagesBlock.helpers({
  messages () {
    const room = Session.get('room');
    if(room) {
      return Messages.find({room: room}, {limit: 20});
    } else {
      return Messages.find({room: undefined},  { sort: { createdAt: 1} }, {limit: 15});
    }
  }
});

Meteor.setInterval(function () {
  let messages = $(".messages_block");
  let messagesHeight = messages.prop("scrollHeight");;
  messages.scrollTop(messagesHeight);
}, 1);

Template.messagesBlock.events({
  "submit .new-message" (event) {
    event.preventDefault();
    const text = event.target.message.value;
    const room = Session.get('room');

    Messages.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      room: room
    });
    event.target.message.value = "";
  }
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

Template.message.helpers({
  dateFormat (time) {
    const date = new Date (time);
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const day = "0" + date.getDate();
    const month = "0" + date.getMonth();
    const year = date.getFullYear();
    let out = "";
    const now = new Date();
    if (now-time>86400000) {
      out = day.substr(day.length - 2) + "." + month.substr(day.length - 2) + "." + year;
    } else {
      out = hours.substr(hours.length - 2) + ":" + minutes.substr(minutes.length - 2) + ":" + seconds.substr(seconds.length - 2);
    }
    return out;
  }
});
