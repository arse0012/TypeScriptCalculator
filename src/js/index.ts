new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        number1: "",
        number2: "",
        operation: "",
        result: ""
    },
    methods: {
    calculate() {
        if(this.operation== "+") {
            this.result=this.number1 + this.number2
        }
        else if(this.operation == "-"){
            this.result=this.number1 - this.number2
        }
        else if(this.operation == "*"){
            this.result=this.number1 * this.number2
        }
        else if(this.operation == "/"){
            this.result=this.number / this.number2
        }
        console.log(this.result.toString())
    }
}
})