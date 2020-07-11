import React, { Component } from 'react'

export class Form extends Component {
    render() {
        
        this.state={
            
            name:'',
            email:'',
            slug:'',

        };

        return (
            <div>
                <div className="field">

                    <label className="label"> Name</label>
                    <div className="control">
                        <input className="input" type="text" value={this.state.name}/>
                    </div>

                    <label className="label"> Email</label>
                    <div className="control">
                        <input className="input" type="text" value={this.state.email}/>
                    </div>

                    <label className="label"> Email</label>
                    <div className="control">
                        <input className="input" type="text" value={this.state.slug}/>
                    </div>

                    <div className="control">
                        <button class="button is-link -light"> Cancel</button>
                    </div>



                </div>



            </div>
        )
    }
}

export default Form
