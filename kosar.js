class Kosaramban {
    constructor() {
        this.kosara=[];
        this.osszar=0;
        
       



    }
    setelemkosarba(elem,ar){
        this.kosara.push(elem);
        this.kosara.push(ar);
        this.megjelenit();
        $(".torles").on("click",function(){
            let data=$(this).attr("data-id");
            this.kosara.splice(data,2);
            
            this.megjelenit();
    
            })
    }
    
    megjelenit(){
         $("#kosaram").html("<table>");
    var txt="";
    this.osszar=0;
    for (let i = 0; i < this.kosara.length; i++) {
        console.log(i);
        txt+="<tr id='"+i+"'>";
        this.osszar+=this.kosara[i+1];
            txt+="<td>"+this.kosara[i]+"</td>";
            txt+="<td>"+this.kosara[i+1]+"</td>";
            txt+="<td><button class='torles' data-id="+i+" >X</button></td>";
            
            i++;
 
       $(".kosar span").html(this.osszar);
        }
        $("#kosaram table").append(txt);

    }
   
    
        

}