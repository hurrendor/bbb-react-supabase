import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Navigate } from "react-router-dom";
import { motion as m } from "framer-motion";

import { globalStore } from "./Zustand";
import { supabase } from "./ReactQueryApp";
import "./CSS/Login.css";

export default function Login() {
  // const [hasAccount, setHasAccount] = useState(false)
  const session = globalStore((state) => state.session);
  const profile = globalStore((state) => state.profile);
  const users = globalStore((state) => state.users);

  // if there's no session, then you need to log in
  if (!session)
    return (
      <m.div
        id="Auth"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* this component comes straight from Supabase Auth UI React */}
        {/* // it would be nice if I could add some functionality to this component but I don't think that I can */}
        {/* // like it would be nice to do everything else in the if statements here */}
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </m.div>
    );

  useEffect(() => {
    // console.log('useEffect')
    if (session && !profile) {
      // first option is what happens if you log in, because there's already a user created;
      // second option is what happens if you sign up, because we don't re-fetch the users, so this time
      // we'll use the session data until the page reloads
      globalStore.setState({
        profile: users.filter((user) => session.user.id === user.id)[0] || {
          username: null,
          email: session.user.email,
          id: session.user.id,
        },
      });
    }
    // I left the dependency array open because it won't re-render very often;
    // if there's no session we'll go straight to Auth
    // whatever happens at Auth, when they're done there will be a session
    // so then if there's not a profile, we'll do whatever is inside this useEffect
    // which will set a profile, which will navigate us away from this component
  });

  if (session && profile) {
    return <Navigate to="/account" replace={true} />;
  } else return <p>uh oh!</p>;

}
