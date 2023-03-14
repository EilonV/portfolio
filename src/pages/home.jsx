import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { reorganize, reorganize2 } from '../slices/dndSlice'
import { Test } from "../components/test"
import { Test2 } from "../components/test2"
import { Test3 } from "../components/test3"
export const Home = () => {

    const dispatch = useDispatch()
    const { list, list2, list3 } = useSelector((state) => state.dnd)

    const handleOnDragEnd = (result) => {
        let newList = list.slice()
        let newList2 = list2.slice()
        console.log(newList.length)

        if (result.destination) {
            console.log(result)
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
                console.log('TERMS NOTTTTTTTTTTT ACCEPTED')
                let deleted = eval(result.source.droppableId).splice(result.source.index, 1)
                eval(result.destination.droppableId).splice(result.destination.index, 0, ...deleted)
            }

            dispatch(reorganize(newList))
            dispatch(reorganize2(newList2))
        }
    }

    return <section className="home main-layout">
        <div className="main-container flex">

            <DragDropContext onDragEnd={handleOnDragEnd}>

                <Droppable droppableId="newList" type="PERSON" >

                    {(provided) => {
                        return (
                            <div className="drop-zone " ref={provided.innerRef} {...provided.droppableProps}>

                                {list.map((person, index) => {
                                    return (
                                        <Draggable key={person.id} draggableId={person.id} index={index} >
                                            {(provided) => {
                                                return (
                                                    <div className="person" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <p>{person.name}</p>
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
                <Droppable droppableId="newList2" type="PERSON" >

                    {(provided, snapshot) => {
                        return (
                            <div className="dragging-zone" ref={provided.innerRef} {...provided.droppableProps} isdragging={snapshot.isdragging && !snapshot.isDropAnimating} >

                                {/* <Draggable key={list2[0].id} draggableId={list2[0].id} index={0}>
                                    {(provided) => {
                                        return (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <Test></Test>
                                            </div>
                                        )
                                    }}

                                </Draggable>

                                <Draggable key={list2[1].id} draggableId={list2[1].id} index={1}>
                                    {(provided) => {
                                        return (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <Test2></Test2>
                                            </div>
                                        )
                                    }}

                                </Draggable>
                                <Draggable key={list2[2].id} draggableId={list2[2].id} index={2}>
                                    {(provided) => {
                                        return (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <Test3></Test3>
                                            </div>
                                        )
                                    }}

                                </Draggable> */}
                                {list2.map((person, index) => {
                                    return (
                                        <Draggable key={person.id} draggableId={person.id} index={index} >
                                            {(provided) => {
                                                return (
                                                    <div className="person" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <p>{person.name}</p>
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