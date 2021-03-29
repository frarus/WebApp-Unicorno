
let sidebar = document.querySelectorAll('.list-group-item');


sidebar[0].addEventListener('click', (event)=>{
    if (sidebar[0].classList.contains('active')){
        return;
    }

    let main = document.querySelector('main');
    let table = document.querySelector('table');
    main.removeChild(table);

    createTable();

    taskList.list.forEach(x=>{
        insertRow(x)
    });

    let act = document.querySelector('.list-group-item.active')
    act.classList.remove('active')

    sidebar[0].classList.add('active')
    

})


sidebar[1].addEventListener('click', (event)=>{
    if (sidebar[1].classList.contains('active')){
        return;
    }

    let header = document.querySelector('#title');
    header.innerText = 'Important';

    let main = document.querySelector('main');
    let table = document.querySelector('table');
    main.removeChild(table);

    createTable();
    
    let filtered = taskList.filterUrg();

    filtered.forEach(x=>{
        insertRow(x)
    });

    let act = document.querySelector('.list-group-item.active')
    act.classList.remove('active');


    sidebar[1].classList.add('active')
    

})


sidebar[2].addEventListener('click', (event)=>{
    if (sidebar[2].classList.contains('active')){
        return;
    }

    let header = document.querySelector('#title');
    header.innerText = 'Today';

    let main = document.querySelector('main');
    let table = document.querySelector('table');
    main.removeChild(table);

    createTable();

    let filtered = taskList.filterToday();

    filtered.forEach(x=>{
        insertRow(x)
    });

    let act = document.querySelector('.list-group-item.active')
    act.classList.remove('active');

    sidebar[2].classList.add('active')

    

})

sidebar[3].addEventListener('click', (event)=>{
    if (sidebar[3].classList.contains('active')){
        return;
    }

    let header = document.querySelector('#title');
    header.innerText = 'Next 7 days';

    let main = document.querySelector('main');
    let table = document.querySelector('table');
    main.removeChild(table);

    createTable();

    let filtered=taskList.filterNext7Days();

    filtered.forEach(x=>{
        insertRow(x)
    });

    let act = document.querySelector('.list-group-item.active')
    act.classList.remove('active');

    sidebar[3].classList.add('active')

    

})


sidebar[4].addEventListener('click', (event)=>{
    if (sidebar[4].classList.contains('active')){
        return;
    }

    let header = document.querySelector('#title');
    header.innerText = 'Private';

    let main = document.querySelector('main');
    let table = document.querySelector('table');
    main.removeChild(table);

    createTable();

    /*let filtered=taskList.filterPrivate ();
    console.log(filtered)

    filtered.list.forEach(x=>{
        insertRow(x)
    });*/

    let filtered = taskList.filterPrivate();

    filtered.forEach(x=>{
        insertRow(x);
    })

    let act = document.querySelector('.list-group-item.active')
    act.classList.remove('active');

    sidebar[4].classList.add('active')

    

})
