import {FC, useState} from "react";
import {useForm} from "react-hook-form";

export const ChatMainView: FC = () => {

    const [messages, setMessages] = useState(new Array<string>());
    const {register, handleSubmit, watch, formState: {errors}, getValues, resetField} = useForm();


    const appendMessage = () => {
        console.log("Appending message");
        const value = getValues("messageInput");
        if (value && value !== '') {
            setMessages([...messages, value]);
            console.log(value)
            resetField("messageInput");
        }
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
                                                    Username
                                                </div>
                                            </div>
                                        </a>
                                        <input {...register("newChatReceiver")} type="text" class="form-control my-3"
                                               placeholder="Start new chat..."/>
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
                                <div class="d-flex align-items-center py-1">
                                    {/*<div class="position-relative">*/}
                                    {/*    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"*/}
                                    {/*         class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>*/}
                                    {/*</div>*/}
                                    {/*<div class="flex-grow-1 pl-3">*/}
                                    {/*    <strong>Account 1 - testnet</strong>*/}
                                    {/*    <div class="text-muted small"><em>Typing...</em></div>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                    {/*    <button class="btn btn-primary btn-lg mr-1 px-3">*/}
                                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                                    {/*             viewBox="0 0 24 24"*/}
                                    {/*             fill="none" stroke="currentColor" strokeWidth="2"*/}
                                    {/*             strokeLinecap="round"*/}
                                    {/*             strokeLinejoin="round" class="feather feather-phone feather-lg">*/}
                                    {/*            <path*/}
                                    {/*                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>*/}
                                    {/*        </svg>*/}
                                    {/*    </button>*/}
                                    {/*    <button class="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block">*/}
                                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                                    {/*             viewBox="0 0 24 24"*/}
                                    {/*             fill="none" stroke="currentColor" strokeWidth="2"*/}
                                    {/*             strokeLinecap="round"*/}
                                    {/*             strokeLinejoin="round" class="feather feather-video feather-lg">*/}
                                    {/*            <polygon points="23 7 16 12 23 17 23 7"></polygon>*/}
                                    {/*            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>*/}
                                    {/*        </svg>*/}
                                    {/*    </button>*/}
                                    {/*    <button class="btn btn-light border btn-lg px-3">*/}
                                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                                    {/*             viewBox="0 0 24 24"*/}
                                    {/*             fill="none" stroke="currentColor" strokeWidth="2"*/}
                                    {/*             strokeLinecap="round"*/}
                                    {/*             strokeLinejoin="round"*/}
                                    {/*             class="feather feather-more-horizontal feather-lg">*/}
                                    {/*            <circle cx="12" cy="12" r="1"></circle>*/}
                                    {/*            <circle cx="19" cy="12" r="1"></circle>*/}
                                    {/*            <circle cx="5" cy="12" r="1"></circle>*/}
                                    {/*        </svg>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div class="position-relative">
                                <div class="chat-messages p-4">

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