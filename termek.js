class Kartya {
    constructor(elem, adat) {
      this.elem = elem;
      
      this.cim = this.elem.children("h3");
      this.kep = this.elem.children("img");
      this.leiras = this.elem.children("p");
      this.ar = this.elem.children("span");
      this.adat = adat;  
      
      this.setAdatok(adat); 
      this.elem.on("click",() =>{
        this.kosarba();
        })
    
    
    }

    setAdatok(ertekek){
      this.cim.html(ertekek.nev);
      this.kep.attr("src", ertekek.kep);
      this.leiras.html(ertekek.leiras);
      this.ar.html(ertekek.ar);
    
      }
     
    kosarba() {
      let esemeny = new CustomEvent("kosarban", { detail: this.adat });
      window.dispatchEvent(esemeny);
      console.log("bent vagyokk azéterben ");
    }

}