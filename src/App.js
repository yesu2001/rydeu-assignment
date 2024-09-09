import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import BookingRequests from "./pages/BookingRequests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/booking-requests" element={<BookingRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
