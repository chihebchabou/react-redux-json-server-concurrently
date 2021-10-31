import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/userActions";
import "./App.css";

function App() {
  // const user = useSelector((state) => state.user);
  // We can use destructuring to extract data from the state
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="App">
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div>
            <h3>{user.fullName}</h3>
            <small>age: {user.age}</small>
          </div>
        ))}
    </div>
  );
}

export default App;
