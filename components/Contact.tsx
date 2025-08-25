'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send,
  Calendar,
  CheckCircle,
  AlertCircle,
  Navigation,
  Car,
  Train
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Phone,
      title: '전화 상담',
      value: '0507-1447-3778',
      description: '예약 및 문의 가능',
      link: 'tel:0507-1447-3778',
      color: 'text-primary-500'
    },
    {
      icon: MapPin,
      title: '오시는 길',
      value: '경기 고양시 덕양구 화정로 53',
      description: '새롬프라자 8층',
      link: 'https://maps.google.com',
      color: 'text-rose-500'
    },
    {
      icon: Clock,
      title: '운영 시간',
      value: '평일 10:00 - 21:00',
      description: '주말 및 공휴일 문의',
      link: null,
      color: 'text-primary-500'
    },
    {
      icon: MessageCircle,
      title: '카카오톡 상담',
      value: '이아소에스테틱',
      description: '온라인 상담 가능',
      link: 'https://pf.kakao.com',
      color: 'text-rose-500'
    }
  ];

  const services = [
    '황금비율 안면비대칭관리',
    '골반균형코어 체형교정',
    '피부 디톡스 관리',
    '해초 스피쿨리물샷',
    '작은얼굴 미백관리',
    '두피탈모관리',
    '기타 문의'
  ];

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
    '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 환경에서는 백엔드 API로 전송
    try {
      // 시뮬레이션된 API 호출
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-rose-50" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Phone className="w-4 h-4" />
            <span>예약 및 상담</span>
          </motion.div>

          <h2 className="heading-2 text-gray-900 mb-6">
            전문가와 함께하는
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-rose-600 bg-clip-text text-transparent">
              개인별 맞춤 상담
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            24년 경력의 전문가가 직접 상담하여
            <br />
            가장 적합한 관리 방법을 추천해드립니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                온라인 예약 및 상담
              </h3>
              <p className="text-gray-600">
                아래 양식을 작성해주시면 빠른 시간 내에 연락드리겠습니다.
              </p>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700">
                  상담 신청이 완료되었습니다. 빠른 시간 내에 연락드리겠습니다.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700">
                  전송 중 오류가 발생했습니다. 다시 시도해주세요.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    성함 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  관심 서비스
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">서비스를 선택해주세요</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    희망 날짜
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    희망 시간
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">시간을 선택해주세요</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  추가 문의사항
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="궁금한 점이나 특별한 요청사항이 있으시면 자유롭게 적어주세요"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-rose-500 hover:shadow-lg hover:scale-105'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>상담 신청하기</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                개인정보는 상담 목적으로만 사용되며 안전하게 관리됩니다.
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r from-primary-100 to-rose-100 ${info.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors block mb-1"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {info.value}
                          </div>
                        )}
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Navigation className="w-5 h-5 text-primary-500" />
                <span>오시는 길</span>
              </h4>

              <div className="space-y-4">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>지도 영역</p>
                    <p className="text-sm">실제 구현시 Google Maps API 연동</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">자가용</div>
                      <div className="text-gray-600">
                        경기 고양시 덕양구 화정로 53 새롬프라자 8층
                        <br />주차 공간 완비
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Train className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">대중교통</div>
                      <div className="text-gray-600">
                        지하철 3호선 화정역 1번 출구 도보 5분
                        <br />버스 정류장 도보 2분 거리
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <a
                href="tel:0507-1447-3778"
                className="bg-gradient-to-r from-primary-500 to-rose-500 text-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">전화상담</div>
              </a>
              <a
                href="https://pf.kakao.com"
                className="bg-yellow-400 text-gray-900 p-4 rounded-xl text-center hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">카톡상담</div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;