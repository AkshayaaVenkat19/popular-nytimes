import './index.css';
import { Suspense } from 'react';
import Loader from './components/loader';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <main>
            <AppRoutes />
          </main>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
