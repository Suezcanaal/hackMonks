import React from 'react';
import { GoogleGenerativeAI} from '@google/generative-ai'

const ChatbotPage = () => {
    console.log("object")
    const genAi = new GoogleGenerativeAI("AIzaSyAHTH0Hl0Ol-gOKFTk0vMF_8NQArLoPcxk")
    const model = genAi.getGenerativeModel({
        model: "gemini-1.5-pro"
    });
    const r = model.generateContent("India Capital is");
    console.log(r.response.text())
  return (
    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white font-light text-5xl tracking-widest px-2">
      
    </div>
  );
};

export default ChatbotPage;