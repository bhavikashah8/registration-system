import 'bootstrap/dist/css/bootstrap.min.css';
import '~mdb-ui-kit/css/mdb.min.css';
import NavbarComp from './components/NavbarComp';
import SignUpForm from './components/SignUpForm';



function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <SignUpForm/>
    </div>
  );
}

export default App;
