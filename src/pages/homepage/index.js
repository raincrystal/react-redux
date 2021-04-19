import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TaskModel from '../../components/model';
import Table from '../../components/table';

import './styles.css';
import { deleteTask, getTask, updateTaskStatus } from '../../store/tasks/actions';

const HomePage = (props) => {
  const { onGetTask, taskList, onDeleteTask, onStatusUpdate } = props;

  const [taskRec, setTaskRec] = useState({});

  const [taskModal, setTaskModal] = useState(false);
  const taskToggle = (data) => {
    setTaskModal(!taskModal);
    setTaskRec(data);
  };

  const deleteTask = (id) => {
    onDeleteTask(id);
  };

  useEffect(() => {
    onGetTask();
  }, [onGetTask]);

  const handleUpdateStatus = (e, data) =>{
     onStatusUpdate({status: e.target.value , id: data})
  }

  return (
    <Fragment>
      <div className="main-div">
        <div className="table-div">
          <div className="button-div">
            <button className="button" onClick={() => taskToggle({ status: 'addTask' })}>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>+</span>Add Task
            </button>
          </div>
          <Table todoList={taskList} taskToggle={taskToggle} deleteTask={deleteTask} handleUpdateStatus={handleUpdateStatus} />
        </div>
      </div>
      <TaskModel taskToggle={taskToggle} taskModal={taskModal} taskRec={taskRec} />
    </Fragment>
  );
};

const mapStateToProps = ({ TasksState }) => ({
  taskList: TasksState.taskList,
});

const mapDispatchToProps = (dispatch) => ({
  onGetTask: () => dispatch(getTask({ limit: 20, page: 1 })),
  onStatusUpdate: (status) => dispatch(updateTaskStatus(status)),
  onDeleteTask: (id) => dispatch(deleteTask(id)),
});

HomePage.propTypes = {
  taskList: PropTypes.object,
  onGetTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onStatusUpdate: PropTypes.func,
};

HomePage.defaultProps = {
  taskList: {},
  onGetTask: () => {},
  onDeleteTask: () => {},
  onStatusUpdate: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
