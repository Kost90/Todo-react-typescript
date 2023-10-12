import { TaskProvider } from './components/context/Tasks';
import { ThemeProvider } from './components/context/Theme';
import TaskContainer from './components/TasksContainer/TaskContainer';
import './App.css';

function App() {
  return (
   <ThemeProvider>
    <TaskProvider>
      <TaskContainer/>
    </TaskProvider>
   </ThemeProvider>
  );
}

export default App;
