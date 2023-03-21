import Note from "./Note";
import './style.css'

function StickyNote() {
  const notesData = [
    { title: "Title #1", content: "Text Content #1" },
    { title: "Title #2", content: "Text Content #2" },
    { title: "Title #3", content: "Text Content #3" },
  ];

  const notes = notesData.map((note, index) => (
    <Note key={index} title={note.title} content={note.content} />
  ));

  return (
    <>
      <ul>{notes}</ul>
    </>
  );
}

export default StickyNote;
