import React from "react";
import {FaCaretDown} from "react-icons/fa";
import "./header.css";
import { Banner } from "../banner/banner";

export class Nav extends React.Component{


    constructor(props){
        super(props);
        this.state = {country:"US"};
    }

    render(){
        return(
            <>
                <div id="area">

                    <div id="logo">
                        <button onClick={() => {
                                this.setState({country:"US"})
                            }}><img src="/img/logo.gif" alt="Logo" /></button>
                    </div>

                    <div id="NavBar">
                        <ul>
                            <li>Products <FaCaretDown/></li>
                            <li>Catalog</li>
                            <li>Resources <FaCaretDown/></li>
                            <li>How to Order <FaCaretDown/></li>
                        </ul>
                    </div>

                    <div id="press">
                        <div id="lang">
                            <button onClick={() => {
                                this.setState({country:"England"})
                            }}>🇬🇧</button>

                            <button onClick={() => {
                                this.setState({country:"Netherlands"})
                            }}>🇳🇱</button>

                            <button onClick={() => {
                                this.setState({country:"Germany"})
                            }}>🇩🇪</button>

                            <button onClick={() => {
                                this.setState({country:"France"})
                            }}>🇫🇷</button>

                            <button onClick={() => {
                                this.setState({country:"Italy"})
                            }}>🇮🇹</button>

                            <button onClick={() => {
                                this.setState({country:"Spain"})
                            }}>🇪🇸</button>

                            <button onClick={() => {
                                this.setState({country:"Portugal"})
                            }}>🇵🇹</button>

                        </div>

                        <div id="cont">
                            <a href="mailto:zclip@monarchmetal.com"><button>Contact Us</button></a>
                        </div>
                    </div>

                </div>

                <Banner country={this.state.country}/>
            </>
        )
    }
}