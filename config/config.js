/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
	electronOptions: {
		webPreferences: {
			webviewTag: true
		}
	},						// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "ko",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-MonthCalendar',
			position: "top_left",
			header: "",
			config: {
				updateDelay: 60,
				showAdjacentMonths: true
			}
		},
		{
			module: "calendar",
			header: "일정표",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/heonik123%40gmail.com/private-1daa6ece6d9e2c28be275e544900168c/basic.ics"
					}
				]
			}
		},
		
		
		{
			module: "MMM-GoogleAssistant",
			configDeepMerge: true,
			config: {
				Extented: {
    					youtube: {
					useYoutube: true,
 					youtubeCommand: "youtube",
  					displayResponse: true,
  					useVLC: true,
  					minVolume: 30,
  					maxVolume: 100,
  					username: null,
  					token: null
				}
					},
				stopCommand: "고마워",
				assistantConfig: {
				  lang: "ko-KR",
				  latitude: 37.3460,
				  longitude: 126.550,
				},
				recipes: ["Reboot-Restart-Shutdown.js","recipe.template.js", "../../EXT-YouTube/recipe/EXT-YouTube.js"],
			}
		},
		{
		module: 'Gateway'
	},
	{
		module: "EXT-Detector",
		position: "top_left",
		configDeepMerge: true
	},
	{
  module: 'EXT-Alert',
  config: {
    debug: false,
    ignore: []
  }
},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Ulsan",
				locationID: "1833747", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "215fd452b4807835bd6f301177fa7016"
			}
		},
		{
  module: 'MMM-SmartTouch', 
  position: 'bottom_right',    // This can be any of the regions.(bottom-center Recommended)
  config:{ 
    // None configuration options defined 
  }
},
{
        module: "MMM-Voice-Commands",
        config: {
            debug: false, //Displays end results and errors from annyang in the Log
            autoStart: true, //Adds annyang commands when it first starts
            activateCommand: "hello", //Command to active all other commands
            deactivateCommand: "bye", //Command to deactivate all other commands
            alertHeard: false, //Whether an alert should be shown when annyang hears a phrase (mostly for debug)
            commands: {
                "command statement :variable (optional statement)": "SOCKET_NOTIFICATION_NAME",
                //The payload of the socket notification will be whatever is said in the :variable
                "command statement *variable": function(param){
                    alert("Whatever is said in the *variable space is given as the "+param);
                    //These function's 'this' are bound to the module's 'this' so you can do stuff like:
                    this.sendNotification("PAGE_SELECT", "2");
                }
            }
        }
    },

  
		{
		module: "EXT-Browser",
		config: {
			debug: false,
			displayDelay: 60 * 1000,	// 웹페이지를 보여줄 시간 [ms]
			scrollActivate: false,	// 자동스크롤 할지
			scrollStep: 25,
			scrollInterval: 1000,
			scrollStart: 5000
		}
	},
		{
			updateInterval: 5000, 
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New",
						url: "http://fs.jtbc.joins.com//RSS/newsflash.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
