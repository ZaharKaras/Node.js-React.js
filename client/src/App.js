import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Trip from './Trip';
import CreateTrip from './CreateTrip';
import UpdateTrip from './UpdateTrip';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Trip/>}></Route>
          <Route path='/create' element={<CreateTrip/>}></Route>
          <Route path='/update/:id' element={<UpdateTrip/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
