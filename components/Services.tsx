'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Users, Target, Sparkles, ArrowRight, CheckCircle, Timer, Award } from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      icon: Target,
      title: '황금비율 안면비대칭관리',
      subtitle: '과학적 분석으로 완성하는 균형미',
      description: '정밀한 안면 분석을 통해 개인의 골격과 근육 구조를 파악하고, 황금비율에 맞춘 맞춤형 관리로 자연스러운 얼굴 균형을 완성합니다.',
      features: [
        '3D 안면 분석 시스템',
        '개인 맞춤 비율 설계',
        '근육 밸런스 교정',
        '지속적인 효과 관리'
      ],
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'pink',
      duration: '60분',
      sessions: '10회 프로그램'
    },
    {
      icon: Users,
      title: '골반균형코어 체형교정',
      subtitle: 'EXbody 장비를 활용한 전문 체형관리',
      description: '최신 EXbody 장비와 전문 테크닉을 결합하여 골반 불균형을 교정하고, 코어 근육 강화를 통해 건강하고 아름다운 체형라인을 완성합니다.',
      features: [
        'EXbody 전문 장비 사용',
        '골반 정렬 교정',
        '코어 근육 강화',
        '체형 라인 개선'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'rose',
      duration: '90분',
      sessions: '12회 프로그램'
    },
    {
      icon: Sparkles,
      title: '피부 디톡스 관리',
      subtitle: '깊숙한 노폐물 제거와 재생 케어',
      description: '고농축 영양 공급과 딥클렌징을 통해 피부 깊숙한 노폐물을 제거하고, 세포 재생을 촉진하여 건강하고 투명한 피부로 가꿔드립니다.',
      features: [
        '딥클렌징 디톡스',
        '고농축 영양 공급',
        '세포 재생 촉진',
        '피부 톤 개선'
      ],
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'purple',
      duration: '75분',
      sessions: '8회 프로그램'
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 border border-primary-200 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">3대 핵심 관리 프로그램</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            과학적이고 체계적인 
            <span className="text-gradient block">전문 관리 시스템</span>
          </h2>
          <p className="text-body">
            24년 경력의 전문가가 개발한 3가지 핵심 관리 프로그램으로 
            개인별 맞춤 솔루션을 제공합니다. 각각의 특화된 프로그램이 
            시너지를 이루어 최상의 결과를 선사합니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ x: index % 2 === 1 ? 10 : -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      service.color === 'pink'
                        ? 'bg-[linear-gradient(90deg,var(--primary-500),var(--primary-600))]'
                        : service.color === 'rose'
                        ? 'bg-[linear-gradient(90deg,var(--secondary-500),var(--accent-600))]'
                        : 'bg-[linear-gradient(90deg,var(--accent-500),var(--accent-600))]'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="heading-tertiary text-xl">{service.title}</h3>
                    <p className={`text-sm font-medium ${
                      service.color === 'pink'
                        ? 'text-primary-600'
                        : service.color === 'rose'
                        ? 'text-secondary-600'
                        : 'text-accent-600'
                    }`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-body">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className={`h-4 w-4 ${
                        service.color === 'pink'
                          ? 'text-primary-500'
                          : service.color === 'rose'
                          ? 'text-secondary-500'
                          : 'text-accent-500'
                      }`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Service Info */}
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.sessions}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className={`btn-secondary group inline-flex ${
                    service.color === 'pink'
                      ? 'text-primary-600 bg-primary-50 border-primary-200 hover:bg-primary-100'
                      : service.color === 'rose'
                      ? 'text-secondary-600 bg-secondary-50 border-secondary-200 hover:bg-secondary-100'
                      : 'text-accent-600 bg-accent-50 border-accent-200 hover:bg-accent-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  상담 예약하기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${
                      service.color === 'pink'
                        ? 'bg-[linear-gradient(180deg,rgba(243,181,71,0.2),transparent)]'
                        : service.color === 'rose'
                        ? 'bg-[linear-gradient(180deg,rgba(115,115,115,0.2),transparent)]'
                        : 'bg-[linear-gradient(180deg,rgba(243,181,71,0.2),transparent)]'
                    }`}></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-6 left-6 glass rounded-xl px-4 py-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-sm font-semibold ${
                      service.color === 'pink'
                        ? 'text-primary-700'
                        : service.color === 'rose'
                        ? 'text-secondary-700'
                        : 'text-accent-700'
                    }`}>
                      {index + 1}번째 핵심 관리
                    </div>
                  </motion.div>
                </div>

                {/* Background Decoration */}
                <motion.div
                  className={`absolute -z-10 top-8 ${index % 2 === 1 ? '-left-8' : '-right-8'} w-24 h-24 rounded-full opacity-20 blur-2xl ${
                    service.color === 'pink'
                      ? 'bg-primary-300'
                      : service.color === 'rose'
                      ? 'bg-secondary-300'
                      : 'bg-accent-300'
                  }`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="card-gradient max-w-2xl mx-auto p-8"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              3가지 프로그램을 함께 받으시면
            </h3>
            <p className="text-lg text-primary-600 font-semibold mb-6">
              특별 할인 혜택을 제공합니다
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              패키지 상담받기
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services