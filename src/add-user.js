// addSingleUser.js
const { createClient } = require("@supabase/supabase-js");

const supabaseAdmin = createClient(
  "https://etsnyvijvhklcwfnczkq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0c255dmlqdmhrbGN3Zm5jemtxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTMyMjU1MCwiZXhwIjoyMDQ0ODk4NTUwfQ.RH9ZTS6PFXNSK4jpxH3JI_LdCSUSrSGgI4SUG_EvnXE"
);

async function addUser() {
  const email = "admin@icanrp.com"; // Set the user's email
  const password = "vietnam54321***"; // Set the user's password

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // Optional: set to true to skip email verification
  });

  if (error) {
    console.error("Error creating user:", error.message);
  } else {
    console.log("User created successfully:", data);
  }
}

addUser();
