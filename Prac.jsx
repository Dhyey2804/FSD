import React from "react";
class Prac extends React.Component{
    constructor(props){
        super(props);
        this.dateref = null;
        this.timeref = null;

        setInterval(() => {
            const now = new Date();
            const formatteddate = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
            const formattedtime = now.toLocaleTimeString();

            if(this.dateref) {
                this.dateref.textContent = `Date is : ${formatteddate}`;
        }
            if(this.timeref) {
                this.timeref.textContent = `Time is : ${formattedtime}`;
            }
        }, 1000);
    }
    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <h1><strong>Welcome to <span>Charusat</span></strong></h1>
                <p ref={(element) => this.dateref = element}></p>
                <p ref={(element) => this.timeref = element}></p>
            </div>
        );
    }
}
export default Prac;