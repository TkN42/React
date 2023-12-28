import { Task } from '../Task';
import styles from './tasks.module.css';
import { useState } from 'react';

export function Tasks({
  tasks,
  onDelete,
  onComplete,
  onEdit,
  editingTaskId,
  editTaskTitle,
  editTaskDescription,
  saveEditedTask,
  cancelEditing,
  setEditTaskTitle,
  setEditTaskDescription,
  setIsEditing
}) {
  const [titleFilter, setTitleFilter] = useState('');

  const filteredTasks = tasks.filter(task => task.title.includes(titleFilter));

  const tasksQuantity = filteredTasks.length;
  const completedTasks = filteredTasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <input
        className={styles.filterInput}
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      

      <div className={styles.filteredTasks}>
        {filteredTasks.map((task) => (
          <div key={task.id} className={styles.taskContainer}>
            <Task
              task={task}
              onDelete={() => onDelete(task.id)} 
              onComplete={() => onComplete(task.id)} 
              onEdit={() => onEdit(task.id)} 
              isEditing={task.id === editingTaskId}
              editTaskTitle={editTaskTitle}
              editTaskDescription={editTaskDescription}
              saveEditedTask={saveEditedTask}
              cancelEditing={cancelEditing}
              setEditTaskTitle={setEditTaskTitle}
              setEditTaskDescription={setEditTaskDescription}
              setIsEditing={setIsEditing}
            />
          </div>
        ))}
      </div>
    </section>
  );
}