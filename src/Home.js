import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Home.css';

const Home = () => {

  // eslint-disable-next-line
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "title 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "title 3",
      content: "content 3",
    },
    {
      id: 4,
      title: "title 4",
      content: "content 4",
    }
  ])

  const [title, setTitle] = useState('')

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const [content, setContent] = useState('')

  const onChangeContent = (event) => {
    setContent(event.target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log("Title")
    console.log("Content")

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes(prevNotes => ([newNote, ...prevNotes]));
    setTitle('');
    setContent('');
  }

  const onDeleteNote = (id) => {
    const updatedList = notes.filter((note) => {
      return note.id !== id
    })

    setNotes(updatedList)
  }

  return (
    <>
      <div className='app-container'>
        <form className='form-container' onSubmit={onSubmitForm}>
          <div className="inputs">
            <label>Title</label>
            <input type="text" placeholder="Title" value={title} onChange={onChangeTitle}/>
          </div>
          <div className="inputs">
            <label>Content</label>
            <textarea type="text" rows="4" cols="40" placeholder="Content" value={content} onChange={onChangeContent}/>
          </div>
          <button type="submit" className='add-button'>Add Notes</button>
        </form>

        <div className='notes-container'>
            {notes.map((note) => (
              <div className='notes-item' key={note.id}>
                <div>
                  <h1 className='note-text'>{note.title}</h1>
                  <p className='note-text'>{note.content}</p>
                </div>
                <div className='notes-header'>
                  <button className='cross-button' onClick={() => onDeleteNote(note.id)}><DeleteIcon/></button>
                </div>
              </div>
            ))}
        </div>
      </div>
  </>
  )
  
}

export default Home