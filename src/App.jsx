import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import ProfileLayout from "./layouts/ProfileLayout.jsx";
import News from "./pages/profile/News.jsx";
import Settings from "./pages/profile/Settings.jsx";
import Payments from "./pages/profile/Payments.jsx";
import Language from "./pages/profile/Language.jsx";
import Theme from "./pages/profile/Theme.jsx";
import Checkmark from "./pages/profile/Checkmark.jsx";
import Suppport from "./pages/profile/Suppport.jsx";
import Contact from "./pages/profile/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            {/* profile layout */}
            <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Settings />} />
              <Route path="settings" element={<Settings />} />
              <Route path="news" element={<News />} />
              <Route path="payment" element={<Payments />} />
              <Route path="language" element={<Language />} />
              <Route path="theme" element={<Theme />} />
              <Route path="checkmark" element={<Checkmark />} />
              <Route path="support" element={<Suppport />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
