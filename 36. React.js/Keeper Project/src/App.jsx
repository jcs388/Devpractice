import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "./notes"

function createNote(notes) {
  return (
    <Note 
      key={notes.key}
      title={notes.title}
      content={notes.content}
    />
  )
}

export default function App() {
  return (
    <div>
      <Header />
      {notes.map(notes => ( <Note 
      key={notes.key}
      title={notes.title}
      content={notes.content}
    /> ))}
      <Footer />
    </div>
  );
}
