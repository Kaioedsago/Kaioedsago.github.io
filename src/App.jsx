import Provider from "./context/provider";
import { Routes, Route } from "react-router-dom";
import './index.css';
import { pages } from "./routes/Rotas";

const App = () => {
  return (
    <div>
        <Provider>
        <Routes>
          {pages.map((page, index) => {
            return (
              <Route
                key={index + "-route"}
                path={page.path}
                element={<page.component />}
              />
            );
          })}
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
