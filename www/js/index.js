/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


/* setTimeout(function(){window.location.reload(1);}, 5000); */

/* setInterval(function(){ alert("Hello Every 5 Seconds"); }, 5000); */


var networkConn = function () {
	
	var navBgColor = document.querySelector(".nav-bg-color");
	var checkOnline = navigator.onLine;

	// Check if the internet connection is online or offline
	if (checkOnline == true) {
		navBgColor.classList.add("online-color");
		navBgColor.classList.remove("offline-color");
		
		// console.log("Online!");
	} else {
		navBgColor.classList.add("offline-color");
		navBgColor.classList.remove("online-color");
		
		// console.log("Offline!");
	}
	
}
// Call networkConn function for first time
networkConn();

// Interval function : Check or call networkConn() every 10 seconds
setInterval(function(){
	
	networkConn();

}, 10000);

