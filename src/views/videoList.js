var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideos, this);
  },

  renderVideos: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoListEntryView.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
