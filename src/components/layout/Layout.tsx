import { ReactNode } from "react";
import Menu from "../menu/Menu";

type ILayout = {
    children: ReactNode
};

const Layout = ({ children }: ILayout) => {
    return (
        <div className="">
            <Menu />
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>          
        </div>
    );
};

export default Layout;