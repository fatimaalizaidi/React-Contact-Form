import "./App.css";
import Header from "./components/Header/Header";
import Topmenu from "./components/Topmenu/Topmenu";
import Form from './components/Form/form';

const App = () => {
  return (
    <div>
      <Topmenu />
      <Header />
      <Form/>
    </div>
  );
};
export default App;
