import React from "react";
import React, { useState, useEffect, useContext } from "react";

export default function Chats() 
  return <div className="background">chats</div>;
  import { Context } from "../context";

  import dynamic from "next/dynamic";
  import { useRouter } from "next/router";
  
  const ChatEngine = dynamic(() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
  );
  const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
  );
  
  export default function Home() {
    const { username, secret } = useContext(Context);
    const [showChat, setShowChat] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      if (typeof document !== undefined) {
        setShowChat(true);
      }
    }, []);
  
    useEffect(() => {
      if (username === "" || secret === "") {
        router.push("/");
      }
    }, [username, secret]);
  
    if (!showChat) return <div />;
  
    return (
      <div className="background">
        <div className="shadow">
          <ChatEngine
            height="calc(100vh - 212px)"
            projectID="57ae8c8f-bef6-4686-bfc9-a8e072926059"
            userName={username}
            userSecret={secret}
            renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
    );
  }  
  