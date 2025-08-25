'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  DollarSign, 
  CheckCircle, 
  Star, 
  Phone, 
  Calendar,
  Gift,
  Sparkles,
  Heart,
  Users,
  Clock
} from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      id: 1,
      name: "해초 스피쿨리물샷",
      category: "안면관리",
      description: "셀큐라스피큘 전문 관리로 황금비율 안면 케어",
      price: {
        single: "100,000",
        package: "200,000"
      },
      duration: "90분",
      features: [
        "셀큐라스피큘 적용",
        "림프시스템 활성화",
        "얼굴 윤곽 개선",
        "비대칭 교정",
        "애프터케어 포함"
      ],
      popular: false,
      gradient: "from-primary-500 to-rose-500",
      bgColor: "bg-primary-50"
    },
    {
      id: 2,
      name: "작은얼굴 미백관리",
      category: "안면관리",
      description: "얼굴 라인 정리와 미백 효과를 동시에",
      price: {
        single: "66,000",
        package: "220,000"
      },
      packageInfo: "4회 패키지",
      duration: "80분",
      features: [
        "얼굴 라인 정리",
        "미백 관리",
        "탄력 개선",
        "모공 케어",
        "홈케어 가이드"
      ],
      popular: true,
      gradient: "from-rose-500 to-primary-500",
      bgColor: "bg-rose-50"
    },
    {
      id: 3,
      name: "황금비율 관리",
      category: "전문관리",
      description: "개인별 황금비율 분석을 통한 맞춤 관리",
      price: {
        single: "100,000",
        package: null
      },
      duration: "100분",
      features: [
        "황금비율 정밀 분석",
        "개인별 맞춤 플랜",
        "전문가 1:1 관리",
        "진행상황 체크",
        "결과 보고서 제공"
      ],
      popular: false,
      gradient: "from-primary-600 to-rose-400",
      bgColor: "bg-primary-50"
    },
    {
      id: 4,
      name: "두피탈모관리",
      category: "헤어케어",
      description: "두피 건강과 탈모 예방을 위한 전문 케어",
      price: {
        single: "110,000",
        package: null
      },
      duration: "75분",
      features: [
        "두피 상태 정밀 진단",
        "탈모 예방 관리",
        "모근 강화 케어",
        "혈액순환 개선",
        "홈케어 솔루션"
      ],
      popular: false,
      gradient: "from-rose-600 to-primary-600",
      bgColor: "bg-rose-50"
    },
    {
      id: 5,
      name: "체형관리",
      category: "바디케어",
      description: "EXbody 장비를 활용한 과학적 체형 교정",
      price: {
        single: "250,000",
        package: null
      },
      duration: "120분",
      features: [
        "EXbody 체형 분석",
        "골반균형 교정",
        "코어 근력 강화",
        "개인별 운동 솔루션",
        "정기 진척도 측정"
      ],
      popular: false,
      gradient: "from-primary-500 to-rose-600",
      bgColor: "bg-primary-50"
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: "신규 고객 혜택",
      description: "첫 방문 고객 10% 할인"
    },
    {
      icon: Users,
      title: "단체 할인",
      description: "3인 이상 동반시 15% 할인"
    },
    {
      icon: Calendar,
      title: "정기 관리",
      description: "월 정기 관리시 20% 할인"
    },
    {
      icon: Heart,
      title: "무료 상담",
      description: "전문가 1:1 맞춤 상담"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white" ref={ref}>
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
            <DollarSign className="w-4 h-4" />
            <span>합리적인 가격, 최고의 품질</span>
          </motion.div>

          <h2 className="heading-2 text-gray-900 mb-6">
            투명하고 합리적인
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-rose-600 bg-clip-text text-transparent">
              프리미엄 관리 가격
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            24년 경력의 전문성과 최신 장비로 제공하는
            <br />
            가치 있는 투자, 합리적인 가격의 프리미엄 케어
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.bgColor} border ${
                plan.popular 
                  ? 'border-primary-200 ring-2 ring-primary-500 ring-opacity-20 transform scale-105' 
                  : 'border-gray-100 hover:border-primary-200'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>인기</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-4`}>
                  <Sparkles className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-sm text-primary-600 font-medium bg-primary-100 px-3 py-1 rounded-full inline-block mb-3">
                  {plan.category}
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{plan.duration}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {parseInt(plan.price.single).toLocaleString()}
                    </span>
                    <span className="text-lg text-gray-600">원</span>
                  </div>
                  <div className="text-sm text-gray-500">1회 기준</div>
                  
                  {plan.price.package && (
                    <div className="mt-3 p-3 bg-white/50 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 text-primary-600">
                        <span className="text-xl font-bold">
                          {parseInt(plan.price.package).toLocaleString()}
                        </span>
                        <span className="text-sm">원</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {plan.packageInfo || "패키지 할인"}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-rose-500 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 hover:border-primary-300'
                }`}
              >
                상담 및 예약
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              더 많은 혜택과 할인
            </h3>
            <p className="text-lg text-gray-600">
              다양한 할인 혜택으로 더욱 합리적인 가격에 프리미엄 케어를 받아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-rose-500 rounded-xl text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">결제 방법은 어떻게 되나요?</h4>
                <p className="text-gray-600 text-sm">현금, 카드, 계좌이체 모두 가능하며, 무이자 할부도 지원합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">패키지 유효기간이 있나요?</h4>
                <p className="text-gray-600 text-sm">패키지는 구매일로부터 6개월간 유효하며, 연장 가능합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">취소 및 환불 정책은?</h4>
                <p className="text-gray-600 text-sm">시술 24시간 전 취소시 100% 환불, 이후에는 정책에 따라 차등 적용됩니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">관리 후 주의사항이 있나요?</h4>
                <p className="text-gray-600 text-sm">시술별 맞춤 애프터케어 가이드를 제공하여 최적의 효과를 유지합니다.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-rose-500 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                무료 상담으로 시작해보세요
              </h3>
              <p className="text-primary-100 mb-6">
                전문가와의 1:1 상담을 통해 개인별 맞춤 관리 계획과 정확한 비용을 안내받으세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0507-1447-3778"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>지금 전화상담</span>
                </a>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>온라인 예약</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;