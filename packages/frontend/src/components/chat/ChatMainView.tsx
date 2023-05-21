/* eslint-disable */
//@ts-nocheck
import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {useContract} from "@hooks/useContract";
import {useInkathon} from "@scio-labs/use-inkathon";

export const ChatMainView: FC = () => {

    const [messages, setMessages] = useState(new Array<string>());
    const {register, handleSubmit, watch, formState: {errors}, getValues, resetField} = useForm();
    const {api, activeAccount, isConnected} = useInkathon()
    const [initChat, sendMessage, readMessages] = useContract();

    const appendMessage = () => {
        const value = getValues("messageInput");
        if (value && value !== '') {
            console.log("Appending message");
            setMessages([...messages, value]);
            console.log(value)
            resetField("messageInput");
        }
    }

    const testGetChats = () => {
        readMessages().then(value1 => {
            console.log("Finished")
        });
    }

    const handleNewChat = () => {
        const receiverAddress = getValues("newChatReceiver");
        const initialMessage = getValues("messageInput");
        if (!receiverAddress) return;
        console.log("initializing chat for receiver: " + receiverAddress);
        initChat(receiverAddress, initialMessage as string).then(r => {
            console.log("created new chat session")
        })
    }

    const reduceAddress = (addr: string | undefined): string | undefined => {
        if (!addr) return undefined;
        return addr.slice(0, 4) + '...' + addr.slice(addr.length - 4, addr.length);
    }

    return <>
        <main class="content" style={{"background-color": "#030829"}}>
            <div class="container p-0">
                <h1 class="h3 mb-3">Your chats</h1>
                <div class="card">
                    <div class="row g-0">
                        <div class="col-12 col-lg-5 col-xl-3 border-right">
                            <div class="px-4 d-none d-md-block">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <a href="#" class="list-group-item list-group-item-action border-0">
                                            <div class="d-flex align-items-start">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                     class="rounded-circle mr-1" alt="Username" width="40" height="40"/>
                                                <div class="flex-grow-1 ml-3">
                                                    {reduceAddress(activeAccount?.address) || "Wallet not connected"}
                                                </div>
                                            </div>
                                        </a>
                                        <input {...register("newChatReceiver")} type="text" class="form-control my-3"
                                               placeholder="Start new chat..."/>
                                        <button className="align-center m-auto" onClick={handleNewChat}
                                                style={{"width": "100%"}}>Start new
                                            chat
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="list-group-item list-group-item-action border-0">
                                <div class="badge bg-success float-right">5</div>
                                <div class="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                         class="rounded-circle mr-1" alt="User1" width="40" height="40"/>
                                    <div class="flex-grow-1 ml-3">
                                        User1
                                        <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0">
                                <div class="badge bg-success float-right">2</div>
                                <div class="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                         class="rounded-circle mr-1" alt="User2" width="40" height="40"/>
                                    <div class="flex-grow-1 ml-3">
                                        User2
                                        <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0">
                                <div class="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                         class="rounded-circle mr-1" alt="User3" width="40" height="40"/>
                                    <div class="flex-grow-1 ml-3">
                                        User3
                                        <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0">
                                <div class="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                         class="rounded-circle mr-1" alt="User4" width="40" height="40"/>
                                    <div class="flex-grow-1 ml-3">
                                        User4
                                        <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <hr class="d-block d-lg-none mt-1 mb-0"/>
                        </div>
                        <div class="col-12 col-lg-7 col-xl-9">
                            <div class="py-2 px-4 border-bottom d-none d-lg-block">
                            </div>
                            <div class="position-relative">
                                <div class="chat-messages p-4" style={{"display": "flow-root"}}>

                                    {messages.length === 0 && "No messages yet."}

                                    {
                                        messages.map((value, index) => (
                                            <div key={index}>
                                                <div className="chat-message-left pb-4">
                                                    <div>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                             className="rounded-circle mr-1" alt="Sharon Lessman"
                                                             width="40"
                                                             height="40"/>
                                                        <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                        <div className="font-weight-bold mb-1">Account 1 - testnet</div>
                                                        {value}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div class="flex-grow-0 py-3 px-4 border-top">
                                <div class="input-group">
                                    <input type="text" {...register("messageInput")} class="form-control"
                                           placeholder="Type your message"/>
                                    <button class="btn btn-primary" onClick={appendMessage}>Send</button>
                                    <button className="btn btn-primary" onClick={testGetChats}>Test get chats</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>


}

export default ChatMainView;
