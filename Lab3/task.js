'use strict'

function Task(id, desc, deadline, urg = false, priv = false){
    this.id = id;
    this.desc = desc;
    this.urg = urg;
    this.priv = priv;
    this.deadline = deadline;

    this.toString = () => (`Id = ${this.id} - "${this.desc}" - Deadline: ${this.deadline.format('DD-MM-YYYY')} - isUrgent: ${this.urg} - isPrivate: ${this.priv}`);
}

function TaskList(){
    this.list = [];

    this.add = (task) => (this.list.push(task));
    this.sortAndPrint = () => {
        let tmp = Array.from(this.list);
        tmp.sort((a,b) => a.deadline - b.deadline);
        console.log('*** Task Sorted ***');
        tmp.forEach(e => console.log(e.toString()));
    }
    this.filterUrg = () => {
        console.log("*** Task Filtered ***");
        let filtered = this.list.filter(a => a.urg === true);
        return filtered;
        //filtered.forEach(a => console.log(a.toString()));
    }

    this.filterPrivate = () => {
        console.log("*** Task Filtered ***");
        let filtered = this.list.filter(a => a.priv === true);
        return filtered;
        //filtered.forEach(a => console.log(a.toString()));
    }

    this.filterToday = () =>{
            let filtered = this.list.filter((a)=>{
            let today = dayjs(new Date());
            today=today.toISOString().slice(0,10);
                
            let ded=a.deadline.toISOString().slice(0,10);
            console.log(today)
            console.log(ded)
            return ded===today;
            })
        return filtered;
    }

    this.filterNext7Days = () =>{
        let filtered = this.list.filter((a)=>{
            let today = dayjs (new Date());
            
            console.log(today.diff (a.deadline, 'days'))
            console.log (today.diff (a.deadline, 'days')<8)
            return today.diff (a.deadline, 'days')<8 && today.diff (a.deadline, 'days')>=0
        
        })
    return filtered;
}


    this.toString = () => (this.list.map( e => (e.toString())).join('\n'));
}




