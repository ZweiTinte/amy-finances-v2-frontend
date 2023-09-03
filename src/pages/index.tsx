import { RouteComponentProps } from "@gatsbyjs/reach-router";
import * as React from "react";
import { isLoggedIn, login } from "../auth/auth";
import { navigate } from "gatsby";
import Headline from "../components/atoms/headline";
import TextInput from "../components/atoms/textInput";
import { fieldsValid, formValidationMessage } from "../helpers/helpers";
import axios from "axios";

const IndexPage = ({}: RouteComponentProps) => {
  const [isClient, setIsClient] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (isLoggedIn()) {
    navigate("/app/accounts");
    return null;
  }

  function submitHandler(e: React.SyntheticEvent): void {
    axios
      .post(`${process.env.GATSBY_BE_URL}api/token/`, {
        username: username,
        password: password,
      })
      .then((res) => {
        login(res.data.access);
        navigate("/app/accounts");
      });
  }

  return (
    <div className="gameLayout">
      <div className="overviewCard">
        <Headline text="Login to your Profile" style="cardHeadline" />
        <form>
          <div className="formRow">
            <label className="formLabel">Username:</label>
            <TextInput value={username} setValue={setUsername} />
          </div>
          <div className="formRow">
            <label className="formLabel">Passowrd:</label>
            <TextInput value={password} setValue={setPassword} />
          </div>
          <input
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              if (fieldsValid([username, password])) {
                submitHandler(e);
              } else {
                setError(formValidationMessage);
              }
            }}
            value="Log in"
            type="button"
          />
          {error.length > 0 && (
            <div className="formRow">
              <label className="formErrorLabel">{error}</label>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
