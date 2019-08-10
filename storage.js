function Storage(){

}
Storage.prototype.getTasks = function () {
    let gorevler;
    if (localStorage.getItem('tasks') === null){
        //depo boş
        gorevler = [];
        console.log("gorevler adında boş bir array döndü");
    }else{
        gorevler = JSON.parse(localStorage.getItem('tasks'));
    }
    return gorevler
    
    
}
Storage.prototype.addTasks = function(task){
    arrays = this.getTasks();
    arrays.push(task);
    localStorage.setItem('tasks',JSON.stringify(arrays));    
   
    

}
Storage.prototype.removeTasks = function(textContent){
    let array = this.getTasks();
    array.forEach(function(element,index) {
        if(textContent === element.aciklama){
            array.splice(index,1);
        }
        
    });
    localStorage.setItem("tasks",JSON.stringify(array));

}