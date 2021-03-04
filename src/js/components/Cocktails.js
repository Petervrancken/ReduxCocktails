import store from "../redux/store";

class Cocktails {
    constructor(holder){
        this.holder = holder;
        this.fromRef = null;
        this.gridRef = null;
        this.inputRef = null;
        this.init();
        console.log(store.getState());

    }
    init(){  //  html opbouwen
        this.holder.innerHTML = 
        `<form action="">
            <input class="input" type="text" value=""/>
            <button>Find</button>
        </form>
        <div class="grid"></div>`;
        this.fromRef = this.holder.querySelector("form");
        this.gridRef = this.holder.querySelector(".grid");
        this.inputRef = this.holder.querySelector(".input")

    }
    events(){
        this.fromRef.onsubmit = (e) =>{
            e.preventDefault();         ///  Hiermee gaat je pagina niet meer refreshen
        }
    }
    //render(){

    //}

};
export default (holder) => new Cocktails(holder);