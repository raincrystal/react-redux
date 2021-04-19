import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { connect } from 'react-redux';

import { addTask, getTask, updateTask } from '../../store/tasks/actions';

const TaskModal = (props) => {
  const initialValues = {
    task: '',
    taskExpDate: '',
  };

  const { taskModal, taskToggle, onUpdateTask, taskRec, onAddTask } = props;


  return (
    <Modal isOpen={taskModal} fade={false} toggle={taskToggle} centered={true} size="lg">
      <ModalHeader toggle={taskToggle}>
        <div className="font-weight-bold">Add Task</div>
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            if (taskRec.status === 'addTask') {
              onAddTask(values);
            } else {
              onUpdateTask({ ...values, id: taskRec._id });
            }
            taskToggle();
          }}
        >

          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="task" className="font-weight-bold">
                      Task
                    </Label>
                    <Input
                      id="task"
                      name="task"
                      type="text"
                      className="form-control"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      defaultValue={taskRec.task}
                    />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label htmlFor="date" className="font-weight-bold">
                      Exp. Date
                    </Label>
                    <Input
                      id="taskExpDate"
                      name="taskExpDate"
                      type="date"
                      className="form-control"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      defaultValue={taskRec.taskExpDate}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button
                type="submit"
                color="primary"
                className="mr-1 px-4 waves-effect waves-light"

              >

                Submit
              </Button>
              <Button color="secondary" onClick={() => taskToggle}>
                Cancel
              </Button>
            </Form>
          )}
        </Formik>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ TasksState }) => ({
  updateRes: TasksState.updateTask,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateTask: (data) => dispatch(updateTask(data)),
  onGetTask: () => dispatch(getTask({ limit: 20, page: 1 })),
  onAddTask: (data) => dispatch(addTask(data)),
});

TaskModal.propTypes = {
  taskModal: PropTypes.bool,
  taskRec: PropTypes.object,
  taskToggle: PropTypes.func,
  onUpdateTask: PropTypes.func,
  onAddTask: PropTypes.func,
};

TaskModal.defaultProps = {
  taskModal: false,
  taskRec: {},
  taskToggle: () => {},
  onUpdateTask: () => {},
  onAddTask: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
