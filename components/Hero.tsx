'use client'

import { motion } from 'framer-motion'
import { Star, Award, Users, Clock, ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const stats = [
    { icon: Award, value: '24년', label: '경력' },
    { icon: Users, value: '10,000+', label: '고객 만족' },
    { icon: Star, value: '4.9/5', label: '평점' },
    { icon: Clock, value: '10년', label: '전통' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-radial rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 border border-primary-200 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-primary-700">10년 전통의 신뢰받는 에스테틱</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="heading-primary">
                아름다운 변화,
                <br />
                <span className="text-secondary-800">이아소에서 시작하세요</span>
              </h1>
              <p className="text-body max-w-xl">
                24년 경력의 전문가가 제공하는 3대 핵심 관리 프로그램으로 
                당신만의 아름다움을 완성해 드립니다. 과학적이고 체계적인 관리 시스템으로 
                건강하고 자연스러운 아름다움을 선사합니다.
              </p>
            </motion.div>

            {/* Core Services Preview */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { title: '황금비율', subtitle: '안면비대칭관리' },
                { title: 'EXbody', subtitle: '체형교정' },
                { title: '디톡스', subtitle: '피부관리' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card-gradient p-4 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-primary-700 font-semibold text-sm">{service.title}</div>
                  <div className="text-secondary-600 text-xs mt-1">{service.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#contact"
                className="btn-primary group"
              >
                무료 상담 예약
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-secondary group">
                <Play className="mr-2 h-4 w-4" />
                시설 둘러보기
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-4 gap-8 pt-8 border-t border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 mb-2">
                    <stat.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="font-bold text-gray-800 text-lg">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="이아소 에스테틱 - 전문적인 피부관리"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-lg bg-gradient-to-r from-primary-50/90 to-secondary-50/90 backdrop-blur-sm border border-primary-200/50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <div className="text-primary-600 font-bold text-xl">24년</div>
                  <div className="text-primary-500 text-xs">전문 경력</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="text-gray-800 font-semibold text-sm">4.9/5</div>
                    <div className="text-gray-500 text-xs">고객 만족도</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <motion.div
              className="absolute top-1/4 -left-12 w-24 h-24 bg-primary-200 rounded-full opacity-20 blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-8 w-32 h-32 bg-secondary-200 rounded-full opacity-20 blur-2xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.2, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="text-xs text-gray-400 mt-2 text-center">스크롤</div>
      </motion.div>
    </section>
  )
}

export default Hero