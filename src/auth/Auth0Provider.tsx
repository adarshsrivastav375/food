import { useCreateUser } from "@/Api/UserApi";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNAvigate = ({ children }: Props) => {
  const { createUser } = useCreateUser();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLINT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  if (!domain && !clientId && !redirectUrl) {
    throw new Error("unable to initialize auth");
  }
  const onRedirectCallback = (AppState?: AppState, user?: User) => {
    if (user?.sub && user?.email) {
      createUser({ auth0Id: user.sub, email: user.email });
    }
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUrl }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNAvigate;
