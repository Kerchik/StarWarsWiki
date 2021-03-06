import React,{useState} from "react"
import '../App.css';
import {NavLink} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const Content = ({changeId, id, changePhoto, photo, type, name, folder}) => {
    const images = require.context('../img', true);
    let img = images(`./${folder}/` + photo);
    const [isHidden, setIsHidden] = useState(true)
    const click = () => {
        changeId(id);
        changePhoto(photo);
    }
    const textAppear = () => {
        setIsHidden(false)
    }
    const textDissapear = () => {
        setIsHidden(true)
    }
    const link = `${type}/info/${id}`
        return (
        <div className="card" onClick={click} onMouseOver={textAppear} onMouseOut={textDissapear}>
            <NavLink to={link}>
                <img className="transform" alt={name} src={img} id={id}/>
                <TransitionGroup timeout={0}>
                    {!isHidden && <CSSTransition timeout={0} classNames="option"><div className="onHoverText">{name}</div></CSSTransition>}
                </TransitionGroup>
            </NavLink>
        </div>
    )
}

export default Content