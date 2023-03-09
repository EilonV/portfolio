import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { reorganize, reorganize2 } from '../slices/dndSlice'
export const Home = () => {

    const dispatch = useDispatch()
    const { list, list2 } = useSelector((state) => state.dnd)

    const handleOnDragEnd = (result) => {
        let newList = list.slice()
        let newList2 = list2.slice()
        console.log('results', result)

        if (result.destination) {

            // i know eval is harmful, yet this is a personal static website
            let deleted = eval(result.source.droppableId).splice([result.source.index], 1)
            eval(result.destination.droppableId).splice(result.destination.index, 0, ...deleted)

            dispatch(reorganize(newList))
            dispatch(reorganize2(newList2))
        }

        // console.log(eval(result.source.droppableId))
        // if (result.destination) {

        //     // test(result.type, result.source.index, result.destination.index)
        // }
    }

    // const test = (list, index1, index2) => {
    //     switch (list) {
    //         case 'DROP':
    //             dispatch(reorganize2(swapElements(list2, index1, index2)))
    //             break
    //         case 'PERSON':
    //             dispatch(reorganize(swapElements(list, index1, index2)))
    //             break
    //         default:
    //             break
    //     }
    // }

    // const swapElements = (list, index1, index2) => {
    //     let newList = list.slice()
    //     let temp = newList[index1];
    //     newList[index1] = newList[index2];
    //     newList[index2] = temp;
    //     console.log(newList);
    //     return newList
    // };

    return <section className="home main-layout">
        <div className="main-container flex">

            <DragDropContext onDragEnd={handleOnDragEnd}>

                <Droppable droppableId="newList" type="PERSON" >

                    {(provided) => {
                        return (
                            <div className="drop-zone " ref={provided.innerRef} {...provided.droppableProps}>
                                {/* {provided.placeholder} */}
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

                        );

                    }}
                </Droppable>
                <Droppable droppableId="newList2" type="PERSON" >

                    {(provided, snapshot) => {
                        return (
                            <div className="dragging-zone" ref={provided.innerRef} {...provided.droppableProps} isDragging={snapshot.isDragging && !snapshot.isDropAnimating } >

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

                        );

                    }}
                </Droppable>


            </DragDropContext>

            {/* <button onClick={() => test(0, 2)}>TEST</button> */}
            {/* <DragDropContext onDragEnd={handleOnDragEnd}> */}

            {/* <Droppable droppableId="list">
                    {(provided) => (
                        <div className="flex">
                            <ul className="list flex justify-center space-between" {...provided.droppableProps} ref={provided.innerRef}  >
                                <div className="first flex w100">
                                    <Draggable draggableId={arr[0]} key={arr[0]} index={0}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{arr[0]}</li>
                                        )}
                                    </Draggable>

                                </div>
                                <div className="flex column w100">
                                    <Draggable draggableId={arr[1]} key={arr[1]} index={1}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{arr[1]}</li>
                                        )}
                                    </Draggable>
                                    <Draggable draggableId={arr[2]} key={arr[2]} index={2}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{arr[2]}</li>
                                        )}
                                    </Draggable>
                                    <Draggable draggableId={arr[3]} key={arr[3]} index={3}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{arr[3]}</li>
                                        )}
                                    </Draggable>
                                    <Draggable draggableId={arr[4]} key={arr[4]} index={4}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{arr[4]}</li>
                                        )}
                                    </Draggable>
                                    <Draggable draggableId={arr[5]} key={arr[5]} index={5}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{arr[5]}</li>
                                        )}
                                    </Draggable>

                                </div>

                                {/* {provided.placeholder} */}

            {/* {arrr.map((item, index) => (
                                    < Draggable draggableId={item} key={item} index={index} >
                                        {(provided) => (
                                            index === 0 ?
                                                <div className="drop flex">
                                                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{item}</li>
                                                </div>
                                                :
                                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{item}</li>
                                        )}
                                    </Draggable>
                                )
                                )}
                                {provided.placeholder} */}
            {/* </ul> */}

            {/* </div> */}
            {/* )} */}
            {/* </Droppable> */}
            {/* </DragDropContext> */}

        </div>

    </section >
}