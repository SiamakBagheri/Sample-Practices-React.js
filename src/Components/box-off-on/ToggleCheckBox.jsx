import Toggle from "./Toggle";

function ToggleCheckBox(props) {
  const toggleCheckBox = props.boxes.map((box, index) => {
    return (
      <Toggle
        boxID={box.id}
        boxTitle={box.title}
        activeBoxes={props.activeBoxes}
        handelToggleBtn={props.handelToggleBtn}
      />
    );
  });
  return <aside>{toggleCheckBox}</aside>;
}

export default ToggleCheckBox;
