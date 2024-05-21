import { useCreateUser } from "@/Api/UserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const hasCreatedUser = useRef(false);
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current && user?.name) {
      createUser({ auth0Id: user.sub, email: user.email, name: user.name });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, user, navigate]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
