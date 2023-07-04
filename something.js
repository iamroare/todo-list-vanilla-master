
let c=0;
let taskleft= document.getElementById("taskleft");


// random function has been created
function randomNum(n){
    return Math.floor(Math.random()*n);
}

//functionality to handle input add into the list
function handleInputAdd(){

    let inp=document.getElementById("input1");

    if(inp.value == ""){

        alert("plz enter something");
        return;
    }

    // let randId=randomStr(12, '12345abcde'); // will give a unique id to every list items
     randId= randomNum(100000);
    // randId= randId.toString\

    

    let ul=document.getElementById("myTasks");

    let listItem=document.createElement("li");

    listItem.innerHTML= `
    <input type="checkbox" class="class-checkbox" onClick="handleListClick(${randId})" data-id="${randId}" >
    <span class="class-content" >  ${inp.value} </span>
     <img src="https://cdn-icons-png.flaticon.com/512/9172/9172381.png" 
     class="class-deletebtn "
      data-id="${randId}"
      onClick="delTask(${randId})" />
    `

    listItem.setAttribute("class","listItems");
    ul.appendChild(listItem)

    console.log(randId);
    inp.value=null;

    c++;
    taskleft.innerText=c;
    
}

// function to deelete the task.........


function delTask(gotId){

    console.log("delete functionality has been called");

            console.log("got id", gotId);

            let ulList = document.getElementById("myTasks");

// let deleteIndex=-1;
            for(let i=0;i<ulList.childElementCount;i++){
            let foundId= ulList.children[i].children[0].getAttribute("data-id");

                if(foundId== gotId){
                    // ulList.removeChild

                    // deletting the particular list item
                    var listElements = document.querySelectorAll("#myTasks li");

                    var li=listElements[i];

                    li.parentNode.removeChild(li);


                    console.log(i);

                    c--;

                    taskleft.innerText=c;
                    return;
                }
       
    }

   
   


    




}

// function to handle click on particular list

function handleListClick(gotId){
    console.log("the list item has been clicked with id", gotId);
}



// this function delete all task list at once only
function deleteAllTask(){

    var listElements = document.querySelectorAll("#myTasks li");


            for (var i = 0; (li = listElements[i]); i++) {
            li.parentNode.removeChild(li);
            }

}