$(function () {
    const termek=[];
    const kosra=new Kosaramban();
    
    let indexelt=0
    $.ajax(
        {url: "termekek.json",
     success: function(result){
        console.log(result);
        for (let i = 0; i < result.length; i++) {           
            termek.push(result[i]);            
        }
        
        console.log(termek);
           termekekMegjelintese();
           
         
      }});
      function termekekMegjelintese(){
      const szuloElem = $(".termekek");
      const sablonElem = $(".termek");
      for (let i = 0; i < termek.length; i++) {
        const ujElem = sablonElem.clone().appendTo(szuloElem);
        const ujkartya = new Kartya(ujElem, termek[i]);
      }
      sablonElem.remove();
    }
    $(window).on("torlese", (esemeny) => {
        console.log(esemeny.detail);
        $(".torles").on("click",function(){
            console.log(this.id);
            kosra.torles(this.id);
            })
    });
    $(window).on("kosarban", (esemeny) => {
        console.log(esemeny.detail);
      
        kosra.setelemkosarba(esemeny.detail.nev,esemeny.detail.ar);
        
        




    });
    
      
})