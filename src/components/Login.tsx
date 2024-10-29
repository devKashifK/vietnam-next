import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading" : "Send magic link"}
        </Button>
      </form>
    </div>
  );
}
