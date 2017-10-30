var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videoCollection = new Videos(exampleVideoData);
    this.videoPlayerView = new VideoPlayerView({ collection: this.videoCollection, el: this.$('.player')});
    this.videoListView = new VideoListView({ collection: this.videoCollection, el: this.$('.list')});
    this.searchView = new SearchView({ collection: this.videoCollection, el: this.$('.search')});
  },

  render: function() {
    this.$el.html(this.template());
  },

  template: templateURL('src/templates/app.html')

});
