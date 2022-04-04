import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import {
  allChecked,
  deleteUser,
  editUser,
  toggleStatus,
} from "../redux/action";

import ReadOnly from "./ReadOnly";
import EditableRow from "./editableRow";
import PaginationData from "./pagination";
import Search from "./search";

var inititalData = {
  name: "",
  email: "",
  role: "",
};

const AdminPanel = () => {
  //redux
  const allUserData = useSelector((state) => state.allUserData);
  const dispatch = useDispatch();

  //edit user credentials
  const [userData, setUserData] = useState(inititalData);
  const [editId, setEditId] = useState(null);

  //pagination
  const [page, setPage] = useState(1);

  // serch and filter
  const [searchKey, setSearchKey] = useState("");

  //toggle status
  const handleCheckChange = (e, id) => {
    const value = e.target.checked;
    const filterTodoIndex = allUserData.findIndex((el) => el.id === id);
    const allUsers = [...allUserData];
    allUsers[filterTodoIndex].status = value;
    dispatch(toggleStatus(allUsers));
  };

  // delete userDetail
  const handleDelete = (id) => {
    const data = [...allUserData];
    const deletedTask = data.filter((el) => el.id === id);
    const dataAfterDelete = allUserData.filter((el) => el.id !== id);
    dispatch(deleteUser(dataAfterDelete));
    toast.success(`"${deletedTask[0].name}" is deleted`);
  };

  //edit userDetail
  const handleEdit = (e, el) => {
    e.preventDefault();
    setEditId(el.id);
    const newEditData = { ...userData, ...el };
    setUserData(newEditData);
  };

  const handleEditChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newEditFormData = { ...userData };
    newEditFormData[name] = value;
    setUserData(newEditFormData);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const newEditData = {
      ...userData,
      id: editId,
    };
    const newData = [...allUserData];

    const newEditDataIndex = newData.findIndex((el) => el.id === editId);
    newData[newEditDataIndex] = newEditData;
    dispatch(editUser(newData));
    toast.success(`${newEditData.name} is successfully updated`);
    setEditId(null);
  };

  const handleClearCompleted = () => {
    const data = [...allUserData];
    const filterData = data.filter((el) => el.status === false);

    if (data.length - filterData.length === 0) {
      toast.error("None of the row is checked");
    } else {
      toast.success(`Deleted checked row `);
    }
    dispatch(deleteUser(filterData));
  };

  //handle all checked
  const handleSelectAll = (e) => {
    const value = e.target.checked;
    const allUsers = [...allUserData];

    for (let i = 0; i < allUsers.length; i++) {
      if (i >= page * 10 - 10 && i < page * 10) {
        allUsers[i].status = false;
        allUsers[i].status = value;
      }
    }
    dispatch(allChecked(allUsers));
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <h4>Admin Panel</h4>
        <Search searchKey={searchKey} setSearchKey={setSearchKey} />
        <div className="container">
          <form>
            <table className="table table-hover ">
              <thead className="bg-dark text-white">
                <tr>
                  <td>
                    <input
                      className="pointer"
                      type="checkbox"
                      onChange={handleSelectAll}
                    />
                  </td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Role</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {allUserData.slice(page * 10 - 10, page * 10).map((el) => (
                  <>
                    {editId === el.id ? (
                      <EditableRow
                        key={el.id}
                        el={userData}
                        handleDelete={handleDelete}
                        handleEditChange={handleEditChange}
                        handleEditSubmit={handleEditSubmit}
                      />
                    ) : (
                      <ReadOnly
                        key={el.id}
                        el={el}
                        handleCheckChange={handleCheckChange}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                      />
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            {allUserData.length ? (
              <button
                key="1"
                className="btn btn-danger btn-sm mb-4 "
                onClick={handleClearCompleted}
              >
                Delete Checked
              </button>
            ) : (
              ""
            )}
          </div>
          {allUserData.length !== 0 ? (
            <div className="mb-5">
              <PaginationData
                userDataSize={allUserData.length}
                page={page}
                setPage={setPage}
              />
            </div>
          ) : (
            <div className="jumbotron text-danger h4 font-weight-bold text-center py-1">
              No match found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
