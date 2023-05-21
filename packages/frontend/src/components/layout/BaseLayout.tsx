import {FC, PropsWithChildren} from "react";

export const BaseLayout: FC<PropsWithChildren> = ({children}) => {

    return (
        <>
            <div id="main">
                {children}
            </div>
        </>
    )

}