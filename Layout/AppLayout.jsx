import SideBar from "../Components/SideBar";

const AppLayout = ({ children }) => (
    <div>
        <SideBar />
        {children}
    </div>
);

export default AppLayout;