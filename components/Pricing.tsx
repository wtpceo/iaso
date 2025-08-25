'use client'

import { motion } from 'framer-motion'
import { Check, Star, Crown, Gift, Clock, Users, Award, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const pricingPlans = [
    {
      name: '단일 관리',
      subtitle: '개별 프로그램',
      icon: Star,
      price: '150,000',
      originalPrice: '180,000',
      period: '회당',
      description: '원하시는 단일 관리 프로그램을 선택하여 집중 케어',
      features: [
        '개인별 맞춤 상담',
        '전문가 1:1 관리',
        '고품질 제품 사용',
        '관리 후 홈케어 가이드',
        '24시간 전화 상담',
      ],
      popular: false,
      color: 'pink'
    },
    {
      name: '프리미엄 패키지',
      subtitle: '3대 핵심 관리',
      icon: Crown,
      price: '1,200,000',
      originalPrice: '1,800,000',
      period: '3개월',
      description: '3가지 핵심 관리를 통합한 종합 뷰티 솔루션',
      features: [
        '황금비율 안면비대칭관리 (10회)',
        'EXbody 체형교정 (12회)',
        '피부 디톡스 관리 (8회)',
        '개인별 맞춤 관리 계획',
        '전담 전문가 배정',
        '진행 상황 정기 체크',
        '관리 결과 보고서',
        '평생 애프터케어',
      ],
      popular: true,
      color: 'rose',
      badge: '가장 인기'
    },
    {
      name: 'VIP 멤버십',
      subtitle: '최고급 프리미엄',
      icon: Gift,
      price: '2,400,000',
      originalPrice: '3,600,000',
      period: '6개월',
      description: '최상의 관리 경험과 개인별 맞춤 서비스',
      features: [
        '프리미엄 패키지 2배 관리',
        '월 2회 무료 보완 관리',
        '프리미엄 제품 무제한 사용',
        '개인 전용 관리실',
        '24/7 전용 상담 라인',
        '생활 습관 컨설팅',
        '정기 건강 체크업',
        '특별 이벤트 우선 초대',
        '가족 할인 혜택',
      ],
      popular: false,
      color: 'purple'
    }
  ]

  const addOns = [
    {
      name: '홈케어 키트',
      description: '전문가가 추천하는 맞춤 홈케어 제품',
      price: '120,000',
      icon: Gift
    },
    {
      name: '추가 관리 세션',
      description: '필요에 따른 개별 관리 추가',
      price: '130,000',
      icon: Clock
    },
    {
      name: '전문가 상담',
      description: '라이프스타일 및 뷰티 전문 상담',
      price: '50,000',
      icon: Users
    }
  ]

  const benefits = [
    '첫 상담 100% 무료',
    '만족하지 않으면 100% 환불',
    '24개월 무이자 할부 가능',
    '가족 추천 할인 혜택',
    '정기 고객 추가 할인'
  ]

  return (
    <section id="pricing" className="section bg-white">
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
            <span className="text-sm font-medium text-primary-700">투명한 가격 정책</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            합리적인 가격으로 만나는
            <span className="text-gradient block">프리미엄 뷰티 서비스</span>
          </h2>
          <p className="text-body">
            개인의 필요와 예산에 맞는 다양한 옵션을 제공합니다. 
            투명한 가격 정책과 다양한 혜택으로 부담 없이 시작하세요.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'card-gradient scale-105 border-2 border-primary-300 shadow-xl shadow-primary-200/50' 
                  : 'card hover:border-primary-200 transition-all duration-300'
              } p-8 text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: plan.popular ? 1.05 : 1.02, 
                y: -5 
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary-300/50"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                  plan.color === 'pink'
                    ? 'from-primary-500 to-primary-600'
                    : plan.color === 'rose'
                    ? 'from-primary-600 to-secondary-600'
                    : 'from-accent-500 to-accent-600'
                } flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <plan.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Plan Name */}
              <h3 className="heading-tertiary mb-2">{plan.name}</h3>
              <p className={`text-sm font-medium mb-6 ${
                plan.color === 'pink'
                  ? 'text-primary-600'
                  : plan.color === 'rose'
                  ? 'text-primary-700'
                  : 'text-accent-600'
              }`}>
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-sm text-gray-400 line-through">
                    {plan.originalPrice.toLocaleString()}원
                  </span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    plan.color === 'pink'
                      ? 'bg-primary-100 text-primary-600'
                      : plan.color === 'rose'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-accent-100 text-accent-600'
                  }`}>
                    {Math.round((1 - parseInt(plan.price.replace(/,/g, '')) / parseInt(plan.originalPrice.replace(/,/g, ''))) * 100)}% 할인
                  </span>
                </div>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-1">원</span>
                  <span className="text-sm text-gray-400 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-8">{plan.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.color === 'pink'
                        ? 'bg-primary-100'
                        : plan.color === 'rose'
                        ? 'bg-primary-100'
                        : 'bg-accent-100'
                    }`}>
                      <Check className={`h-3 w-3 ${
                        plan.color === 'pink'
                          ? 'text-primary-600'
                          : plan.color === 'rose'
                          ? 'text-primary-600'
                          : 'text-accent-600'
                      }`} />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className={`w-full ${
                  plan.popular 
                    ? 'btn-primary shadow-lg shadow-primary-300/50' 
                    : plan.color === 'pink'
                    ? 'btn-secondary text-primary-600 bg-primary-50 border-primary-200 hover:bg-primary-100'
                    : plan.color === 'purple'
                    ? 'btn-secondary text-accent-600 bg-accent-50 border-accent-200 hover:bg-accent-100'
                    : 'btn-secondary'
                } justify-center group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.popular ? '인기 패키지 선택' : '프로그램 선택'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-tertiary mb-4">추가 서비스</h3>
            <p className="text-body max-w-2xl mx-auto">
              기본 프로그램과 함께 선택할 수 있는 다양한 추가 서비스로 
              더욱 완벽한 관리를 경험해 보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{addon.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                <div className="text-xl font-bold text-primary-600">
                  {addon.price.toLocaleString()}원
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="card-gradient p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-tertiary mb-4">특별 혜택</h3>
            <p className="text-body">
              이아소 에스테틱만의 특별한 혜택으로 더욱 합리적으로 이용하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="card max-w-3xl mx-auto p-8"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              어떤 프로그램이 나에게 맞을까요?
            </h3>
            <p className="text-body mb-6">
              전문가와의 무료 상담을 통해 개인별 맞춤 프로그램을 
              추천받고 최적의 솔루션을 찾아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary"
              >
                무료 상담 신청
              </a>
              <a
                href="tel:0507-1447-3778"
                className="btn-secondary"
              >
                전화 문의하기
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing