import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="l"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title id="contained-modal-title-vcenter">
        <h5 className="ms-4 mt-4">Successfully submitted!!!</h5>
      </Modal.Title>
      <Modal.Body>
        <p className="ps-2">You can check result in leaderboard</p>
      </Modal.Body>
      <Modal.Footer>
        <NavLink to="/">
          <Button className="btn btn-secondary">Home</Button>
        </NavLink>
        <NavLink to="/leaderboard">
          <Button className="btn btn-primary">Leaderboard</Button>
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
}
