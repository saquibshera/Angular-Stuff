class basics{
            name:string;
            age:number;
            ispresent:boolean;
            abc()
            {
                console.log("hello");
            }
}

var obj =new basics();   //instance of a class
obj.abc();
obj.name="saquib";
console.log(obj.name);