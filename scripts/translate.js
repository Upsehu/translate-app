async function translate(query,src, dest){
    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: `${query}`,
            source: `${src}`,
            target: `${dest}`
        }),
        headers: { "Content-Type": "application/json" }

    
    });

    return await res.json();

}

export {translate}