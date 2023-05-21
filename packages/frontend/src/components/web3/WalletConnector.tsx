import {ConnectButton} from "@components/web3/ConnectButton";
import {Button} from "@chakra-ui/react";
import Link from "next/link";

const WalletConnector = () => {
    return <>
        <div id="main">
            <section id="content" className="main align-center">
                <form method="post" action="#">
                    <div className="row gtr-uniform align-center"
                         style={{'justify-content': "center", "margin": "auto", "display": "grid"}}>

                        <ConnectButton></ConnectButton>
                        <Link href="/">
                            <Button
                                py={6}
                                pl={6}
                                rounded="2xl"
                                fontWeight="bold"
                                fontSize="sm"
                                fontFamily="mono"
                                letterSpacing={-0.25}
                                pointerEvents="none"
                            >
                                Go back
                            </Button>
                        </Link>
                    </div>
                </form>
            </section>
        </div>

    </>;
}


export default WalletConnector;