var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
    //this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function(event) {
    if (event) {
      this.$el.html(this.template(event.attributes));
    } else {
      this.$el.html(this.template(this.collection.models[0].attributes));
    }
  },

  template: templateURL('src/templates/videoPlayer.html')

});
