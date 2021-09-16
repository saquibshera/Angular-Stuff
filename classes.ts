export class information{
            description:any;
            name:string;
            address:string;
            mno:string;
            submitinfo(nam:string,addresss:string,mno?:string)
            {
                console.log("the name is "+ nam+"and address is "+addresss +"the mno is"+mno);
            }
            getdata(info:Array<string>)
            {
                 
                  for(var i=0;i<info.length;i++)
                  {
                        console.log(info[i]);
                  }


            }
}
var arr:Array<string>=["saquib","aamir","sneha","manish"];
var saquib=new information();
saquib.name="saquib";
saquib.address="karanagar";
saquib.mno="123456789";
saquib.submitinfo(saquib.name,saquib.address);

saquib.getdata(arr);
var sneha= new information();
sneha.name="sneha";
sneha.address="delhi";
sneha.mno="000000000";