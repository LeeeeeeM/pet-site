import React from 'react';
import AIChatAssistant from '@/src/components/AIChatAssistant';
import { motion } from 'motion/react';
import { Sparkles, ShieldAlert, MessageCircle } from 'lucide-react';

export default function AIAssistantPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold mb-6">
                <Sparkles size={16} />
                智能医疗助手
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                随时随地 <br />
                解答您的 <span className="text-brand-600">宠物健康</span> 疑问
              </h1>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                我们的 AI 助手基于最新的宠物医疗知识库，为您提供即时的健康建议、营养指导和行为咨询。
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">即时响应</h3>
                  <p className="text-sm text-slate-500">24小时在线，无需等待，快速获取基础护理建议。</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 shrink-0">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">安全提醒</h3>
                  <p className="text-sm text-slate-500">智能识别紧急情况，并提醒您及时寻求线下专业兽医帮助。</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <ShieldAlert size={18} />
                重要提示
              </h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                AI 助手的回答仅供参考，不应视为最终医疗诊断。如果您的宠物出现呕吐、腹泻、呼吸困难或严重外伤，请立即联系我们的急诊电话或前往最近的宠物医院。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AIChatAssistant />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
