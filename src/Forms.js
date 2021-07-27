import React,{Component} from 'react';
class Forms extends Component{
    constructor(props){
        super(props)
        this.state={
            'firstname':'',
            'lastname':'',
            'email':'',
            'topic':''
        }
    }
    handlefirstnameChange=(event)=>{
        this.setState({
            firstname:event.target.value
        })
    }
    handlelastnameChange=(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }
    handleemailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`FirstName:${this.state.firstname} LastName${this.state.lastname} Email:${this.state.email} Topic:${this.state.topic}`)
        event.preventDefault()
    }
      render(){
          return(
              <div>
              <h1>Registration Form</h1>
               <form onSubmit={this.handleSubmit}>
                <div>
                <h2><label>First Name:</label>
                <input type="text" value={this.state.firstname} onChange={this.handlefirstnameChange}/></h2>
                </div>
                <div>
                <h2><label>Last Name:</label>
                <input type="text" value={this.state.lastname} onChange={this.handlelastnameChange}/></h2>
                </div>
                <div>
                <h2><label>E-mail:</label>
                <input type="text" value={this.state.email} onChange={this.handleemailChange}/></h2>
                </div>
                <div>
                <h2><label>Subjet:</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='None'>None</option>
                    <option value='React'>React</option>
                    <option value='AndroidAppDev'>AndroidAppDev</option>
                    <option value='DataScience'>DataScience</option>
                </select></h2>
                    <button id="sub" type="submit">Submit</button></div>
                    <div>
                    <h1 id="details"> </h1> 
                    <h3>{this.state.firstname}</h3>
                    <h3>{this.state.lastname}</h3>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.topic}</h3>
                </div>
                </form>
                </div>
          ) 
      }
}
export default Forms;