// auth.js
import { useRouter } from "next/navigation";
import { supabase } from "./supabaseClient";
import { useEffect } from "react";

export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return user;
};

// The signIn function is a wrapper around the signInWithPassword method provided by the Supabase auth object. It takes an email and password as arguments, signs in the user, and returns the user object if successful. If an error occurs, it throws the error.

export const useCheckSession = () => {
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData.session) {
        router.push("/admin");
      } else {
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);
};
