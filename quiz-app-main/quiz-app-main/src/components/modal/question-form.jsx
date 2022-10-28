import Modal from "react-bootstrap/Modal";
import QuestionForm from "../question-form/question-form";

export default function QuestionFormModal(props) {
  return (
    <Modal
      show={props.show}
      size="l"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title id="contained-modal-title-vcenter">
        <h3 className="text-center mt-2">Add Question</h3>
      </Modal.Title>
      <Modal.Body>
        <QuestionForm
          onClose={props.onClose}
          onQuestionAdd={props.onQuestionAdd}
          question={props.question}
        />
      </Modal.Body>
    </Modal>
  );
}
