//@ts-nocheck
import React from "react";

export const ChatFixedHeader = () => {
    return <>
        <div>
            <span className="logo"><img style={{"max-height": "100px", "margin": "auto"}} src="/images/logo.png" alt=""/></span>
            <h3 style={{"textAlign": "center", "margin": "auto", "color": "#e2e2e2"}}>ALEPH CHAT </h3>
        </div>
    </>
}

export default ChatFixedHeader;
