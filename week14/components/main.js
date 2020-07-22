import { createElement, Text, Wrapper } from './createElement';

class Carousel {
    constructor(config){
        this.children = [];
        this.attributes = new Map();
        this.propterties = new Map();
    }

    setAttribute(name, value) { //attribute
       this[name] = value;
    }

    appendChild(child){
        this.children.push(child);
    }

    render(){
        let children = this.data.map( url => {
                let element = <img src={url}/>
                element.addEventListener('dragstart', event => event.preventDefault())
                return element;
            })
        let root = <div id="carousel">
            {children}
        </div>
        let position = 0;

        let nextPic = () => {
            let nextPosition = (position + 1) % this.data.length;
                
            let current = root.childNodes[position];
            let next = root.childNodes[nextPosition];

            current.style.transform = `translateX(${- 100 * position}%)`
            next.style.transform= `translateX(${100 - 100 * position}%)`

            position = nextPosition;

            setTimeout(nextPic, 3000);
        }
        return root;
    }

    mountTo(parent){
        this.render().mountTo(parent);
    }
}


/*let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
        <div></div>
        <p></p>
        <div></div>
        <div></div>
    </div>*/

let component = <MyComponent>
    <div>text text text</div>
</MyComponent>
    

component.mountTo(document.body);
/*
var component = createElement(
    Parent, 
    {
        id: "a",
        "class": "b"
    }, 
    createElement(Child, null), 
    createElement(Child, null), 
    createElement(Child, null)
);
*/

console.log(component);

//componet.setAttribute("id", "a");