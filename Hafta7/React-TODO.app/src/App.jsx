import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tasks } from "./components/Tasks";
import { MdLightMode } from "react-icons/md";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');
  const [editTaskDescription, setEditTaskDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle, taskDescription) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        description: taskDescription, 
        isCompleted: false
      }
    ]);
  }


  function startEditingTask(taskId) {
    const selectedTask = tasks.find(task => task.id === taskId);

    if (selectedTask) {
      setEditingTaskId(taskId);
      setEditTaskTitle(selectedTask.title);
      setEditTaskDescription(selectedTask.description); 
      setIsEditing(true);
    }
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function cancelEditing() {
    setEditingTaskId(null);
    setEditTaskTitle('');
    setEditTaskDescription('');
    setIsEditing(false);
  }

  function editTaskById(taskId) {
    startEditingTask(taskId);
  }

  function saveEditedTask() {
    if (editingTaskId !== null) {
      updateTask(editingTaskId, editTaskTitle,editTaskDescription);
      cancelEditing();
    }
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function updateTask(taskId, newTitle ,newDescription) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
          description: newDescription
        };
      }
      return task;
    });

    setTasksAndSave(updatedTasks);
  }

  return (
    <>
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <div className="darkDiv">
      <button className="darkButton" onClick={() => setDarkMode(!darkMode)}>
        <MdLightMode size={20} />
      </button>
      </div>

      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onEdit={editTaskById}
        onComplete={toggleTaskCompletedById}
        editingTaskId={editingTaskId}
        editTaskTitle={editTaskTitle}
        editTaskDescription={editTaskDescription}
        saveEditedTask={saveEditedTask}
        cancelEditing={cancelEditing}
        setEditTaskTitle={setEditTaskTitle}
        setEditTaskDescription={setEditTaskDescription}
        setIsEditing={setIsEditing}
      />
      <Footer />
      
    </div>
      
    </>
  );
}

export default App;