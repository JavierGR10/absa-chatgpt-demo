"use client";
import Button from "@/components/Button";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { TbSend } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
export default function Component() {
  // const [messages, setMessages] = useState([
  //   { role: "system", content: "Bienvenido a ABSA. ¿En qué puedo ayudarte?" },
  // ]);
  // const [inputMessage, setInputMessage] = useState("");

  const { messages, input, handleInputChange, handleSubmit } = useChat({});
  const textareaRef = useRef(null);

  // useEffect(() => {
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "auto";
  //     textareaRef.current.style.height = `${Math.min(
  //       textareaRef.current.scrollHeight,
  //       160
  //     )}px`;
  //   }
  // }, [input]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height =
        scrollHeight > 96 ? "96px" : `${scrollHeight}px`;
    }
  }, [input]);

  // const renderThumb = ({ style, ...props }) => {
  //   const thumbStyle = {
  //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
  //     borderRadius: '4px',
  //   }
  //   return <div style={{ ...style, ...thumbStyle }} {...props} />
  // }

  // useEffect(() => {
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "23px";
  //     const scrollHeight = textareaRef.current.scrollHeight;
  //     textareaRef.current.style.height =
  //       scrollHeight > 160 ? "160px" : `${scrollHeight}px`;
  //   }
  // }, [input]);

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
        {/* <div className="flex space-x-3 p-4">
          <textarea
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje aquí..."
            className="flex-grow px-5 py-3 border rounded-3xl focus:outline-none focus:ring focus:ring[#0066b3]"
          />
          <Button Icon={TbSend} onClick={handleSubmit} />
        </div> */}
        {/* 
        <div className="p-4 border-t">
          <div className="flex items-end space-x-4">
            <div className="flex-grow">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full p-2 pr-10 border rounded-3xl resize-none overflow-hidden bg-white"
                style={{
                  minHeight: "23px",
                  maxHeight: "160px",
                  lineHeight: "20px",
                }}
              />
            </div>
            <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-[#0066b3] text-white rounded-full hover:bg-[#005092] transition-colors h-10 w-10 flex items-center justify-center flex-shrink-0"
              >
                <TbSend className="h-5 w-5" />
              </button>
          </div> */}

        {/* <div className="flex items-end space-x-3 p-4 bg-gray-100 rounded-lg">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje aquí..."
            className="flex-grow px-4 py-3 border rounded-3xl focus:outline-none focus:ring focus:ring-blue-500 resize-none overflow-hidden max-h-40 bg-white text-black"
            rows={1} // Tamaño inicial
            style={{ height: "auto", minHeight: "48px" }} // Ajusta el textarea a su contenido
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-full flex-shrink-0"
          >
                <TbSend className="h-5 w-5" />
          </button>
        </div> */}

        <div className="p-4">
          <div className=" flex bg-gray-700 rounded-3xl">
            {/* <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <TbSend className="h-5 w-5" />
            </button> */}
            {/* <div className="flex-grow ">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Mensaje ABSA"
                className="w-full bg-transparent text-white placeholder-gray-400 py-2 px-5 outline-none resize-none overflow-y-auto"
                style={{
                  minHeight: "20px",
                  maxHeight: "96px",
                }}
              />
            </div> */}

            {/* <div className="flex-grow"> */}
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full bg-transparent text-white placeholder-gray-400 py-3 px-5 outline-none resize-none  custom-scrollbar"
                style={{
                  minHeight: "20px",
                  maxHeight: "96px",
                }}
              />
            {/* </div> */}
            <button
              onClick={handleSubmit}
              className="p-4 text-gray-400 hover:text-white hover:background-color transition-colors self-end cursor-pointer "
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
