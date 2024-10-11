import wixData from 'wix-data';
import wixLocation from 'wix-location';
import { getValuesFromSheet } from 'backend/googleApi';
 
 
async function checkData(){
    // console.log("Checking Data...")
    try{
        let scores = await getValuesFromSheet("commerciaux!G2:G3");
        // console.log($w("#text181"));
        $w("#text181").text = scores[0].toString();
        // console.log("Score 1 : "+ scores[0] + " et score 2 : "+ scores[1]);
        $w("#text180").text = scores[1].toString();
    } catch(e){
        wixLocation.to(wixLocation.url);
    }

    waitForLoading();
    
    let res = await getValuesFromSheet("commerciaux!A2:B10");
    for(let i = 0; i < res.length ; i++) {
        let player = res[i];
        let results = await wixData.query("alternant")
                            .eq("prenom",player[0])
                            .find()
        if(results.items.length>0) {
                let item = results.items[0];
                item.score = Number(player[1].replace(',','.'));
                await wixData.update("alternant", item);
        }
 
        results = await wixData.query("cdi")
                            .eq("prenom",player[0])
                            .find()
        if(results.items.length>0) {
                let item = results.items[0];
                item.score = Number(player[1].replace(',','.'));
                await wixData.update("cdi", item);
            }
        
    }
    // refreshUI();
    
}
 
 
async function setCountdown(){
    
    let future  = Date.parse("Decembre 31, 2024 23:59:00");
    let diff    = future - new Date();
  
    let days  = Math.floor( diff / (1000*60*60*24) );
    let hours = Math.floor( diff / (1000*60*60) );
    let mins  = Math.floor( diff / (1000*60) );
    let secs  = Math.floor( diff / 1000 );
  
    let d = days;
    let h = hours - days  * 24;
    let m = mins  - hours * 60;
    let s = secs  - mins  * 60;
  
    // console.log("update timer");
    // console.log(d,h,m,s);
    $w("#text189").text = String(s);
    $w("#text187").text = String(m);
    $w("#text185").text = String(h);
    $w("#text182").text = String(d);
}

function waitForLoading(){
    $w("#box36").hide("fade")
}
$w.onReady(function () {
 
    setInterval(()=> {
        setCountdown();
    }, 1000);
    })
    checkData().then(()=>{

 
    setTimeout(()=>{
        wixLocation.to(wixLocation.url);
    },5*60000)
 
 
}
);