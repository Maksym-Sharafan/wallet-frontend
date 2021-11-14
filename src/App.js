import * as React from 'react';
import { lazy, Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const DiagramView = lazy(() =>
  import('./views/DiagramView' /* webpackChunkName: "diagram-view" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "notFound-view" */),
);
const ExcludeView = lazy(() =>
  import('./views/ExcludeView' /* webpackChunkName: "exclude-view" */),
);
export default function App() {
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="home" index element={<HomeView />} />
          <Route path="diagram" element={<DiagramView />} />
          <Route path="exclude" element={<ExcludeView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
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
