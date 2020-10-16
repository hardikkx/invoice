import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`

.task{
    display: flex;
    margin-top: 2%;
    justify-content: space-between;
}
`;

const Landing = () => {
  return (

    <>
      <Ul>
        <div class="container-fluid">
            <div className="task">
             <div className="task_left">
              <h2><i className="fa fa-tasks" aria-hidden="true" /> Task</h2>
             </div>
             <div className="task_right">
             <button type="button" class="btn btn-info">Info</button>
             </div>
             <div className="task_right1">
                 
             </div>
            </div>
          </div>

      </Ul>
    </>
  )
}

export default Landing