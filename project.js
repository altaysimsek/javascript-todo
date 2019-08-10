//elementleri sectim;
const form = document.getElementById("task-form");
const taskler = document.getElementById("taskler");
const inputIsElement = document.querySelector("#myIs");
const inputDetayElement = document.querySelector("#myIsDetay");
const inputDegerElement = document.querySelector("#deger");


//UI objesini çağırma
const ui = new UI();
//depo cagırma
const depo = new Storage();
//depodakileri getirme
const gorevler = depo.getTasks();
ui.showStoTask(gorevler);



eventListeners();

function eventListeners() {
    form.addEventListener("submit",addTask);
    taskler.addEventListener("click",delTask);
}

function addTask(e){
    const title = inputIsElement.value;
    const aciklama = inputDetayElement.value;
    const deger = inputDegerElement.value;
    if (title === ""){
        ui.showMassage("Lütfen başlık kısmını doldurun.","danger");
    }else{
        const task = new toDo(title,aciklama,deger);
        ui.addtoTask(task);
        depo.addTasks(task);
        ui.showMassage("Başarıyla eklendi","success");
    }

    e.preventDefault();
}
function delTask(e){
    
    if(e.target.id == "delete"){
        depo.removeTasks(e.target.previousElementSibling.textContent);
        ui.removetheTask(e.target);


    }
}