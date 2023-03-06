/**   Reboot, Restart, Shutdown, Screen  **/
/**   Vocal commands script              **/
/**   set partern in your language       **/
/**   @bugsounet                         **/

var recipe = {
  transcriptionHooks: {
    "GA_REBOOT": {
      pattern: "일어나",
      command: "GA_REBOOT"
    },
    "GA_RESTART": {
      pattern: "",
      command: "GA_RESTART"
    },
    "GA_SHUTDOWN": {
      pattern: "잘 자 ",
      command: "GA_SHUTDOWN"
    }
  },
  
  commands: {
    "GA_REBOOT": {
      soundExec: {
        chime: "close",
      },
      shellExec: {
        exec: "sudo turn on your monitor"
      }
    },
    "GA_RESTART": {
      soundExec: {
        chime: "close",
      },
      shellExec: {
        exec: "https://www.naver.com/"
      }
    },
    "GA_SHUTDOWN": {
      soundExec: {
        chime: "close",
      },
      shellExec: {
        exec: "sudo turn off your monitor"
      }
    }
  }
}

exports.recipe = recipe // Don't remove this line.
