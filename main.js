import {createElement,Component,rander} from './toy-react'
class MyComponent extends Component{
  constructor(){
    super()
    this.state={a:1,b:2}
  }
  rander(){
    return <div><h1>My component</h1>
      <button onclick={()=>{this.setState({a:this.state.a+1})}}>add</button>
      <span>{this.state.a.toString()}</span>
      <span>{this.state.b.toString()}</span>
      
    </div>
  }
}



rander(<MyComponent id="a" class="c">
<div>123</div>
<div></div>
<div></div>
</MyComponent>,document.body)