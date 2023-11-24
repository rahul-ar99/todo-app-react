import React,{useState, useEffect} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle,updateTask,taskObj}) => {
    const [taskName, setTaskName] = useState('')
    const [description, setdescription] = useState('')

    const handleChange = (e) =>{
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setdescription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setdescription(taskObj.Description)
    },[])

    const handleUpdate = (e) =>{
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name </label>
                        <input type="text" className="form-control" onChange={handleChange} name="taskName" value={taskName}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea type="text" rows={5} className="form-control" onChange={handleChange} name="description" value={description}/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditTaskPopup