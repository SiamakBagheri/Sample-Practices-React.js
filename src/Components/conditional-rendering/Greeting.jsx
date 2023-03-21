import UserGreeting from "./UserGreeting";
import GusetGreeting from "./GusetGreeting";

function Greeting(props) {
  if (props.isLogin) {
    return <UserGreeting />;
  }
  return <GusetGreeting />;
}

export default Greeting;
