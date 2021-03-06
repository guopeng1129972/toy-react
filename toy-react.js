const RENDER_TO_DOM = Symbol('rander_to_dom')

class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase()), value)
    } else {
      this.root.setAttribute(name, value)
    }
  }
  appendChild(component) {
      let range = document.createRange()
      range.setStart(this.root, this.root.childNodes.length)
      range.setEnd(this.root, this.root.childNodes.length)
      component[RENDER_TO_DOM](range)
    }
    [RENDER_TO_DOM](range) {
      range.deleteContents()
      range.insertNode(this.root)
    }

}

class TextWrapper {
  constructor(content) {
      this.root = document.createTextNode(content)
    }
    [RENDER_TO_DOM](range) {
      range.deleteContents();
      range.insertNode(this.root);
    }

}

export class Component {
  constructor() {
    this.props = Object.create(null)
    this.children = [];
    this._root = null;
    this._range = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
      this.children.push(component)
    }
    [RENDER_TO_DOM](range) {
      this._range = range;
      this.rander()[RENDER_TO_DOM](range);
    }
  rerender() {
    this._range.deleteContents();
    this[RENDER_TO_DOM](this._range)
  }
  setState(newState) {
    if (this.state === null || typeof this.state !== 'object') {
      this.state = newState
      this.rerender()
      return
    }
    let merge = (oldState, newState) => {

      for (let i in newState) {
        if (typeof oldState[i] === null || typeof oldState[i] !== 'object') {
          oldState[i]=newState[i]
        }else{
          merge(oldState[i],newState[i])
        }

      }

    }
    merge(this.state, newState)
    this.rerender()

  }
}

export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === 'string') {
    e = new ElementWrapper(type)
  } else {
    e = new type;
  }

  for (let i in attributes) {
    e.setAttribute(i, attributes[i])
  }
  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      if ((typeof child === 'object') && (child instanceof Array)) {
        insertChildren(child)
      } else {
        e.appendChild(child)
      }
    }
  }
  insertChildren(children)
  return e
}

export function rander(component, parentElement) {
  let range = document.createRange()
  range.setStart(parentElement, 0)
  range.setEnd(parentElement, parentElement.childNodes.length)
  range.deleteContents()
  component[RENDER_TO_DOM](range)
}