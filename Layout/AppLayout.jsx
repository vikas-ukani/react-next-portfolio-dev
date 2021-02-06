import SideBar from "../Components/SideBar";
import { useRouter } from "next/router"

function AppLayout({ children }) {
    // const router = useRouter()
    // console.log('url', router.pathname);
    // console.log('url', router.pathname);
    return (
        <div>
            <SideBar />
            {children}
        </div>
    )
}

export default AppLayout