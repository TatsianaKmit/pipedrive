import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from "@gravity-ui/uikit";
import { PipeForm } from './components/PipeForm'
import './App.scss';

function App() {
  return (
    <ThemeProvider theme="light">
      <div className="App">
        <div className='container'>
          <PipeForm />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
