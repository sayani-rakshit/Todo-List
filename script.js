var input=document.getElementById('inputtask');
var list=document.getElementById('tasklist');
function add(){
    var task= input.value;
    if(task!==""){
        var li=document.createElement('li');
        li.textContent=task;
        list.appendChild(li);
        input.value="";
        var deletbtn=document.createElement('button');
deletbtn.innerText="Delete";
li.appendChild(deletbtn);
deletbtn.addEventListener('click',()=>{li.remove();

})
   }
else{
    alert('input task');
    return;
}
};
