"use client";
import Button from "@/components/Button";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { TbSend } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
export default function Component() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height =
        scrollHeight > 96 ? "96px" : `${scrollHeight}px`;
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Evitar que se añada un salto de línea
      handleSubmit(); // Enviar el mensaje
    } else if (e.key === "Enter" && e.shiftKey) {
      // Permitir el salto de línea
      setInput(input + "\n");
    }
  };

  return (
    <main className="flex-grow overflow-hidden">
      {/* <div className="h-full  flex flex-col container mx-auto px-6"> */}
      <div className="h-full flex flex-col max-w-4xl mx-auto px-4">
        <div className="flex-grow p-4 overflow-y-auto">
          {messages.map((message, index) => {
            const content =
              typeof message.content === "string"
                ? message.content
                : JSON.stringify(message.content); // Convierte el objeto a string si es necesario

            return (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-2xl ${
                    message.role === "user"
                      ? "bg-[#0066b3] text-white"
                      : " text-black"
                  }`}
                >
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-4">
          <div className=" flex bg-[#0066b3] rounded-3xl">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full bg-transparent text-white placeholder-white-100 py-3 px-5 outline-none resize-none  custom-scrollbar"
                style={{
                  minHeight: "20px",
                  maxHeight: "96px",
                }}
              />
            {/* </div> */}
            <button
              onClick={handleSubmit}
              className="p-4 text-gray-400 hover:text-white rounded-full transition-colors self-end cursor-pointer "
              disabled={!input.trim()}
            >
              <TbSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
