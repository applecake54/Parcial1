class Profile extends HTMLElement{
    static get observedAttributes (){
        return ["name", "species", "gender", "house", "dateOfBirth"]
    }
    attributeChangedCallback(propName, oldValue, newValue){
    this[propName] = newValue
    this.render()
}
constructor() {
    super()
    this.attachShadow({mode:"open"})
}
connectedCallback(){
    this.render()
}
render(){
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/Profile/Profile.css">
    <h1>name: ${this.name}</h1>
    <p>Specie: ${this.species}</p>
    <p>Gender: ${this.gender}</p>
    <p>House: ${this.house}</p>
    <p>Year of Birth: ${this.dateOfBirth}</p>
    `
}




}
customElements.define("my-profile", Profile)
export default Profile