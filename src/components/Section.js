import React, {Component} from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const placeholder = 'dd-mm-yyyy'
const mask = 'DD---MM-d-YYYY'

class Section extends Component {
  constructor(...props) {
    super(...props)
    this.state = { placeholder, value: ''}
  }
  
  handleOnchange(e) {
    const value = e.target.value
    console.log(`state: ${this.state.value} value: ${value}`)
    this.setState(state => ({
      ...state,
      placeholder: value + placeholder.substr(value.length),
      value,
    }))
  }

  render () {
    return (
        <section className='section'>
           <div style={styles}>
                  <h2>Start editing to see some magic happen {'\u2728'}</h2>
               <input>
                    style={{height: '50px', color: 'red', display: 'block', boxSizing: 'border-box'}} 
                    type="text" 
                    onChange={() => {}} 
                    redaonly 
                    value={this.state.placeholder}
                </input>
                <input>
                    style={{ height: '50px', marginTop: '-50px', display: 'block', boxSizing: 'border-box' }}
                    type="text"
                    onChange={e => { this.handleOnchange(e) }}
                    value={this.state.value}
                </input>
            </div>
        </section>
    )
  }
}

render(<App />, document.getElementById('root'));

export default Section;