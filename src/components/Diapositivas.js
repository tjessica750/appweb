import React from 'react';
import './Diapositivas.css';
import logo from'../asset/logo.png';


function Diapositivas({vector}) {  
    // Jessica Torres 
    const [current, accion] = React.useState(0);
    return (
        <div className="Diapositivas">
            <nav className="navbar navbar-default">
                <img className="logo" src={logo}/> 
                <a href="#">Diapositiva App</a>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="btn-group">
                            <button onClick={() =>accion(0)} disabled={current==0} type="button" className="btn btn-success btn-default">Reiniciar</button>
                            <button onClick={() =>accion((current>=0)?current-1:current)} disabled={current==0} type="button" className="btn btn-success btn-default">Anterior</button>
                            <button onClick={() =>accion((current<=vector.length-1)?current+1:current)} disabled={current==vector.length-1} type="button" className="btn btn-success btn-default">Siguiente</button>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="jumbotron">
                            <h1 id="title" >{vector[current].title}</h1>
                            <p id="text">{vector[current].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Diapositivas;