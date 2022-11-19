import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const RcChild = React.lazy(() => import('rc-child/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rc-child">RcChild</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="rc-base" />} />
        <Route path="/rc-child" element={<RcChild />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
