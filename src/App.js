import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from "@gravity-ui/uikit";
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import FormPage from './pages/FormPage';

function App() {
  return (
    <div className="app">
      <ThemeProvider theme="light">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FormPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

