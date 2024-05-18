import './App.css';
import { NavBar} from'./comp/navigation';
import { Banner } from './comp/banner';
import { SkillSet } from './comp/mySkills.js'
import { MyProjects } from './comp/myProjects.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillSet />
      <MyProjects />
    </div>
  );
}

export default App;
