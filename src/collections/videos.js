var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize() {
    this.search();
  },

  parse: function(response) {
    return response.items;
  },

  search: function(query) {
    this.fetch({ data: {
      chart: 'mostPopular',
      maxResults: 5,
      part: 'snippet',
      q: query,
      key: YOUTUBE_API_KEY,
    },
    success: function(data) {
      data.models[0].select();
    }
    });
  }

});
