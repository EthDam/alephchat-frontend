import {FC} from "react";
import Link from "next/link";
import {Button} from "@chakra-ui/react";

export const HomeContent: FC = () => {
    return <>
        <section id="intro" className="main">
            <div className="spotlight">
                <div className="content">
                    <header className="major">
                        <h2 className="color-primary-fg"><b>Your Privacy, Our Priority</b></h2>
                    </header>
                    <p className="color-secondary-fg">AlephChat prioritizes your privacy by employing cutting-edge encryption protocols. Your messages are shielded from unauthorized access, ensuring that only you and your intended recipients can read them. Rest easy knowing that your sensitive conversations remain confidential.</p>
                    <ul className="actions">
                        <li>
                            <Link href="/chat" style={{"border": "none"}}>
                                <Button
                                    style={{"box-shadow": "inset 0 0 0 1px #d66095", "color": "#d66095 !important", "text-transform": "uppercase", "font-size":"25px", "margin-top": "15px"}}
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
            <p className="color-secondary-fg">AlephChat prioritizes your privacy by employing cutting-edge encryption protocols. Your messages are shielded from unauthorized access, ensuring that only you and your intended recipients can read them. Rest easy knowing that your sensitive conversations remain confidential.</p>
            <ul className="features">
                <li>
                    <span className="logo"><img src="/images/safe.png" style={{"margin": "auto"}} alt=""/></span>
                    <h2 className="color-primary-fg">Safety First: Your Privacy Matters</h2>
                    <p className="color-secondary-fg">At AlephChat, we prioritize your privacy by implementing robust encryption and Aleph Zero blockchain technology, ensuring your messages are secure and protected from unauthorized access.</p>
                </li>
                <li>
                    <span className="logo"><img src="/images/easy.png" style={{"margin": "auto"}} alt=""/></span>
                    <h2 className="color-primary-fg">Effortlessly Easy to Use</h2>
                    <p className="color-secondary-fg">AlephChat offers a user-friendly interface, making messaging a seamless and intuitive experience, so you can focus on connecting with others without any hassle. </p>
                </li>
                <li>
                    <span className="logo"><img src="/images/private.png" style={{"margin": "auto"}} alt=""/></span>
                    <h3 className="color-primary-fg">Your Messages, Your Privacy </h3>
                    <p className="color-secondary-fg">With end-to-end encryption, AlephChat guarantees that only you and your intended recipients have access to your messages, ensuring your conversations remain private and confidential.</p>
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
