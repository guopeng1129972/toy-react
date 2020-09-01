import {createElement,Component,rander} from './toy-react'
class MyComponent extends Component{
  rander(){
    return <div><h1>My component</h1>
      {this.children}
    </div>
  }
}



rander(<MyComponent id='a' class="c">
<div>123</div>
<div></div>
<div></div>
</MyComponent>,document.body)