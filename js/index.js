import { translate } from "../scripts/translate.js";

import { speak } from "../scripts/speak-start.js"

let translate_btn = document.getElementById('translate');

let speak_btn = document.getElementById('speak');
speak_btn.addEventListener('click', function(){
    speak();
})

translate_btn.addEventListener('click', function(){
    doTranslate();
});

function doTranslate(){
    let query = document.getElementById('input').value;

    let src = document.getElementById('input-lang-selector').value;

    let dest = document.getElementById('output-lang-selector').value;

    console.log(query, src, dest);

    let output = document.getElementById('output')

    let promise = translate(query, src, dest);

    promise
        .then(function(res){
            console.log(res);
            output.innerText = res.translatedText;
        })
        .catch(function(err){
            console.log(err);
        })

}

