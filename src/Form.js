import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname: '',
            lastname: '',
            email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstname, lastname, email } = this.state; 

        return (
            
            <form onSubmit={this.onFormSubmit}>
                
                <div class="block"><label for="firstname">FirstName</label>
                <input
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={firstname} 
                    onChange={this.handleChange} />
                </div>

                <div class="block"><label for="lastname">LastName</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={lastname} 
                    onChange={this.handleChange} />
                </div>

                

                <div class="block">
                <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                </div >
                
                <div class="block1">
                <button type="submit">
                    Add User
                </button>
                </div>
                
            </form>
        );
    }
}

export default Form;