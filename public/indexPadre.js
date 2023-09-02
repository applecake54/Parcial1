import * as components from"./src/components/indexHijo.js"
import { data } from "./src/Data/Data.js"

class AppContainer extends HTMLElement{
    constructor() {
    super();
    this.attachShadow({mode:"open"}) 
    } 
    connectedCallback(){
        this.render()
    }
    render(){
        data.forEach((profile) => {
           this.shadowRoot.innerHTML += `
           <my-profile name="${profile.species}" species="${profile.name}" gender="${profile.gender}" house="${profile.house}" dateOfBirth="${profile.dateOfBirth}"></my-profile>
           <my-button><name</my-button>
           ` 
        });
    }

}
customElements.define("app-container", AppContainer)

