import {FC} from "react";
import {clsx} from "clsx";

export const HomeTopHeader: FC = () => {
    return <>
        <header id="header" className={clsx("alt", "color-secondary-fg")}>
            <span className="logo"><img src="/images/logo.png" alt=""/></span>
            <h1>ALEPH CHAT </h1>
            <p>Your Gateway to Secure and Private Messaging.</p>
        </header>
    </>;
}

export default HomeTopHeader;
