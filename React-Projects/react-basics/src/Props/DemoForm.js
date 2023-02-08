import React, { Component } from 'react'

export class DemoForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user : '',
         comment:'',
         lang:'react'
      }
    }
    ChangeUser = e => {
        this.setState(
            {
                user : e.target.value
            }
        )
    }
    ChangeComment = e => {
        this.setState({
            comment: e.target.value
        })
    }
    ChangeLang = e => {
        this.setState({
            lang :e.target.value
        })
    }
    storeData = e => {
        e.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
        <form onSubmit={this.storeData}>
            <div>
                <label htmlFor='user'>Username</label>
                <input type='text' id='user' value={this.state.user} onChange={this.ChangeUser} />
            </div>             
            <div>
                <label htmlFor='comment'>Comments</label>
                <textarea id='comment' value={this.state.comment} onChange={this.ChangeComment}></textarea>
            </div>
            <div>
                <label htmlFor='lang'> Lauguage</label>
                <select id='lang' value={this.state.lang} onChange={this.ChangeLang}>
                    <option>react</option>
                    <option>anguler</option>
                </select>
            </div>
            <button type='submit'>submit</button>
        </form>
    )
  }
}
export default DemoForm