import {
  Box,
  Button,
  Heading,
  Stack,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import useTasks from "../hooks/useTasks";
import ModalCreateTask from "./ModalCreateTask";
import TaskElement from "./TaskElement";
import IconRestart from "./IconRestart";

function Tasks() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tasks, toggleCompleted, deleteTask, tasksCompleted, restartTasks } =
    useTasks();

  const handleCompleted = (id) => {
    toggleCompleted(id);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleRestartTasks = () => {
    restartTasks();
  };

  return (
    <Box>
      <Box bg="yellow" p={2}>
        <Heading color="brand.base" textAlign="center" size="lg">
          Tasks
        </Heading>
      </Box>

      <Flex justifyContent="center" alignItems="center" gap={2} mt={4}>
        <Text color="gray" fontSize="sm" textAlign="center">
          Tasks completed today: {tasksCompleted || 0}
        </Text>
        <IconRestart handleClick={handleRestartTasks} />
      </Flex>

      <ModalCreateTask isOpen={isOpen} onClose={onClose} />

      <Stack mt={4}>
        {tasks &&
          tasks.map((task) => (
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
      </Stack>
    </Box>
  );
}

export default Tasks;