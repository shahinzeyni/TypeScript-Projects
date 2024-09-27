import { useContext } from "react"
import { AuthContext } from "../Context"
export default function Header() {
    const authContext = useContext(AuthContext)
  return (
    <div>
        {authContext?.user?.name}
    </div>
  )
}
