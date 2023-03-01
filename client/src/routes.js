import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

// import {useNavigate} from 'react-router-dom';
// const navigate = useNavigate();


export const useRoutes = isAuthenticated => {


    if (isAuthenticated) {
        // redirect('/')
        return (
            <Routes>

                <Route path="/links" element={<LinksPage></LinksPage>}>
                </Route>

                <Route path="/create" element={<CreatePage></CreatePage>}>
                </Route>

                <Route path="/detail/:id" element={<DetailPage></DetailPage>}>
                </Route>

                <Route path="*"  element={<Navigate to="/create" replace />} />
                {/*<Route path="*" element={<Navigate to="/create"></Navigate>}></Route>*/}
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<AuthPage></AuthPage>}></Route>
            {/*<Route element={<Navigate to="/"></Navigate>}></Route>*/}
            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    )
}