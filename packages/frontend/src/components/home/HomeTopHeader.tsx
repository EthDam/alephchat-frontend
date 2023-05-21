import {FC} from "react";
import {clsx} from "clsx";

export const HomeTopHeader: FC = () => {
    return <>
        <header id="header" className={clsx("alt", "color-primary-bg")}>
            <span className="logo"><img src="/images/logo.png" alt=""/></span>
            <h1>ALEPH CHAT </h1>
            <p>Online chat based on Aleph blockchain. Easy to use, fully secured messages.</p>
        </header>
    </>;
}

export default HomeTopHeader;