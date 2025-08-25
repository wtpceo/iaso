'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  Heart
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "황금비율 안면비대칭관리",
      subtitle: "셀큐라스피큘 특화",
      icon: Target,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary-500 to-rose-500",
      bgColor: "bg-primary-50",
      features: [
        "셀큐라스피큘 전문 관리",
        "림프시스템 활성화",
        "얼굴 윤곽 개선",
        "황금비율 분석"
      ],
      benefits: [
        "비대칭 개선으로 균형잡힌 얼굴",
        "자연스러운 V라인 완성",
        "피부 탄력 증진",
        "전체적인 얼굴 리프팅 효과"
      ],
      process: [
        "얼굴 분석 및 측정",
        "개인별 맞춤 플랜 수립",
        "셀큐라스피큘 적용",
        "림프 마사지 및 관리"
      ]
    },
    {
      id: 2,
      title: "골반균형코어 체형교정",
      subtitle: "EXbody 체형분석장비",
      icon: Users,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-rose-500 to-primary-500",
      bgColor: "bg-rose-50",
      features: [
        "EXbody 체형분석장비 활용",
        "과학적 데이터 기반 관리",
        "개인별 맞춤 운동 솔루션",
        "골반 균형 교정"
      ],
      benefits: [
        "체형 불균형 개선",
        "코어 근력 강화",
        "자세 교정 효과",
        "전신 밸런스 향상"
      ],
      process: [
        "EXbody 정밀 체형 분석",
        "문제점 진단 및 상담",
        "맞춤형 교정 프로그램",
        "정기적인 진척도 측정"
      ]
    },
    {
      id: 3,
      title: "피부 디톡스 관리",
      subtitle: "아토피, 건선, 알러지 전문",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary-600 to-rose-400",
      bgColor: "bg-primary-50",
      features: [
        "아토피, 건선 전문 케어",
        "알러지 피부 진정 관리",
        "안티에이징 프로그램",
        "피부 건강 회복"
      ],
      benefits: [
        "민감한 피부 진정",
        "염증 완화 및 재생",
        "피부 장벽 기능 강화",
        "건강한 피부 톤 개선"
      ],
      process: [
        "피부 상태 정밀 진단",
        "개인별 디톡스 플랜",
        "전문 케어 시술",
        "홈케어 가이드 제공"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-rose-50/30 to-primary-50/30" ref={ref}>
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
            <Sparkles className="w-4 h-4" />
            <span>3대 핵심 관리 프로그램</span>
          </motion.div>

          <h2 className="heading-2 text-gray-900 mb-6">
            전문성과 혁신이 만난
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-rose-600 bg-clip-text text-transparent">
              맞춤형 케어 솔루션
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            24년 경력의 전문가가 개인별 특성을 분석하여
            <br />
            가장 효과적인 관리 방법을 제안합니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-lg">주요 특징</h4>
                    <div className="grid gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-lg">기대 효과</h4>
                    <div className="grid gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                        >
                          <Heart className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <span>상담 받기</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative ${service.bgColor} p-6 rounded-3xl`}>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full opacity-20`}></div>
                    <div className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full opacity-30`}></div>
                  </div>

                  {/* Process Steps */}
                  <motion.div
                    className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.8 }}
                  >
                    <h5 className="font-semibold text-gray-900 mb-3 text-sm">관리 과정</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-rose-500 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                개인별 맞춤 상담을 받아보세요
              </h3>
              <p className="text-primary-100 mb-6">
                24년 경력의 전문가가 직접 상담하여 가장 적합한 관리 방법을 추천해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0507-1447-3778"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                >
                  전화 상담 (0507-1447-3778)
                </a>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  온라인 상담
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;