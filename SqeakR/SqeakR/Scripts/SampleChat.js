(function ()
{
    var app = angular.module('chat-app', []);

    app.controller('ChatController', function ($scope)
    {
        // Scope variables
        $scope.name = 'Guest'; // Holds the user's name
        $scope.message = ''; // Holds the new message
        $scope.messages = []; // Collection of messages coming from server
        $scope.chatHub = null; // Holds the reference to the hub

        $scope.chatHub = $.connection.chatHub = $.connection.chatHub; // Initializes the hub
        $.connection.hub.start(); // Starts the hub

        // Register a client method on the hub to be invoked by the server
        $scope.chatHub.client.broadcastMessage = function (name, message)
        {
            var newMessage = name + ' says: ' + message;

            // Push the newly coming message to the collection of messages
            $scope.messages.push(newMessage);
            $scope.$apply();
        };

        $scope.newMessage = function ()
        {
            // Sends a new message to the server
            $scope.chatHub.server.sendMessage($scope.name, $scope.message);

            $scope.message = '';
        };

    });

}());