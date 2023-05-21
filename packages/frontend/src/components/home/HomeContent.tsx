import {FC} from "react";
import Link from "next/link";
import {Button} from "@chakra-ui/react";

export const HomeContent: FC = () => {
    return <>
        <section id="intro" className="main">
            <div className="spotlight">
                <div className="content">
                    <header className="major">
                        <h2 className="color-primary-fg">SEND ENCRYPTED MESSAGES</h2>
                    </header>
                    <p className="color-secondary-fg">Aleph chat - fully decentralised and encrypted messaging.
                        LOREM
                        IPSUM
                        PROPAGANDA LOREM IPSUM </p>
                    <ul className="actions">
                        <li>
                            <Link href="/chat">
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
                                    Use chat
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <img src="/images/image1.png" alt=""/>

            </div>
        </section>

        <section id="first" className="main special">
            <header className="major">
                <h2 className="color-primary-fg">WHY YOU SHOULD USE ALEPHCHAT</h2>
            </header>
            <p className="color-secondary-fg">You don`t have to worry about message leaking. Your messages will be
                fully
                decentralized due to blockchain /lorem ipsum lorem ipsum/</p>
            <ul className="features">
                <li>
                    <span className="logo"><img src="/images/safe.png" alt=""/></span>
                    <h3 className="color-primary-fg">SAFETY</h3>
                    <p className="color-secondary-fg">This is the main reason why you should use Aleph Chat.
                        Blockchain
                        technology is
                        the guaranty of safety.</p>
                </li>
                <li>
                    <span className="logo"><img src="/images/easy.png" alt=""/></span>
                    <h3 className="color-primary-fg">EASY TO USE</h3>
                    <p className="color-secondary-fg">Just three simple steps to join Aleph Chat. No extra data
                        needed. </p>
                </li>
                <li>
                    <span className="logo"><img src="/images/private.png" alt=""/></span>
                    <h3 className="color-primary-fg">PRIVATE MESSAGE </h3>
                    <p className="color-secondary-fg">Our chat guarantee you sending private messages to your
                        friends.</p>
                </li>
            </ul>
        </section>

        <section id="second" className="main special">
            <header className="major">
                <h2 className="color-primary-fg">JUST A FEW STEPS </h2>
                <p className="color-secondary-fg">All you need to do is just to connect a wallet - your set up is
                    ready.
                    Then you can
                    enjoy safety chatting.</p>
                <span className="logo"><img className="m-auto" src="/images/steps.png" alt=""/></span>
            </header>


        </section>
    </>;
}

export default HomeContent;