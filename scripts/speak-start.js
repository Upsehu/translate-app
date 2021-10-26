function speak(){
    
    var msg = document.body;
    var cr = "<br />";
    var event_list = ["onaudioend", "onaudiostart", "onend", "onerror", "onnomatch", "onresult", "onsoundend", "onsoundstart", "onspeechend", "onspeechstart", "onstart"];
    var sr = window.SpeechRecognition || window.webkitSpeechRecognition || false;
    
    if (sr) {
        var recognition = new sr();
        event_list.forEach(function(e) {
            recognition[e] = function() { 
                console.log(event); 
                var txt = event.type + ": ";
                if (event.results) txt += event.results[0][0].transcript;
                if (event.error) txt += event.error; // "not-allowed" usually is because of not using secure https protocol
                if (event.type == "end") 
                    recognition.start(); // Start Recognition again
                msg.innerHTML += txt + cr;
            };  
        });
        recognition.start();
    }
    else {
        msg.innerHTML += "This browser does not support SpeechRecognition or webkitSpeechRecognition." + cr;
    }
}

export { speak };