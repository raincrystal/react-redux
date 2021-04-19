import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { changeBgColor } from '../../common';

import './styles.css';

const Table = (props) => {
  const { todoList, taskToggle, deleteTask, handleUpdateStatus } = props;
  let rec = todoList?.hasOwnProperty('docs') ? todoList.docs : [];

  return (
    <Fragment>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>TaskDate</th>
            <th>Expdate</th>
            <th>Status</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {rec.map((data, index) => {
            return (
              <tr key={index} style={changeBgColor(data.status)}>
                <td>{data.task}</td>
                <td>{new Date(data.createdAt).toLocaleDateString('en-ZA')}</td>
                <td>{new Date(data.taskExpDate).toLocaleDateString('en-ZA')}</td>
                <td>
                  <select className="select-dropdown" onChange={(e) => handleUpdateStatus(e, data._id)} defaultValue={data.status}>
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Complete</option>
                  </select>
                </td>
                <td>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Edit/Delete{' '}
                      <span
                        className="fas fa-chevron-down"
                        style={{ marginLeft: '10px', fontSize: '10px' }}
                      />
                    </button>
                    <div className="dropdown-content">
                      <a href="/#" onClick={() => taskToggle(data)}>
                        Edit
                      </a>
                      <a href="/#" onClick={() => deleteTask(data._id)}>
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};


Table.propTypes = {
  todoList: PropTypes.object,
  taskToggle: PropTypes.func,
  deleteTask: PropTypes.func,
  handleUpdateStatus: PropTypes.func
};

Table.defaultProps = {
  todoList: {},
  taskToggle: () => {},
  deleteTask: () => {},
  handleUpdateStatus: () => {}
};

export default Table;
