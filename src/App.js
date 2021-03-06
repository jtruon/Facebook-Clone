import React from "react";
import Header from "./Header";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* <Widgets /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
