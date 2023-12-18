import React from "react";
import "./banner.css";
import { Zinfo } from "../z-clip/z-clip";

export class Banner extends React.Component{

    constructor(props){
        super(props);
        this.state = {country: this.props.country};
    }

    render(){
        return(
            <>
                <div className='Back' style={{backgroundImage: `url("/img/Countries/${this.props.country}.jpeg")`}}>    
                    <Welcome countries={this.props.country}/>
                </div>
                
                <Zinfo country={this.props.country}/>
            </>
        )
    }
} 

class Welcome extends React.Component{

    render(){

        switch(this.props.countries){
            case 'US':
                return  <div className="welc us">
                            <h3>Welcome to,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Home of the Z Clip</h2>
                        </div>

            case 'England':
                return  <div className="welc uk">
                            <h3><span style={{color:"rgb(6, 6, 88)"}}>Wel</span><span style={{color:"red"}}>co</span><span style={{color:"white"}}>me</span> to,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Home of the Z Clip</h2>
                        </div>

            case 'Germany':
                return  <div className="welc ger">
                            <h3><span style={{color:"black"}}>Will</span><span style={{color:"red"}}>kom</span><span style={{color:"yellow"}}>men</span> bei,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Zuhause der Z Clip</h2>
                        </div>


            case 'France':
                return  <div className="welc fr">
                            <h3><span style={{color:"darkblue"}}>Bien</span><span style={{color:"red"}}>ve</span><span style={{color:"white"}}>nue</span> à,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Maison des Z Clip</h2>
                        </div>

            case 'Spain':
                return  <div className="welc sp">
                            <h3><span style={{color:"red"}}>Bien</span><span style={{color:"yellow"}}>ve</span><span style={{color:"red"}}>nido</span> a,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Casa de los Z Clip</h2>
                        </div>

            case 'Portugal':
                return  <div className="welc pt">
                            <h3><span style={{color:"rgb(40, 186, 40)"}}>Bem</span><span style={{color:"red"}}>-vin</span><span style={{color:"red"}}>do(a)</span> ao,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Casa dos Z Clip</h2>
                        </div>

            case 'Italy':
                return  <div className="welc it">
                            <h3><span style={{color:"darkRed"}}>Ben</span><span style={{color:"white"}}>ve</span><span style={{color:"green"}}>nuto/a</span> su,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Casa dei Z Clip</h2>
                        </div>

            case 'Netherlands':
                return  <div className="welc nt">
                            <h3><span style={{color:"red"}}>W</span><span style={{color:"white"}}>el</span><span style={{color:"Darkblue"}}>kom</span> bij,</h3>
                            <h1>Monarch Metal</h1>
                            <h2>Thuisbasis van de Z Clip</h2>
                        </div>

            default:
                return;
        }
    }
}