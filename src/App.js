import React, {Component} from 'react';

class App extends Component {
    state = {
        "names": [
            {
                "name": "Somchai Haha",
                "tel": "0899111119"
            }, {
                "name": "Somsree Hehe",
                "tel": "0871122211"
            }, {
                "name": "Somset Haha",
                "tel": "0822211122"
            }
        ]
    }

    addName = (name,tel) => {
        this.setState({
            names: [...this.state.names,{name,tel}]
        })
    }

    render() {
        return (
            <div>
                <SearchComponent/>
                <FormComponent addName={this.addName} />
                <NamesComponent names={this.state.names}/>
            </div>
        )
    }

}

class SearchComponent extends Component {
  handleKeyDown = (e) => {
    if(e.keyCode===13) {
      //alert("ssssssss")
    }
  }

    render() {
        return (<input type='text' placeholder="Search" onKeyDown={this.handleKeyDown}/>)
    }
}

class FormComponent extends Component {
  state = {
    inputTextName:'',
    inputTextTel:''
  }

  handleNameChange = (e)=>{
    this.setState({inputTextName: e.target.value})
  }

  handleTelChange = (e)=>{
    this.setState({inputTextTel: e.target.value})
  }

  clearField = ()=>{
    this.setState({inputTextName:'',inputTextTel:''})
  }

  handleClick = ()=>{
    var name = this.state.inputTextName.trim()
    var tel = this.state.inputTextTel.trim()

    if(name.length===0){
      alert("Please fill Name.")
      this.refs.inputName.focus()
      return
    }

    if(tel.length===0){
      alert("Please fill Tel.")
      this.refs.inputTel.focus()
      return
    }

    this.props.addName(name,tel)
    this.clearField()
  }

    render() {
        return (
            <div>
                <input
                  type='text'
                  ref='inputName'
                  placeholder='name'
                  value={this.state.inputTextName}
                  onChange={this.handleNameChange}
                  />
                <input
                  type='text'
                  ref='inputTel'
                  placeholder='tel'
                  value={this.state.inputTextTel}
                  onChange={this.handleTelChange}/>
                <button onClick={this.handleClick}
                  >Add</button>
            </div>
        )
    }
}

const NamesComponent = ({names}) => (
    <ul>
        {names.map(({
            name,
            tel
        }, index) => <NameComponent key={index} name={name} tel={tel}/>)}
    </ul>

)

const NameComponent = ({name, tel}) => (
    <li>{name}:{tel}
        <button>Delete</button>
    </li>
)
export default App;
