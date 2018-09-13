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
            if (this.newMsg != '') {
                var a = {
                    type: "message",
                    email: this.email,
                    username: this.username,
                    message: $('<p>').html(this.newMsg).text() // Strip out html
                }
                this.ws.send(
                    JSON.stringify(a));
                this.newMsg = ''; // Reset newMsg
            }
        },

        createRoom: function () {
            if (!this.newRoom) {
                Materialize.toast('You must enter room name', 2000);
                return
            }
            
            var createRequest = {
                roomName: this.newRoom
            }
            
            var wrappedCreateRequest = {
                type: "CreateRoomRequest",
                raw: createRequest
            }

            this.ws.send(JSON.stringify(wrappedCreateRequest));
        },

        join: function () {
            if (!this.username) {
                Materialize.toast('You must choose a username', 2000);
                return
            }

            var authRequest = {
                username: this.username
            }
            
            var wrappedAuthRequest = {
                type: "AuthRequest",
                raw: authRequest
            }

            this.ws.send(JSON.stringify(wrappedAuthRequest));
        },

        enterRoom:function (roomName){
            if (!roomName) {
                Materialize.toast('You must choose a room', 2000);
                return
            }

            var enterRoomRequest = {
                roomname: roomName
            }
            
            var wrappedEnterRoomRequest = {
                type: "EnterRoomRequest",
                raw: enterRoomRequest
            }

            this.ws.send(JSON.stringify(wrappedEnterRoomRequest));
        },

        leaveRoom:function (){
            if (!this.currentRoom) {
                Materialize.toast('You are not in room', 2000);
                return
            }

            var leaveRoomRequest = {
                roomname: this.currentRoom
            }
            
            var wrappedLeaveRoomRequest = {
                type: "LeaveRoomRequest",
                raw: leaveRoomRequest
            }

            this.ws.send(JSON.stringify(wrappedLeaveRoomRequest));
        },

        turn:function (playerChiose){
            if (!this.currentRoom) {
                Materialize.toast('You are not in room', 2000);
                return
            }

            var turnRequest = {
                choise: playerChiose
            }
            
            var wrappedturnRequest = {
                type: "TurnRequest",
                raw: turnRequest
            }

            this.ws.send(JSON.stringify(wrappedturnRequest));
        }
    }
});