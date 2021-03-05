import store from "../redux/store";
import {setCocktail} from "../redux/Cocktails";  // import function setCoacktails van /redux/cocktails voor lijn 28
class Cocktails {
    constructor(holder){
        this.holder = holder;
        this.formRef = null;
        this.gridRef = null;
        this.inputRef = null;
        this.init();
        this.events();


    }
    init(){  //  html opbouwen
        this.holder.innerHTML = 
        `<form action="">
            <input class="input" type="text" value=""/>
            <button>Find</button>
        </form>
        <div class="grid"></div>`;
        this.formRef = this.holder.querySelector("form");
        this.gridRef = this.holder.querySelector(".grid");
        this.inputRef = this.holder.querySelector(".input")

    }
    events(){
        this.formRef.onsubmit = (e) =>{
            e.preventDefault();         ///  Hiermee gaat je pagina niet meer refreshen
            store.dispatch(setCocktail(this.inputRef.value)) // setCocktail string wordt zo naar de functie gestuurd. /redux/Cocktails op lijn 14
            // object van setCocktail /redux/cocktails lijn 14
            //              word gesdispatched naar de store en zo naar de reducer /redux/store 
            //                               op lijn 7 gestuurd (functie createStore)
        }
    }
    //render(){

    //}

};
export default (holder) => new Cocktails(holder);