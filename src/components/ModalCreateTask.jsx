import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import useTasks from "../hooks/useTasks";

function ModalCreateTask({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const { addTask } = useTasks();

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const nameFormatted = name.replaceAll(" ", "");
    if (nameFormatted.length <= 0) {
      return;
    }

    const currentDate = Date.now();
    addTask({
      text: name,
      isCompleted: false,
      createdAt: currentDate,
      id: currentDate,
    });
    setName("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Task name</FormLabel>
              <Input value={name} onChange={handleChangeName} isRequired />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalCreateTask;