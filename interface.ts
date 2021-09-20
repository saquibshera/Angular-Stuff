interface Data{
        name:string;
        address:string;
}
class hello{
    num1:number;
    num2:number;
    constructor(x:number,y:number)
    {
       this.num1=x;
       this.num2=y;
    }
    xyz(data:Data) {
            console.log(data.name +data.address);
    }
    calculate()
    {
        console.log(this.num1+this.num2);
    }
}
let obj = new hello(12,13);
obj.xyz({
    name:"anas",
    address:"nawakadal"
})
obj.calculate();