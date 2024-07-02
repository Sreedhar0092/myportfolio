import React, { ReactNode } from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import * as mui from "@mui/material";
import MyProfile from '@/components/MyProfile';
interface LayoutProps {
    children: ReactNode;
}

function Layouts({ children }: LayoutProps) {
    return (
        <>
            <mui.Grid container spacing={0}>
                <mui.Grid item xs={12}>
                    <Header></Header>
                </mui.Grid>
                <aside>
                    <mui.Grid item xs={12}>
                        <SideBar></SideBar>
                    </mui.Grid>
                </aside>
                <main>
                    <MyProfile></MyProfile>
                </main>
                {children}
            </mui.Grid>
        </>
    );
}

export default Layouts;
