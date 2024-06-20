import { createServerClient } from "~/libs/supabase/server-client";


const AccountPage = async () => {
 const supabase = await createServerClient()
  const { data } = await supabase.auth.getUser()
  console.log(data)


  return (
    <div className="h-screen">
      <h2>Current USER:</h2>
    <pre>{JSON.stringify(data, null,2)}</pre>
    </div>
  );
};

export default AccountPage;
