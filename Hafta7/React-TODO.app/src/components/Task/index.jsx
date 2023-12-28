import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { TbEdit } from 'react-icons/tb';
import { GiCheckMark } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from 'react';
import editFormStyles from '../stil/editForm.module.css';

export function Task({
  task,
  onDelete,
  onComplete,
  onEdit,
  editTaskTitle,
  editTaskDescription,
  saveEditedTask,
  cancelEditing,
  setEditTaskTitle,
  setEditTaskDescription,
  setIsEditing
}) {
  const [isEditing, setIsEditingLocal] = useState(false);

  const handleEditClick = () => {
    onEdit(task.id);
    setIsEditingLocal(true);
    setIsEditing(true);  
    setEditTaskTitle(task.title);
    setEditTaskDescription(task.description);
  };

  const handleSaveClick = () => {
    saveEditedTask();
    setIsEditingLocal(false);
    setIsEditing(false);  
    setEditTaskTitle('');
    setEditTaskDescription('');
  };

  const handleCancelClick = () => {
    cancelEditing();
    setIsEditingLocal(false);
    setIsEditing(false);  
    setEditTaskTitle('');
    setEditTaskDescription('');
  };

  return (
    <div className={`${styles.task} ${isEditing ? styles.editing : ''}`} onClick={(e) => e.stopPropagation()}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      {isEditing ? (
        <>
        <input
          className={editFormStyles.editInput}
          type="text"
          value={editTaskTitle}
          onChange={(e) => setEditTaskTitle(e.target.value)}
        />
        <input
          className={editFormStyles.editInput} 
          value={editTaskDescription}
          onChange={(e) => setEditTaskDescription(e.target.value)}
          type="text"
        />
      </>
        
      ) : (
        <>

<div style={{ flex: 'auto' }}>
  <p style={{color:'green',fontWeight:'bold'}} className={task.isCompleted ? styles.textCompleted : ""}>
{task.title}
</p>
<p style={{ display: 'inline'}} className={task.isCompleted ? styles.textCompleted : ""}>
        {task.description}
      </p>
      </div>
        
        
      </>
      )}

      {isEditing ? (
        <>
          <button className={editFormStyles.saveButton} onClick={handleSaveClick}>
          <GiCheckMark size={20} />
          </button>
          <button className={editFormStyles.cancelButton} onClick={handleCancelClick}>
          <GiCancel size={20} />
          </button>
        </>
      ) : (
        <>
          <button className={styles.editButton} onClick={handleEditClick}>
            <TbEdit size={20} />
          </button>

          <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
            <TbTrash size={20} />
          </button>
        </>
      )}
    </div>
  );
}