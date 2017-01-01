Template.spot.helpers({
  spot: function () {
    return Spots.findOne(Session.get('place'));
  }
});

Template.spot.events({
  "click .addSpot" () {
    const spot = Session.get('place');
    const cheked = Spots.findOne(spot).editing;
    Spots.update(spot, {$set: {editing: !cheked}});
    console.log(cheked);
  },
  "click .deleteSpot" () {
    const spot = Session.get('place');
    Spots.remove(spot);
  },
  "submit .new-spot" (event) {
    event.preventDefault();
    const name = event.target.spotName.value;
    const typeSpot = event.target.spotType.value;
    const descr = event.target.description.value;
    const spot = Session.get('place');
    const cheked = Spots.findOne(spot).editing;
    Spots.update(spot, {$set: {
      "name": name,
      "type": typeSpot,
      "descr": descr,
      "editing" : !cheked
    }
    });
  }
});
