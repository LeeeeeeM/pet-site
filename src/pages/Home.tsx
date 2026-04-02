import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, HeartPulse, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { icon: <ShieldCheck className="text-emerald-500" />, title: "专业认证", desc: "所有兽医均持有国家执业资格证" },
    { icon: <HeartPulse className="text-rose-500" />, title: "全心关爱", desc: "我们像对待家人一样对待您的宠物" },
    { icon: <Clock className="text-amber-500" />, title: "24/7 急诊", desc: "全天候急诊服务，守护生命每一秒" },
    { icon: <Users className="text-brand-500" />, title: "专家团队", desc: "汇聚国内外顶尖宠物医疗专家" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-700 uppercase bg-brand-100 rounded-full">
                PetCare Plus 宠物医疗
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
                给您的爱宠 <br />
                <span className="text-brand-600">最专业的</span> 医疗呵护
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                我们提供全方位的宠物健康服务，从日常体检到复杂手术，结合 AI 智能诊断助手，为您的爱宠保驾护航。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center gap-2 group"
                >
                  立即预约挂号
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/ai-assistant"
                  className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-200 hover:bg-slate-50 transition-all"
                >
                  AI 健康咨询
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/vet${i}/100/100`}
                      alt="Vet"
                      className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">5000+ 宠物主人的选择</p>
                  <p className="text-slate-500">平均评分 4.9/5.0</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/petcare/800/1000"
                  alt="Pet Care"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">为什么选择 PetCare Plus?</h2>
            <p className="text-slate-600">我们致力于通过先进的技术和人性化的关怀，重新定义宠物医疗体验。</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border-8 border-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            您的宠物值得最好的照顾
          </h2>
          <p className="text-brand-100 text-xl mb-12 max-w-2xl mx-auto">
            现在加入我们的健康计划，为您的爱宠预约第一次免费基础体检。
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl active:scale-95"
          >
            立即预约挂号
          </Link>
        </div>
      </section>
    </div>
  );
}
