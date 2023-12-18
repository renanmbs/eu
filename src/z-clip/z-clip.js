import React from "react";
import "./z-clip.css";

export class Zinfo extends React.Component{
    render(){

        switch(this.props.country){
            case 'US':
                return (
                    <div className="zback">
                        <h2>Z clip Hanging System</h2>
                        <h4>Now manufactured in europe</h4>
                        <hr/>
                        <p>Monarch Metal Inc. is a leading international manufacturer and supplier of Z Clips and fine custom architectural metal products.</p>
                        <hr/>
                        <h3>What is a Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )

            case 'England':
                return (
                    <div className="zback">
                        <h2>Z clip Hanging System</h2>
                        <h4>Now manufactured in europe</h4>
                        <hr/>
                        <p>Monarch Metal Inc. is a leading international manufacturer and supplier of Z Clips and fine custom architectural metal products.</p>
                        <hr/>
                        <h3>What is a Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )
            case 'Germany':
                return (
                    <div className="zback">
                        <h2>Z Clip Hängesystem</h2>
                        <h4>Jetzt in Europa hergestellt</h4>
                        <hr/>
                        <p>Monarch Metal Inc. ist ein führender internationaler Hersteller und Lieferant von Z-Clips und feinen individuellen architektonischen Metallprodukten.</p>
                        <hr />
                        <h3>Was ist ein Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )


            case 'France':
                return (
                    <div className="zback">
                        <h2>Système de suspension Z-Clip</h2>
                        <h4>Maintenant fabriqué en Europe</h4>
                        <hr/>
                        <p>Monarch Metal Inc. est un fabricant et fournisseur international de premier plan de Z Clips et de produits métalliques architecturaux personnalisés de qualité.</p>
                        <hr />
                        <h3>Qu'est-ce qu'un Z Clip ?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )

            case 'Spain':
                return (
                    <div className="zback">
                        <h2>Sistema de Suspensión Z Clip</h2>
                        <h4>Ahora fabricado en Europa</h4>
                        <hr/>
                        <p>Monarch Metal Inc. es un destacado fabricante internacional y proveedor de Clips Z y productos metálicos arquitectónicos personalizados de alta calidad.</p>
                        <hr />
                        <h3>¿Qué es un Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )

            case 'Portugal':
                return (
                    <div className="zback">
                    <h2>Sistema de Suspensão Z Clip</h2>
                    <h4>Agora fabricado na Europa</h4>
                    <hr/>
                    <p>Monarch Metal Inc. é um importante fabricante e fornecedor internacional de Clips Z e produtos metálicos arquitetônicos personalizados de alta qualidade.</p>
                    <hr />
                    <h3>O que é um Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )

            case 'Italy':
                return (
                    <div className="zback">
                        <h2>Sistema di Sospensione Z Clip</h2>
                        <h4>Ora prodotto in Europa</h4>
                        <hr/>
                        <p>Monarch Metal Inc. è un rinomato produttore internazionale e fornitore di fermagli a Z e raffinati prodotti metallici architettonici personalizzati.</p>
                        <hr />
                        <h3>Cos'è una Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )

                case 'Netherlands':
                return (
                    <div className="zback">
                        <h2>Ophangsysteem Z Clip</h2>
                        <h4>Nu geproduceerd in Europa</h4>
                        <hr/>
                        <p>Monarch Metal Inc. is een toonaangevende internationale fabrikant en leverancier van Z-clips en hoogwaardige op maat gemaakte architectonische metalen producten.</p>
                        <h3>Wat is een Z Clip?</h3>
                        <iframe
                            src="https://www.youtube.com/embed/AzneJdEUyFM?si=IKzNUnICWgqHIfsi"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        ></iframe>
                        <More country={this.props.country}/>
                    </div>
                )

            default:
                return;
        }
    }
}


class More extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {mor:1};
    }

    handleClick = () =>{
        if(this.state.mor === 1){
            this.setState({mor:2});
        }
        if(this.state.mor === 2){
            this.setState({mor:1});
        }
    }

    render(){

        switch(this.props.country){
            case 'US':
                return (
                    <div className="mor">

                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                             ></iframe>
                            :null
                        }

                        { 
                            this.state.mor === 1 
                            ? <button onClick={this.handleClick}>More Info</button> 
                            : <button onClick={this.handleClick}>Less Info</button>
                        }
                        
                    </div>
                )

            case 'England':
                return (
                    <div className="mor">

                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { this.state.mor === 1 
                            ? <button onClick={this.handleClick}>More Info</button> 
                            : <button onClick={this.handleClick}>Less Info</button>
                        }
                        
                    </div>
                )
            case 'Germany':
                return (
                    <div className="mor">

                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { this.state.mor === 1 
                            ? <button onClick={this.handleClick}>Mehr Infos</button>
                            : <button onClick={this.handleClick}>Weniger Infos</button>
                        }
                        
                    </div>
                )


            case 'France':
                return (
                    <div className="mor">

                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { 
                            this.state.mor === 1 
                            ? <button onClick={this.handleClick}>Plus d'infos</button>
                            : <button onClick={this.handleClick}>Moins d'infos</button>
                        }
                        
                    </div>
                )

            case 'Spain':
                return (
                    <div className="mor">

                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { this.state.mor === 1 
                            ? <button onClick={this.handleClick}>Más información</button>
                            : <button onClick={this.handleClick}>Menos información</button>
                        }
                        
                    </div>
                )

            case 'Portugal':
                return (
                    <div className="mor">

                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { this.state.mor === 1 
                            ? <button onClick={this.handleClick}>Mais informações</button>
                            : <button onClick={this.handleClick}>Menos informações</button>
                        }
                        
                    </div>
                )

            case 'Italy':
                return (
                    <div className="mor">
                    
                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { this.state.mor === 1 
                            ? <button onClick={this.handleClick}>Maggiori informazioni</button>
                            : <button onClick={this.handleClick}>Meno informazioni</button>
                        }
                        
                    </div>
                )

                case 'Netherlands':
                return (
                    <div className="mor">
                    
                        {
                            this.state.mor === 2
                            ?<iframe
                                src="https://www.youtube.com/embed/76u5OAiuhNA?si=GofmR_IydkkQZAcZ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen="true"
                                className="more"
                             ></iframe>
                            :null
                        }

                        { this.state.mor === 1 
                            ? <button onClick={this.handleClick}>Meer informatie</button>
                            : <button onClick={this.handleClick}>Minder informatie</button>
                        }
                        
                    </div>
                )

            default:
                return;
        }
    }
}