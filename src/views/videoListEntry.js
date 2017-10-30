var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick',
    'keyup .form-control': 'handleKeypress'
  },

  initialize() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  handleClick: function(event) {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
