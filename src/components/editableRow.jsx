import React from "react";
import { Tooltip } from "antd";

const EditableRow = ({
  el,
  handleDelete,
  handleEditChange,
  handleEditSubmit,
}) => (
  <tr key={el.id} className={el.status?"table-secondary":""}>
    <td>
      <input className="pointer" type="checkbox" checked={el.status} />
    </td>
    <td>
      <input
        type="text"
        name="name"
        value={el.name}
        onChange={handleEditChange}
        className="form-control "
      />
    </td>
    <td>
      <input
        type="email"
        name="email"
        value={el.email}
        onChange={handleEditChange}
        className="form-control "
      />
    </td>
    <td>
      <input
        type="text"
        name="role"
        value={el.role}
        onChange={handleEditChange}
        className="form-control "
      />
    </td>
    <td>
      <button
        className="btn btn-outline-none bold m-1"
        type="submit"
        onClick={handleEditSubmit}
      >
         <Tooltip title="update" color={"green"} placement="left">
          <img
            style={{ height: "20px", width: "20px" }}
            src="https://cdn-icons-png.flaticon.com/512/1688/1688988.png"
            alt=""
          />
        </Tooltip>
      </button>
      <button
        className="btn btn-outline-none m-1"
        onClick={() => {
          handleDelete(el.id);
        }}
      >
       <Tooltip title="delete" color={"red"} placement="right">
          <img
            style={{ height: "17px", width: "17px" }}
            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            alt=""
          />
        </Tooltip>
      </button>
      
    </td>
  </tr>
);

export default EditableRow;
