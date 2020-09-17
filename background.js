var liste = []

let str = "";

let inter = "";

function applaySetting(message,sender, sendResponse){
   let m = JSON.parse(message.setting)
    console.log(message.setting)
    inter = m.interval
    setInterval(()=>{
                browser.tabs.query({url: "*://*.ormes-web-service.fr/*"})
                .then((tabs) => {
                    browser.tabs.sendMessage(tabs[0].id, {
                        data :  JSON.stringify(
                            {
                                action :'reload',
                                zone: m.zone
                            })
                    });
                    
                })
                .catch(err => browser.tabs.create({
                    url:"https://ormes-web-service.fr"
                  })
                )
    }, 5000)
}

//ajouetr un listner sur la page pour la liste des li
// si un changement y on lance une notification
  
function notify(message) {
   // var title = browser.i18n.getMessage(zonedetravail);
    //var content = browser.i18n.getMessage("list", zonedetravail);
    console.log(`at background ${message.setting}`)
    
        browser.notifications.create({
            "type": "basic",
            "iconUrl": browser.extension.getURL("img/watchx48.png"),
            "title": "title",
            "message": message.setting
        });
  }
  /*
  Assign `notify()` as a listener to messages from the content script.
  */



 
  browser.runtime.onMessage.addListener(applaySetting);
