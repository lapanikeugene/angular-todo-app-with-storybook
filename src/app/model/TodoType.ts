export class Todo {
    content:string;
    completed:boolean;

    constructor(){
        this.content="";
        this.completed=false;
    }
    
}


export type TodoType = typeof Todo