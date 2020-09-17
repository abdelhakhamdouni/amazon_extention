$(function(){
    let zone = [];
    let zonedetravail = []
    let messageJson=""

    let etage = document.querySelectorAll('input[name="floor"]');
    let zones = document.querySelectorAll('.picktower__choice label input');
    let interval = document.querySelector('#refreche').value;
    let checked_zone = document.querySelectorAll('input[name="zone"]:checked');
    let floor = document.querySelector(' input[name="floor"]:checked').value;

    checked_zone.forEach(ele =>{
        zone.push(ele.value)
    })

    zones.forEach(ele => {
        ele.addEventListener('click',(ele)=>{
            if(zone.includes(ele.target.value)){
                zone = zone.filter(z => z !== ele.target.value);
            }else{
                zone.push(ele.target.value);
            }
            //console.log(zone)
        })
    });

    etage.forEach(ele => {
        ele.addEventListener('click',(ele)=>{
            floor = ele.target.value;
        })
    });


    function handleError(error) {
        console.log(`Error: ${error}`);
    }
    function changeZone(){
    
    }
        
    function notifyBackgroundPage(tabs) {
        zonedetravail = []
        zone.forEach(ele=>{
            zonedetravail.push(floor+ele)
        })
        interval = document.querySelector('#refreche').value;
        //console.log(zonedetravail)
        browser.runtime.sendMessage(
                { setting :  JSON.stringify({
                        zone: zonedetravail,
                        interval :  interval
                    })
                }
        ) 
        

    }
    $('#submit').on('click',()=>{
        if(zone.length < 1){
            alert('veuillez choisir une zone')
            
        }else{
            notifyBackgroundPage();
        }
    });


    window.open('https://ormes-web-service.fr')

})