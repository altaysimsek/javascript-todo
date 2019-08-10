function UI(){

}
UI.prototype.addtoTask =function(task){
    const tasklist = document.getElementById("taskler");
    tasklist.innerHTML += `
    <span class="animated pulse list-group-item list-group-item">
    <div class="d-flex w-100 justify-content-between">
     <h5 class="mb-1">${task.title}</h5>
     <small><span class="badge badge-pill badge-info">Önemi : ${task.deger}</span></small>
    </div>
    <hr>
    <div class="row justify-content m-auto">
    <p class="col-sm-10 mb-1">${task.aciklama}</p>
    <button id="delete"type="button" class="col-sm-2 btn btn-outline-danger btn-sm">Bunu sil!</button>
    </div>
    </span>
    
    
    
    `;

}
UI.prototype.showMassage = function(massage,style){
    const element = document.createElement("div");
    element.className="alert alert-"+style;
    element.textContent=massage;
    const form = document.getElementById("task-form");
    form.appendChild(element);
    element.classList.add('animated', 'flash');
    element.addEventListener('animationend', function(){
        setTimeout(function(){
            element.classList.remove("flash");
            element.classList.add('bounceOut');
            element.addEventListener("animationend",function(){
            element.remove();
        })
        },1500)
    })

    
    
}
UI.prototype.showStoTask = function(array){
    if(array.length == 0){
        const tasklist = document.getElementById("taskler");
        const alert = document.createElement("div");
        alert.className = "alert alert-warning";
        alert.textContent = "Gösterilecek bir göreviniz yok.";
        tasklist.appendChild(alert);
        setTimeout(function(){
            alert.remove();
        },5000)
        

    }else{
        array.forEach(element => {
            this.addtoTask(element);
        });
    }
    
}
UI.prototype.removetheTask = function(target){
    target.parentElement.parentElement.remove();

}
