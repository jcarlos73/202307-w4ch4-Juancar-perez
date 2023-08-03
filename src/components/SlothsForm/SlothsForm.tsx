import "./SlothsForm.css";
const SlothsForm = (): React.ReactElement => {
  return (
    <form className="form">
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" className="form" />
      </div>
      <div>
        <label htmlFor="picture">Picture URL: </label>
        <input type="url" id="url" className="form" />
      </div>
      <div>
        <label htmlFor="fingers">Fingers: </label>
        <input type="number" id="fingers" className="form" />
      </div>
      <button type="submit" className="button">
        Create sloth
      </button>
    </form>
  );
};
export default SlothsForm;
