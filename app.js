new Vue({
    el: '#app',

    data: {
        ws: null, // Our websocket
        newMsg: '', // Holds new messages to be sent to the server
        chatContent: '', // A running list of chat messages displayed on the screen
        username: null, // Our username
        joined: false, // True if email and username have been filled in
        inRoom: false,
        rooms: [],
        newRoom: '',
        currentRoom: '',
        otherPlayerChoise: '',
        otherPlayerName: '',
        playerScore: 0,
        otherPlayerScore: 0,
        isRoomFull: false,
        isTurned: false,
        isOpponentTurned: false
    },

    created: function() {
        var self = this;
    },
    
    methods: {
        send: function () {

        },

        createRoom: function () {

        },

        join: function () {

        },

        enterRoom:function (roomName){

        },

        leaveRoom:function (){

        },

        turn:function (playerChiose){

        }
    }
});