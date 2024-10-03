"use client";
import Button from "@/components/Button";
import { useChat } from "ai/react";
import { useEffect, useState, useRef } from "react";
import { TbSend } from "react-icons/tb";
import ReactMarkdown from "react-markdown";

import { Send, Menu, User, Bot } from "lucide-react";

export default function Chat() {
  // const { messages, input, handleInputChange, handleSubmit } = useChat({});
  // const textareaRef = useRef(null);

  // useEffect(() => {
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "20px";
  //     const scrollHeight = textareaRef.current.scrollHeight;
  //     textareaRef.current.style.height =
  //       scrollHeight > 96 ? "96px" : `${scrollHeight}px`;
  //   }
  // }, [input]);

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter" && !e.shiftKey) {
  //     e.preventDefault(); // Evitar que se añada un salto de línea
  //     handleSubmit(); // Enviar el mensaje
  //   } else if (e.key === "Enter" && e.shiftKey) {
  //     // Permitir el salto de línea
  //     setInput(input + "\n");
  //   }
  // };

  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "¡Hola! ¿En qué puedo ayudarte hoy? La cámara tipo domo Axis M3215-LVE es una cámara de red compacta y resistente diseñada para aplicaciones de videovigilancia en exteriores. A continuación, se detallan algunas de sus especificaciones clave:Resolución: Ofrece una resolución de 2 megapíxeles (1920x1080), lo que proporciona imágenes nítidas y detalladas. Tecnología Lightfinder: Esta cámara cuenta con la tecnología Lightfinder de Axis, que permite obtener imágenes de alta calidad incluso en condiciones de poca luz. WDR y IR optimizado: La cámara está equipada con Wide Dynamic Range (WDR) para manejar condiciones de iluminación difíciles y con iluminación infrarroja (IR) optimizada para capturar imágenes claras en entornos con poca luz.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", content: input }]);
      setInput("");
      // Aquí iría la lógica para procesar la respuesta del bot
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <main className="flex-grow overflow-auto p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-[calc(100%-3rem)] ${
                  message.type === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div className="flex-shrink-0">
                  {message.type === "user" ? (
                    <User className="h-8 w-8 bg-blue-500 text-white rounded-full p-1" />
                  ) : (
                    <Bot className="h-8 w-8 bg-green-500 text-white rounded-full p-1" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white border-t p-4">
        <div className="max-w-3xl mx-auto flex items-center space-x-2">
          <textarea
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="h-6 w-6" />
          </button>
        </div>
      </footer>
    </>
  );
}
