function createTable(){
    let main =document.querySelector('main');

    let table = document.createElement('table');
    table.className = "table table-striped";
    
    let tbody = document.createElement('tbody');
    tbody.className= "row-cols-3"
    table.appendChild(tbody);
    main.appendChild(table);
}

function insertRow (task1){
    let priv=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-person-square " viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg> `;
    let tbody=document.querySelector('tbody');
    let row=document.createElement('tr');
    let column=[];
    column.push(document.createElement('th'));
    column.push(document.createElement('th'));
    column.push(document.createElement('th'));

    column[1].className='text-center';
    column[2].className='text-right';

    //let task1 = new Task('01', "Complete Lab 3", dayjs(new Date(2021, 3, 30)), false, true);

    if (task1.urg){
        column[0].innerHTML='<input type="checkbox"></input>'+ '<span class="text-danger">'+task1.desc+' </span>'
    }else
    column[0].innerHTML= '<input type="checkbox"></input>'+"  "+ task1.desc

    row.appendChild(column[0]);


    if (task1.priv === true){
        column[1].innerHTML = priv;
    } else column[1].innerHTML='';
    row.appendChild(column[1]);


    column[2].innerText =task1.deadline.format('DD-MM-YYYY');

    row.appendChild(column[2]);

    tbody.appendChild(row);



}



createTable();
const t1 = new Task('01', "Cibo Cani", dayjs(new Date(2021, 2, 30)), undefined, undefined);
const t2 = new Task('03', "Cambiare nome al peluche", dayjs(new Date(2025, 8, 10)), true, true);
const t3 = new Task('02', "Andare al bar", dayjs(new Date(2018, 3, 22)), true, false);

const taskList = new TaskList();

taskList.add(t1);
taskList.add(t2);
taskList.add(t3);

taskList.list.forEach(x=>{
    insertRow(x)
});
/*
console.log(taskList.toString());

taskList.sortAndPrint();
taskList.filterAndPrint();

*/



