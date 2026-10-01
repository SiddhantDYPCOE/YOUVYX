import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import GenreSelection from "../pages/Genre/GenreSelection";
import ContentDetails from "../pages/content/ContentDetail";
import CreateContent from "../pages/creator/CreateContent";
import CreatorRegister from "../pages/creator/CreatorRegister";
import CreatorProfile from "../pages/creator/CreatorProfile";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/search/Search";
import PublicCreatorProfile from "../pages/creator/PublicCreatorProfile";
import CreateArticle from "../pages/creator/CreateArticle";

import { useAuth } from "../hooks/useAuth";
import PublicUserProfile from "../pages/profile/PublicUserProfile";
import Followers from "../pages/profile/Followers";
import Following from "../pages/profile/Following";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const CreatorRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.accountType !== "CREATOR") {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public */}

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

<Route
  path="/creator/:userId"
  element={<PublicCreatorProfile />}
/>

<Route
  path="/profile/:userId"
  element={<PublicUserProfile />}
/>
<Route
  path="/search"
  element={<Search />}
/>

      {/* Protected */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

      <Route
        path="/genres"
        element={
          <ProtectedRoute>
            <GenreSelection />
          </ProtectedRoute>
        }
      />

<Route
  path="/profile/followers"
  element={
    <ProtectedRoute>
      <Followers />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile/following"
  element={
    <ProtectedRoute>
      <Following />
    </ProtectedRoute>
  }
/>
      <Route
        path="/content/:contentId"
        element={
          <ProtectedRoute>
            <ContentDetails />
          </ProtectedRoute>
        }
      />

      {/* Creator */}

      <Route
        path="/creator/register"
        element={
          <ProtectedRoute>
            <CreatorRegister />
          </ProtectedRoute>
        }
      />

      <Route
  path="/creator/create"
  element={
    <CreatorRoute>
      <CreateContent />
    </CreatorRoute>
  }
/>

<Route
  path="/creator/create/article"
  element={
    <CreatorRoute>
      <CreateArticle />
    </CreatorRoute>
  }
/>

      <Route
        path="/creator/:userId"
        element={
          <ProtectedRoute>
            <CreatorProfile />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;