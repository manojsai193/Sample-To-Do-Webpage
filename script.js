function addTask()
{
const taskInput=document.getElementById("taskInput");
const taskText = taskInput.value.trim();
if(taskText==="")
{
    alert("please enter a task");
    return;
}
const li=document.createElement("li");
li.textContent=taskText;


const delbtn=document.createElement("button");
delbtn.textContent="delete";
delbtn.style.color="red";
delbtn.className="delete-btn";
delbtn.onclick=function()
{
    li.remove();
}
li.appendChild(delbtn);
document.getElementById("taskList").appendChild(li);
taskInput.value="";
}