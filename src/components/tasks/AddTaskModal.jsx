import DialogModal from "./DialogModal";
import TaskForm from "./TaskForm";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <DialogModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <TaskForm setIsOpen={setIsOpen} />
    </DialogModal>
  );
};

export default AddTaskModal;
