import { Component} from 'react';
import flecheHautBas from '../assets/FlecheBas.svg';

// Passage d’un évenement "onClick" à un composant React (Documentation React)

class Collapse extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isCollapse: true,  // Valeur par défaut flèche en bas
            maxHeight: 1
        }
    }


    handleClick = (e) =>
    {
        let originNode = e.target
        while (originNode.className !== "fleche") originNode = originNode.parentNode
        const maxHeight = originNode.querySelector(".fleche_body_child").offsetHeight
        const cursorNode = originNode.querySelector(".fleche_cursor")
        const bodyNode = originNode.querySelector(".fleche_body")

        // Gestion rotation flèche et liste déroulante
        
        if (this.state.isCollapse)
        {
            bodyNode.style.maxHeight = maxHeight + "px"
            cursorNode.style.transform = "rotateX(0deg)"
            this.setState({ isCollapse: false })
        }
        else
        {
            bodyNode.style.maxHeight = "0px"
            cursorNode.style.transform = "rotateX(-180deg)"
            this.setState({ isCollapse: true })
        }
    }
    render()
    {
        return (
            <div className="fleche" >
                <div className="fleche_title" onClick={ this.handleClick }>
                    <h2>{this.props.titre}</h2>
                    <img className="fleche_cursor" src={flecheHautBas} alt="curseur" />
                </div>
                <div className="fleche_body" style={{maxHeight : 0}}>
                    <div className="fleche_body_child">
                        {this.props.children}
                    </div> 
                </div>
            </div>
        )
    }
}

export default Collapse;

