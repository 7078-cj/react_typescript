import Login from "./Login"
import type { ProfileProps } from "./Profile"

type PrivateProps = {
    isLogIn: boolean
    Component: React.ComponentType<ProfileProps>
}

function Private({isLogIn, Component}: PrivateProps) {
  if(isLogIn){
    return <Component name={'ceejay'}/>
  }else{
    return <Login/>
  }
}

export default Private