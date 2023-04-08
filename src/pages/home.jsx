import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { reorganize, reorganize2 } from '../slices/dndSlice'
import { useRef } from "react"
import hand from '../assets/pics/hand.png'
import me from '../assets/pics/me.JPG'
import link from '../assets/pics/icons/link.svg'

export const Home = () => {

    const dispatch = useDispatch()
    const { list, list2 } = useSelector((state) => state.dnd)
    const gestureRef = useRef(null);

    let newList = list.slice()
    let newList2 = list2.slice()

    setTimeout(() => {
        gestureRef.current.classList.add('active')
    }, 1000);

    setInterval(() => {
        gestureRef.current.classList.add('active')
    }, 25000);
    setInterval(() => {
        gestureRef.current.classList.remove('active')
    }, 40000);

    const handleOnDragEnd = (result) => {

        if (result.destination) {
            // check if there is a block already in the big list and switches between them
            if (newList.length > 0 && result.destination.droppableId === 'newList') {

                // console.log(result);
                // handleEval(result.source.droppableId)
                var placement = result.destination.index > 0 ? 0 : 1        //indicates the new index we need to splice
                var deleted = handleEval(result.source.droppableId).splice(result.source.index, 1)
                handleEval(result.destination.droppableId).splice(result.destination.index, 0, ...deleted)
                var deleted2 = handleEval(result.destination.droppableId).splice([placement], 1)
                handleEval(result.source.droppableId).splice(result.source.index, 0, ...deleted2)
            }
            //inserts dragged item to either list
            else {
                let deleted = handleEval(result.source.droppableId).splice(result.source.index, 1)
                handleEval(result.destination.droppableId).splice(result.destination.index, 0, ...deleted)
            }

            dispatch(reorganize(newList))
            dispatch(reorganize2(newList2))
        }
    }

    const handleEmail = (ev) => {
        ev.preventDefault()
        window.open('mailto:nttbms@gmail.com');
    }

    const handleEval = (str) => {
        switch (str) {
            case 'newList':
                return newList

            case 'newList2':
                return newList2

            default:
                break;
        }
    }

    return <section className="home main-layout">
        <div className="dnd-container flex">
            <div className="drag-gesture flex column" ref={gestureRef}>
                <img src={hand} alt="" />
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