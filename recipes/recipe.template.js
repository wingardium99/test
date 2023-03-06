var recipe = {
  transcriptionHooks: {

    "MJ": {
      pattern: "네이버",
      command: "MJ"
    }
    
    },

  commands: {

    "MJ": {
       notificationExec: {
        notification: "EXT_BROWSER-OPEN",
        payload: (param) => {
              return "https://www.naver.com"
            }
          },
      soundExec: {
        chime: "open"
      },
      displayResponse : false
    }
   
  }
}


exports.recipe = recipe // Don't remove this line.
