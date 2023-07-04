let count=0;



function handleInputAdd(){
 
    let inp= document.getElementById("input1");

    if(inp.value === null){
        return ;
    }

    // <li class=listItem> <input type="checkbox" checked> <div> Content <button onClick="delTask()"> <img src="source"></button> </div> </li>
    // <div class="tasksss">  <li class="listItem"> content  <button onClick="delTask">   <img src="image link"></button> </li><div>
    
    
    let listToBeAppended= document.createElement("li");
    listToBeAppended.classList.add("listItem");

    let checkB=document.createElement("input");
    checkB.setAttribute("type", "checkbox");
    // checkB.setAttribute("checked");

    let newDiv= document.createElement("span");
    // newDiv.classList.add("tasksss");

    

    let delButtonOfList= document.createElement("button");
    delButtonOfList.setAttribute("onClick", "delTask()");





    let deleteTaskButtonImage= document.createElement("img");
    deleteTaskButtonImage.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/9172/9172381.png")
    deleteTaskButtonImage.classList.add("imggg");

    
    let UnorderList= document.getElementById("myTasks");

    UnorderList.append(listToBeAppended);
    listToBeAppended.append(checkB);
    listToBeAppended.append(newDiv);


    newDiv.innerText= inp.value;

    newDiv.append(delButtonOfList);

    delButtonOfList.append(deleteTaskButtonImage);

    // newDiv.append(listToBeAppended);
   
    // listToBeAppended.append(delButtonOfList);

    // delButtonOfList.append(deleteTaskButtonImage);

    // UnorderList.append(newDiv);
    // UnorderList.append(listToBeAppended);

    inp.value=null;
   

    count++;
    document.getElementById("taskleft").innerText=count;
}



function delTask(){

    console.log(this.parentNode);


    console.log("functionality to delete task has been called");







    document.getElementById("taskleft").innerText=count;

}