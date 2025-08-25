'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  Users, 
  Heart, 
  CheckCircle, 
  Star,
  MapPin,
  Clock,
  Phone,
  Sparkles
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2016",
      title: "이아소에스테틱 개원",
      description: "고양시 화정에서 전문 에스테틱 시작",
      icon: MapPin
    },
    {
      year: "2018",
      title: "전문 장비 도입",
      description: "최신 에스테틱 장비 및 기술 도입",
      icon: Award
    },
    {
      year: "2020",
      title: "고객 2,000명 돌파",
      description: "지역 대표 에스테틱으로 성장",
      icon: Users
    },
    {
      year: "2022",
      title: "EXbody 시스템 도입",
      description: "과학적 체형 분석 서비스 시작",
      icon: Star
    },
    {
      year: "2024",
      title: "고객 5,000명 돌파",
      description: "10년 신뢰의 브랜드로 자리잡음",
      icon: Heart
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "고객 중심",
      description: "개인별 특성을 고려한 맞춤형 관리로 최상의 결과를 제공합니다."
    },
    {
      icon: Award,
      title: "전문성",
      description: "24년 경력의 전문가가 축적된 노하우로 안전하고 효과적인 관리를 합니다."
    },
    {
      icon: Sparkles,
      title: "혁신",
      description: "최신 기술과 장비를 도입하여 더 나은 서비스를 제공합니다."
    },
    {
      icon: CheckCircle,
      title: "신뢰",
      description: "10년간 5,000명 이상의 고객이 신뢰하는 브랜드입니다."
    }
  ];

  const certifications = [
    "국가공인 미용사 자격증",
    "아로마테라피 전문가",
    "스킨케어 전문가 자격",
    "체형관리사 자격증",
    "림프마사지 전문가",
    "셀큐라스피큘 인증"
  ];

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Heart className="w-4 h-4" />
            <span>About 이아소에스테틱</span>
          </motion.div>

          <h2 className="heading-2 text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-rose-600 bg-clip-text text-transparent">
              24년 경력
            </span>
            의 전문성과
            <br />
            10년의 신뢰를 바탕으로
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            2016년부터 고양시 화정에서 시작된 이아소에스테틱은
            <br />
            개인별 맞춤 케어로 건강한 아름다움을 선사합니다.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="이아소에스테틱 원장"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Stats Overlay */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">24년</div>
                    <div className="text-sm text-gray-600">전문 경력</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rose-600">10년</div>
                    <div className="text-sm text-gray-600">운영 기간</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">5,000+</div>
                    <div className="text-sm text-gray-600">누적 고객</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rose-600">98%</div>
                    <div className="text-sm text-gray-600">만족도</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -right-2 w-12 h-12 bg-rose-200 rounded-full opacity-40"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                진정한 아름다움을 위한 전문적인 접근
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                24년간 축적된 전문적인 경험과 지속적인 기술 습득을 통해, 
                고객 개개인의 특성을 정확히 파악하고 가장 효과적인 
                관리 방법을 제안합니다.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                단순한 외적 변화가 아닌, 근본적인 건강 개선을 통한 
                자연스럽고 지속가능한 아름다움을 추구합니다.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">전문 자격 및 인증</h4>
              <div className="grid grid-cols-1 gap-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <motion.div
              className="bg-gradient-to-r from-primary-50 to-rose-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-bold text-gray-900 mb-4">상담 및 예약</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <a href="tel:0507-1447-3778" className="text-gray-700 hover:text-primary-600">
                    0507-1447-3778
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">
                    경기 고양시 덕양구 화정로 53 새롬프라자 8층
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">영업시간: ~21:00</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              이아소에스테틱의 성장 여정
            </h3>
            <p className="text-lg text-gray-600">
              10년간 고객과 함께 성장해온 이아소에스테틱의 발자취
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-rose-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'justify-start' : 'justify-end'
                    }`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-primary-500 flex items-center justify-center z-10">
                      <Icon className="w-5 h-5 text-primary-500" />
                    </div>

                    {/* Content Card */}
                    <div className={`w-80 max-w-sm ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="text-2xl font-bold text-primary-600 mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              이아소에스테틱의 핵심 가치
            </h3>
            <p className="text-lg text-gray-600">
              고객의 만족과 신뢰를 최우선으로 하는 우리의 가치관
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-rose-500 rounded-2xl text-white mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;