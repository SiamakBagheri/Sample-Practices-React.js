function Toggle(props) {
  return (
    <div className="toggle">
      <span>{props.boxTitle}</span>
      <label className="toggle-control">
        <input type="checkbox" checked={props.activeBoxes.includes(props.boxID)} />
        <span
          className="control"
          onClick={(e) => props.handelToggleBtn(props.boxID)}
        ></span>
      </label>
    </div>
  );
}

export default Toggle;
