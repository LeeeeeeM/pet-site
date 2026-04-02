import React from 'react';
import { motion } from 'motion/react';
import { usePetCareStore } from '@/src/store/usePetCareStore';
import { Calendar, Clock, Dog, Trash2, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  const { appointments, cancelAppointment, clearAppointments } = usePetCareStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle2 className="text-emerald-500" size={18} />;
      case 'cancelled': return <XCircle className="text-rose-500" size={18} />;
      default: return <Clock className="text-amber-500" size={18} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return '已确认';
      case 'cancelled': return '已取消';
      case 'completed': return '已完成';
      default: return '待确认';
    }
  };

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-2">我的预约中心</h1>
            <p className="text-slate-500">管理您的宠物医疗预约记录</p>
          </div>
          {appointments.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('确定要清空所有预约记录吗？')) clearAppointments();
              }}
              className="text-slate-400 hover:text-rose-600 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              <Trash2 size={16} />
              清空记录
            </button>
          )}
        </div>

        {appointments.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200"
          >
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Calendar size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">暂无预约记录</h3>
            <p className="text-slate-500 mb-8">您还没有为爱宠进行过预约挂号。</p>
            <a
              href="/appointment"
              className="inline-block bg-brand-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all"
            >
              立即预约
            </a>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {appointments.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                    app.petType === 'dog' ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
                  )}>
                    <Dog size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{app.petName}</h4>
                    <p className="text-sm text-slate-500">
                      {app.service === 'checkup' ? '常规体检' : 
                       app.service === 'vaccine' ? '疫苗接种' : 
                       app.service === 'surgery' ? '外科手术' : '美容洗护'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:flex md:items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} className="text-brand-500" />
                    <span>{app.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock size={16} className="text-brand-500" />
                    <span>{app.time}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                    {getStatusIcon(app.status)}
                    <span className="font-medium">{getStatusText(app.status)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {app.status === 'pending' && (
                    <button
                      onClick={() => cancelAppointment(app.id)}
                      className="px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    >
                      取消预约
                    </button>
                  )}
                  <button className="px-4 py-2 text-sm font-bold text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                    详情
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
