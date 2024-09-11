import React from "react";
import { Header } from "../../components/shared/Header";

export const CustomRoute: React.FC<{ element: React.ReactNode }> = ({ element, ...rest }) => {
    return (
        <>
            <Header />
            {React.cloneElement(element as React.ReactElement<any>, rest)}
        </>
    );
};