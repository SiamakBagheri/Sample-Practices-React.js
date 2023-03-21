function Boxes(props) {
  const boxes = props.boxes.map((box, index) => {
    if (props.activeBoxes.includes(box.id)) {
      return <div className="box">{box.title}</div>;
    }
  });
  return <div className="box-wrapper">{boxes}</div>;
}

export default Boxes;
