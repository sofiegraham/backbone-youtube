var SearchView = Backbone.View.extend({

  events: {
    'click': 'handleClick',
    'keyup .form-control': 'handleKeypress'
  },

  initialize() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleClick: function() {
    var query = this.$('.form-control').val();
    this.collection.search(query);
  },

  handleKeypress: function(event) {
    if (event.keyCode === 13) {
      var query = this.$('.form-control').val();
      this.collection.search(query);
    }
  },

  template: templateURL('src/templates/search.html')

});
