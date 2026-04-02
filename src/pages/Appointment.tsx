import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Dog, CheckCircle2, List } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { usePetCareStore } from '@/src/store/usePetCareStore';
import { Link } from 'react-router-dom';

export default function Appointment() {
  const { addAppointment } = usePetCareStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'dog',
    service: 'checkup',
    doctor: 'any',
    date: '',
    time: '',
    ownerName: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAppointment(formData);
    setStep(3);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="flex h-2 bg-slate-100">
            <div 
              className="bg-brand-600 transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="p-8 lg:p-12">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold mb-8">预约第一步：宠物信息</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">宠物姓名</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 outline-none"
                      placeholder="例如：旺财"
                      value={formData.petName}
                      onChange={(e) => setFormData({...formData, petName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">宠物类型</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['dog', 'cat', 'other'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setFormData({...formData, petType: type})}
                          className={cn(
                            "py-3 rounded-xl font-bold transition-all",
                            formData.petType === type 
                              ? "bg-brand-600 text-white shadow-lg shadow-brand-200" 
                              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                          )}
                        >
                          {type === 'dog' ? '狗狗' : type === 'cat' ? '猫咪' : '其他'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">预约服务</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 outline-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="checkup">常规体检</option>
                      <option value="vaccine">疫苗接种</option>
                      <option value="surgery">外科手术</option>
                      <option value="grooming">美容洗护</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!formData.petName}
                    className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-200 hover:bg-brand-700 transition-all disabled:opacity-50"
                  >
                    下一步
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold mb-8">预约第二步：联系方式</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">预约日期</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 outline-none"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">预约时间</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 outline-none"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        required
                      >
                        <option value="">选择时间</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="14:00">14:00</option>
                        <option value="16:00">16:00</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">主人姓名</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 outline-none"
                      placeholder="您的姓名"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">手机号码</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 outline-none"
                      placeholder="您的联系电话"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold"
                    >
                      返回
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] bg-brand-600 text-white py-4 rounded-xl font-bold shadow-xl shadow-brand-200 hover:bg-brand-700 transition-all"
                    >
                      确认预约
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">预约成功！</h2>
                <p className="text-slate-600 mb-8">
                  我们已收到您的预约请求。工作人员将在 1 小时内致电确认详细信息。
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl text-left mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">宠物姓名</p>
                      <p className="font-bold">{formData.petName}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">预约时间</p>
                      <p className="font-bold">{formData.date} {formData.time}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold"
                  >
                    返回首页
                  </button>
                  <Link
                    to="/dashboard"
                    className="bg-slate-100 text-slate-700 px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2"
                  >
                    <List size={18} />
                    查看我的预约
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
