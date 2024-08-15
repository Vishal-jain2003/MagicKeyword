// alert('copyright owner Vishal jain');
const container=document.getElementById("keycontainer");
container.innerHTML=generateHTML("-","-","-")

window.addEventListener("keydown",(e) =>{
    container.innerHTML=generateHTML(e.key,e.code,e.key.charCodeAt(0));

});

function generateHTML(key,code,keycode){
    
    
    
    return `
    <div class="key-container">
        <h4>Key</h4>
        <div class="key-content ">${key === " " ? "Space" : key}

        </div>
    </div>
    <div class="key-container">
            <h4>code</h4>
            <div class="key-content ">${code}

            </div>
        </div>
        
        <div class="key-container">
            <h4>keycode</h4>
            <div class="key-content ">${keycode}

            </div>
        </div>`
 ;
}