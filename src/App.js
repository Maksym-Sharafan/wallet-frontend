import * as React from 'react';
// export default App;
// import { AppBar } from "@material-ui/core";
import AppBar from './components/AppBar/AppBar';
// import { Switch, Route } from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
// import { lazy, Suspense } from "react";
// import Navigation from "./components/Navigation/Navigation";
import HomeView from './views/HomeView';
import DiagramView from './views/DiagramView';
import NotFoundView from './views/NotFoundView';

// import type { LinkProps } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<HomeView />} />
        <Route path="diagram" element={<DiagramView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <AppBar />
    </div>
  );
}

// function CustomLink({ children, to, ...props }: LinkProps) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <div>
//       <Link
//         style={{ textDecoration: match ? 'underline' : 'none' }}
//         to={to}
//         {...props}
//       >
//         {children}
//       </Link>
//       {match && ' (active)'}
//     </div>
//   );
// }
