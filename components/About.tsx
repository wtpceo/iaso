'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Heart, CheckCircle, Star, Calendar, Target } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const achievements = [
    {
      icon: Calendar,
      value: '24년',
      label: '전문 경력',
      description: '끊임없는 연구와 노하우 축적'
    },
    {
      icon: Award,
      value: '10년',
      label: '운영 전통',
      description: '신뢰받는 브랜드 구축'
    },
    {
      icon: Users,
      value: '10,000+',
      label: '고객 만족',
      description: '누적 고객 관리 건수'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: '만족도',
      description: '고객 리뷰 평균 점수'
    }
  ]

  const researchResults = [
    {
      title: '황금비율 알고리즘 개발',
      description: '개인별 안면 구조 분석을 통한 최적 비율 도출 시스템',
      impact: '자연스러운 균형미 완성',
      year: '2020-2023'
    },
    {
      title: 'EXbody 기법 정립',
      description: '골반 교정과 코어 강화를 위한 체계적 프로그램 개발',
      impact: '건강한 체형 라인 개선',
      year: '2021-2024'
    },
    {
      title: '디톡스 관리 프로토콜',
      description: '피부 재생 극대화를 위한 단계별 케어 시스템',
      impact: '깊은 정화와 재생 효과',
      year: '2019-2024'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: '진정성',
      description: '고객의 마음을 이해하고 진심으로 소통합니다'
    },
    {
      icon: Target,
      title: '전문성',
      description: '24년 경력을 바탕으로 한 전문적인 서비스를 제공합니다'
    },
    {
      icon: TrendingUp,
      title: '혁신성',
      description: '끊임없는 연구개발로 더 나은 결과를 추구합니다'
    },
    {
      icon: CheckCircle,
      title: '신뢰성',
      description: '약속한 결과를 위해 책임감 있게 관리합니다'
    }
  ]

  return (
    <section id="about" className="section bg-white">
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
            <span className="text-sm font-medium text-primary-700">연구개발 성과</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            24년 경력으로 완성한
            <span className="text-gradient block">과학적 뷰티 솔루션</span>
          </h2>
          <p className="text-body">
            오랜 경험과 끊임없는 연구를 통해 개발한 독자적인 관리 시스템으로 
            고객 한 분 한 분의 아름다움을 완성해 나갑니다.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="card text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon className="h-6 w-6 text-primary-600" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.value}</div>
              <div className="text-accent-600 font-semibold mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-500">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="heading-tertiary">연구개발로 검증된 전문 시스템</h3>
              <div className="space-y-4">
                <p className="text-body">
                  이아소 에스테틱은 단순한 뷰티 서비스를 넘어서, 과학적 근거와 
                  체계적인 연구를 바탕으로 한 전문 솔루션을 제공합니다.
                </p>
                <p className="text-body">
                  24년간의 현장 경험과 끊임없는 연구개발을 통해 개인별 맞춤형 
                  관리 시스템을 완성했으며, 이를 통해 더욱 안전하고 효과적인 
                  결과를 보장합니다.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="card-gradient p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <value.icon className="h-4 w-4 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800">{value.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="전문적인 관리 환경"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-lg bg-gradient-to-r from-accent-50/90 to-primary-50/90 backdrop-blur-sm border border-accent-200/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-center">
                  <div className="text-accent-600 font-bold text-xl">전문</div>
                  <div className="text-accent-500 text-xs">시스템</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Research Results */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">핵심 연구개발 성과</h3>
            <p className="text-body max-w-2xl mx-auto">
              지속적인 연구와 개발을 통해 완성한 3가지 핵심 프로그램의 
              과학적 근거와 실제 적용 사례를 소개합니다.
            </p>
          </div>

          <div className="space-y-6">
            {researchResults.map((result, index) => (
              <motion.div
                key={result.title}
                className="card p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="text-sm text-accent-600 font-medium">{result.year}</div>
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">{result.title}</h4>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                  
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full border border-primary-200">
                      <TrendingUp className="h-4 w-4 text-primary-600 mr-2" />
                      <span className="text-sm font-medium text-primary-700">{result.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="card-gradient max-w-3xl mx-auto p-8"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              24년 경력과 10년 전통이 만든 차별화된 결과
            </h3>
            <p className="text-body mb-6">
              과학적 근거와 풍부한 경험을 바탕으로 한 전문 관리로 
              당신만의 아름다움을 완성해 보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="btn-secondary"
              >
                서비스 자세히 보기
              </a>
              <a
                href="#contact"
                className="btn-primary"
              >
                전문가 상담받기
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About