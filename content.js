(function(){

    let interval_id = ""
    function applaySetting(message,sender, sendResponse){
        let data = JSON.parse(message.data)
        console.log(data)
        if(data.action == "reload"){
            location.reload()
            let list = document.querySelectorAll('li a')
            console.log(list)
        }
        
        
    }
    
    browser.runtime.onMessage.addListener(applaySetting);
})()


