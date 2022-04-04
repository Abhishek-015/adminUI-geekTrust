import React from "react";
import { Tooltip } from "antd";

const ReadOnly = ({ el, handleCheckChange, handleDelete, handleEdit }) => (
  <tr key={el.id} className={el.status ? "table-secondary" : ""}>
    <td>
      <input
      className="pointer"
        type="checkbox"
        name="status"
        checked={el.status}
        onChange={(e) => handleCheckChange(e, el.id)}
      />
    </td>
    <td>{el.name}</td>
    <td>{el.email}</td>
    <td>{el.role}</td>
    <td>
      <button
        className="btn btn-outline-none btn-sm m-1 px-3"
        onClick={(e) => handleEdit(e, el)}
      >
        <Tooltip title="edit" color={"blue"} placement="left">
          <img
            style={{ height: "17px", width: "17px" }}
            src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png"
            alt=""
          />
        </Tooltip>
      </button>
      <button
        className="btn btn-outline-none btn-sm m-1"
        onClick={() => handleDelete(el.id)}
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

export default ReadOnly;
