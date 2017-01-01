

  Meteor.startup(function() {

    return Meteor.methods({

      removePosition: function() {

        return Position.remove({});

      },

      removeSpots: function () {
        return Spots.remove({});
      }

    });

  });
