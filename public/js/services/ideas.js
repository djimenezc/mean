//Ideas service used for articles REST endpoint
angular.module('mean.ideas').factory("Ideas", ['$resource', function($resource) {
    return $resource('ideas/:ideaId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);