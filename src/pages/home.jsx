import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { reorganize, reorganize2 } from '../slices/dndSlice'
import facebook from '../assets/pics/icons/facebook.svg'
import linkedin from '../assets/pics/icons/linkedin.svg'
import github from '../assets/pics/icons/github.svg'
import instagram from '../assets/pics/icons/instagram.svg'
import email from '../assets/pics/icons/email.svg'
import hand from '../assets/pics/hand.png'
import me from '../assets/pics/me.JPG'
import link from '../assets/pics/icons/link.svg'

export const Home = () => {

    const dispatch = useDispatch()
    const { list, list2 } = useSelector((state) => state.dnd)
    const arr = [facebook, linkedin, github, instagram, email]
    console.log(arr);

    const handleOnDragEnd = (result) => {
        let newList = list.slice()
        let newList2 = list2.slice()

        if (result.destination) {
            // check if there is a block already in the big list and switches between them
            if (newList.length > 0 && result.destination.droppableId === 'newList') {

                var placement = result.destination.index > 0 ? 0 : 1        //indicates the new index we need to splice
                var deleted = eval(result.source.droppableId).splice(result.source.index, 1)
                eval(result.destination.droppableId).splice(result.destination.index, 0, ...deleted)
                var deleted2 = eval(result.destination.droppableId).splice([placement], 1)
                eval(result.source.droppableId).splice(result.source.index, 0, ...deleted2)
            }
            //inserts dragged item to either list
            else {
                let deleted = eval(result.source.droppableId).splice(result.source.index, 1)
                eval(result.destination.droppableId).splice(result.destination.index, 0, ...deleted)
            }

            dispatch(reorganize(newList))
            dispatch(reorganize2(newList2))
        }
    }

    const handleEmail = (ev) => {
        ev.preventDefault()
        window.open('mailto:nttbms@gmail.com?subject=this-is-an-email&body=hello i am under the water');
    }

    return <section className="home main-layout">
        <div className="dnd-container flex">
            <div className="drag-gesture flex column">
                {/* <img src={hand} alt="" /> */}
                {/* <img className="arrow" src={arrow} alt="" />
                <div>
                    <img className="drop" src={drop} alt="" />
                    <img className="drag" src={drag} alt="" />
                </div> */}
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>

                <Droppable droppableId="newList" type="ATTRIBUTE" >

                    {(provided) => {
                        return (
                            <div className="drop-zone" ref={provided.innerRef} {...provided.droppableProps}>

                                {list.map((item, index) => {
                                    return (
                                        <Draggable key={item.id} draggableId={item.id} index={index} >
                                            {(provided) => {
                                                return (
                                                    <div className={'item'.concat(' ', item.att)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <div className="data">
                                                            <h1>{item.att.charAt(0).toUpperCase() + item.att.slice(1)}</h1>
                                                            {item.att === 'skills' && (

                                                                <div className="data-list">
                                                                    <ul>{item.data.map((skill) =>
                                                                        <li>{skill}</li>
                                                                    )}</ul>
                                                                    <ul>{item.personal.map((skill) =>
                                                                        <li>{skill}</li>
                                                                    )}</ul>
                                                                </div>

                                                            )}
                                                            {item.att === 'about' && (
                                                                <div className="data-about">
                                                                    {item.data.map((info) => {
                                                                        return <p>{info}</p>
                                                                    })}
                                                                    <img src={me} alt="pic of me" />
                                                                </div>
                                                            )}
                                                            {item.att === 'contact' && (
                                                                <div className="data-contact flex">
                                                                    {item.data.map((link) => {
                                                                        return (link[0] === 'email' ? <a href="/#" title={link[0]} onClick={handleEmail}> </a> :
                                                                            <a href={link[1]} title={link[0]} target='noopener'> </a>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )}
                                                            {item.att === 'projects' && (
                                                                <div className="data-projects">
                                                                    {item.data.map((project) => {
                                                                        return (
                                                                            <div className={'project'.concat(' ' + project.name)}>
                                                                                <h2>{project.name} </h2>
                                                                                <p>{project.description}</p>
                                                                                <a href={project.link} title={project.name} target='noopener'>
                                                                                    visit&nbsp;
                                                                                    <img src={link} alt="" />
                                                                                    </a>
                                                                                {project.img && <img src={project.img} alt="" />}

                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )}
                                                        </div>
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    )

                                })}
                                {provided.placeholder}

                            </div>

                        )

                    }}
                </Droppable>
                <Droppable droppableId="newList2" type="ATTRIBUTE" >

                    {(provided, snapshot) => {
                        return (
                            <div className="dragging-zone" ref={provided.innerRef} {...provided.droppableProps} isdragging={snapshot.isdragging && !snapshot.isDropAnimating} >
                                {list2.map((item, index) => {
                                    return (
                                        <Draggable key={item.id} draggableId={item.id} index={index} >
                                            {(provided) => {
                                                return (
                                                    <div className={'item'.concat(' ', item.att)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <h1>{item.att.charAt(0).toUpperCase() + item.att.slice(1)}</h1>
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }}
                                        </Draggable>
                                    )

                                })}
                                {provided.placeholder}

                            </div>

                        )

                    }}
                </Droppable>


            </DragDropContext>
        </div>
    </section >
}