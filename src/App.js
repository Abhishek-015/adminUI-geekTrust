import "./App.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./components/adminPanel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <>
      <div className="App">
        <AdminPanel />
      </div>
    </>
  );
}

export default App;
