import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { reorganize, reorganize2 } from '../slices/dndSlice'
import { Header } from '../components/header'

export const Home = () => {

    const dispatch = useDispatch()
    const { list, list2, list3 } = useSelector((state) => state.dnd)

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

    return <section className="home main-layout">
        <div className="dnd-container flex">
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