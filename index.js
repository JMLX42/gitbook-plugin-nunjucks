var filters = require('nunjucks/src/filters');

module.exports.filters = {}

for (var filterName in filters) {
  module.exports.filters['nunjucks_' + filterName] = filters[filterName];
}
