getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/index.html")
    request.onload = () =>{
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.onerror = () =>{};
    request.send();
}
