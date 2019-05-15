let elem = document.getElementById("button");
elem.addEventListener('Click', addComment);
function addComment() {
    let commentValue = document.getElementById("newComment").value;
    if(!commentValue){
        console.log('no commit'); return;}

        let comment = document.createElement('p');
        comment.innerText = commentValue;
        comment.classList.add("commentP");
        let fieldset = document.getElementById('comFieldset');
        let div = document.createElement("div");
        div.classList.add("commentDiv");
        let data = new data();
        let comData = document.createElement('p');
        comData.classList.add('comData');
        comData.innerText = data;
        let comName = document.createElement('p');
        comData.classList.add("comName");
        comName.innerText = "by name";
        let comAva = document.createElement('img');
        comAva.setAttribute("src","img/ava.jpg");
        fieldset.insertBefore(div, fieldset.firstChild);
        div.appendChild(comAva);
        div.appendChild(comName);
        div.appendChild(comData);
        div.appendChild(comment);

}