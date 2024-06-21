import { Modal } from 'react-bootstrap';
import { ToDo } from '../day-4/TodoList';

interface TodoModalProps {
    todo : ToDo | null;
    show : boolean;
    handleClose : ()=>void;
}

const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
    const todoInfo = () => {
        return (
            <div>
                <div>{todo?.id}</div>
                <div>{todo?.isChecked}</div>
                <div>{todo?.text}</div>
            </div>
        );
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ToDo 상세 정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todoInfo()}</Modal.Body>
            </Modal>
        </div>
    );
}

export default TodoModal;