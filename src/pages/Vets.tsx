import React from 'react';
import { motion } from 'motion/react';
import { Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    name: "张医生",
    role: "首席兽医师",
    specialty: "外科、骨科专家",
    exp: "15年经验",
    image: "https://picsum.photos/seed/doc1/400/400",
    desc: "擅长各类复杂外科手术，曾赴德国进修，对大型犬骨科疾病有深入研究。"
  },
  {
    name: "李医生",
    role: "资深内科医生",
    specialty: "猫科、皮肤病专家",
    exp: "10年经验",
    image: "https://picsum.photos/seed/doc2/400/400",
    desc: "专注于猫科医学，对顽固性皮肤病和内分泌系统疾病有独到见解。"
  },
  {
    name: "王医生",
    role: "全科兽医师",
    specialty: "影像学、预防医学",
    exp: "8年经验",
    image: "https://picsum.photos/seed/doc3/400/400",
    desc: "精通超声及X射线诊断，致力于宠物全生命周期的预防保健。"
  }
];

export default function Vets() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">我们的专家团队</h1>
          <p className="text-slate-600 text-lg">
            每一位医生都怀揣着对生命的热爱，为您提供最专业的医疗建议。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-square shadow-xl">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <Link
                    to="/appointment"
                    className="w-full bg-white text-brand-600 py-3 rounded-xl font-bold text-center shadow-lg"
                  >
                    预约咨询
                  </Link>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{doc.name}</h3>
                  <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-xs font-bold">
                    {doc.exp}
                  </span>
                </div>
                <p className="text-brand-600 font-bold">{doc.role} · {doc.specialty}</p>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {doc.desc}
                </p>
                
                <div className="pt-4 flex gap-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Award size={16} />
                    <span className="text-sm">执业兽医</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
