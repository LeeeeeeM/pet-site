import React from 'react';
import { motion } from 'motion/react';
import { Syringe, Scissors, Activity, Heart, Bone, Microscope } from 'lucide-react';

const services = [
  {
    icon: <Activity className="text-brand-600" />,
    title: "常规体检",
    desc: "全面的身体检查，包括血液分析、影像检查等，及早发现潜在健康风险。",
    price: "¥199 起"
  },
  {
    icon: <Syringe className="text-emerald-600" />,
    title: "疫苗接种",
    desc: "提供猫三联、狗八联、狂犬疫苗等全方位防疫接种服务。",
    price: "¥80 起"
  },
  {
    icon: <Heart className="text-rose-600" />,
    title: "外科手术",
    desc: "绝育手术、软组织手术及骨科手术，由资深专家主刀。",
    price: "¥500 起"
  },
  {
    icon: <Scissors className="text-purple-600" />,
    title: "宠物美容",
    desc: "专业洗护、造型修剪、指甲护理，让您的爱宠焕然一新。",
    price: "¥120 起"
  },
  {
    icon: <Microscope className="text-blue-600" />,
    title: "实验室诊断",
    desc: "院内化验室，快速获取生化、血常规、寄生虫检查结果。",
    price: "¥150 起"
  },
  {
    icon: <Bone className="text-amber-600" />,
    title: "牙科护理",
    desc: "超声波洁牙、拔牙及口腔炎症治疗，维护宠物口腔健康。",
    price: "¥300 起"
  }
];

export default function Services() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">我们的医疗服务</h1>
          <p className="text-slate-600 text-lg">
            PetCare Plus 提供从预防医学到复杂手术的全方位宠物医疗解决方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-brand-100 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {s.desc}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                <span className="text-brand-600 font-bold text-lg">{s.price}</span>
                <button className="text-slate-400 hover:text-brand-600 font-semibold flex items-center gap-1 transition-colors">
                  了解详情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
