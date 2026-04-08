import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const geminiApiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey: geminiApiKey });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '您好！我是 PetCare AI 助手。我可以为您提供基础的宠物健康建议、日常护理知识或解答关于我们诊所的问题。请注意，AI 建议不能替代专业兽医的诊断。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    if (!geminiApiKey) {
      setMessages(prev => [...prev, { role: 'model', text: '当前未配置 GEMINI API Key，请先在环境变量中设置后再试。' }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: "你是一位专业的宠物医生助手。你的名字是 PetCare AI。你提供关于猫、狗等常见宠物的健康、营养、行为和日常护理的建议。如果问题涉及紧急医疗情况（如中毒、严重外伤、呼吸困难），请务必提醒用户立即前往最近的宠物医院。回答要亲切、专业，并始终包含免责声明：AI建议仅供参考，不能替代线下兽医诊断。",
        },
      });

      const aiText = response.text || "抱歉，我现在无法回答这个问题。";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "抱歉，连接 AI 服务时出现了一些问题，请稍后再试。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-brand-600 p-4 text-white flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <Bot size={24} />
        </div>
        <div>
          <h3 className="font-display font-bold">AI 宠物健康助手</h3>
          <p className="text-xs text-brand-100">24/7 在线咨询</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                m.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                m.role === 'user' ? "bg-brand-600 text-white" : "bg-white text-brand-600 shadow-sm"
              )}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed",
                m.role === 'user' 
                  ? "bg-brand-600 text-white rounded-tr-none" 
                  : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none"
              )}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-brand-600 shadow-sm flex items-center justify-center">
              <Loader2 size={16} className="animate-spin" />
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Warning */}
      <div className="px-4 py-2 bg-amber-50 border-t border-amber-100 flex items-start gap-2">
        <AlertCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-[10px] text-amber-700 leading-tight">
          免责声明：AI 提供的建议仅供参考，不构成医疗诊断。若宠物出现紧急症状，请立即就医。
        </p>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="描述宠物的症状或咨询护理知识..."
            className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
