class Button extends HTMLElement{
    static get observedAttributes(){
        return["alternateName"]
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue
        this.mount()
    }
    constructor() {
        super()
        this.attachShadow({mode:"open"})
        this.onButtonClicked=this.onButtonClicked.bind(this)
    }
    connectedCallback(){
        this.mount()
    }
    mount(){
        this.render()
        this.addListeners()
    }
    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click", this.onButtonClicked);
    }
    onButtonClicked(){
        const currentValue = this.getAttribute("alternateName")
        this.setAttribute("name", "alternate name");
    }
    
    render(){
        this.shadowRoot.innerHTML=`
        <section>
        <p>User Name</p>
        <button>${this.getAttribute("alternatename")}</button>
        </section>
        `
    }



}
