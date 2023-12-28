import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title, description);
    
    setTitle('');
    setDescription('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        
        <input placeholder="title" type="text" onChange={onChangeTitle} value={title} />

        <input placeholder="description" type="text" onChange={onChangeDescription} value={description} />

        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}