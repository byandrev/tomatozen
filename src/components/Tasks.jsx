import {
  Box,
  Button,
  Heading,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import useTasks from "../hooks/useTasks";
import ModalCreateTask from "./ModalCreateTask";
import TaskElement from "./TaskElement";

function Tasks() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tasks, toggleCompleted, deleteTask, tasksCompleted } = useTasks();

  const handleCompleted = (id) => {
    toggleCompleted(id);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  return (
    <Box>
      <Box bg="yellow" p={2}>
        <Heading color="brand.base" textAlign="center" size="lg">
          Tasks
        </Heading>
      </Box>
      <Text color="gray" fontSize="sm" textAlign="center" mt={4}>
        Tasks completed today: {tasksCompleted}
      </Text>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Stack mt={4}>
        {tasks && (
          <>
            {tasks.map((task) => (
              <TaskElement
                key={task.id}
                text={task.text}
                isCompleted={task.isCompleted}
                id={task.id}
                createdAt={task.createdAt}
                handleCompleted={handleCompleted}
                handleDelete={handleDeleteTask}
              />
            ))}
            <Button
              variant="outline"
              color="gray"
              borderStyle="dashed"
              onClick={onOpen}
            >
              Add
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
}

export default Tasks;