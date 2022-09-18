class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element)
        this.top = obj.top
        this.element.style.position = 'fixed'
        this.element.style.top = this.scroll()

        this.unit = obj.unit

        window.addEventListener('scroll', () => this.scroll())
    }

    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined) {
            return innerHeight - this.element.clientHeight
        }
    }

    scroll() {
        this.number = this.scrollNumber()

        if (this.number - scrollY > 0) {
            this.element.style.top = this.number - scrollY + 'px'
        } else {
            this.element.style.top = 0
        }
    }
}

const scroll = new Scroll({
    element: '.header__nav',
    top: 100
})


class Tap {
    constructor(obj) {
        this.el = document.querySelector(obj.el)
        this.el.addEventListener('click', () => {
            this.el.style.margin = `${this.random(10)} px ${this.random(15)} px `
            
            
        })
        
    }

    random(max) {
        Math.floor(Math.random() * max);
    }
    
    
}


const tap = new Tap({
    el: '.header__content'
})