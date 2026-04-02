import React from 'react';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-xl">
                <Stethoscope className="text-white" size={24} />
              </div>
              <span className="text-2xl font-display font-bold text-white">
                PetCare Plus
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              我们是您最值得信赖的宠物健康伙伴，致力于为每一个毛孩子提供高品质的医疗服务。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">快速链接</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">首页</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">医疗服务</Link></li>
              <li><Link to="/vets" className="hover:text-brand-500 transition-colors">专家团队</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-brand-500 transition-colors">AI 咨询</Link></li>
              <li><Link to="/appointment" className="hover:text-brand-500 transition-colors">预约挂号</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">医疗服务</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">常规体检</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">疫苗接种</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">外科手术</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">宠物美容</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">牙科护理</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-500 shrink-0" size={20} />
                <span>北京市朝阳区宠物健康路 88 号</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-500 shrink-0" size={20} />
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-500 shrink-0" size={20} />
                <span>contact@petcareplus.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PetCare Plus 宠物医疗健康平台. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
