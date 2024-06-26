import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Broadcast, NotFound } from "../Pages";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/broadcast" element={<Broadcast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
