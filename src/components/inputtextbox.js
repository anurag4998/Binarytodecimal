import React from 'react';
import Button from './button';

class Textbox extends React.Component {
    state = {
        text: "",
    }


    // input = (event) => {
    //     this.setState((prevstate) => {

    //         return {
    //             text: event.target.value

    //         }
    //     });
    // }

    input = (event) => {
        const re = /^[0-1\b]+$/;
        event.preventDefault()
        if (event.target.value === '' || re.test(event.target.value)) {

            this.setState({ text: event.target.value });
            //console.log(this.state.text)
        }
    }

    handlesubmit = (event) => {

        if (!this.state.text) {
            alert('Enter a binary!!!')
        }
        else {

            this.props.handlebinary(this.state.text);

        }

    }
    render() {
        return (
            <div className='Inputbox' >
                <textarea onChange={this.input} value={this.state.text} className="inputtextboxarea" placeholder='Enter your binary' >
                </textarea>
                <Button function={this.handlesubmit}></Button>

            </div>


        )
    }

}


export default Textbox