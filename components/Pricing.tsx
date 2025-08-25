'use client'

import { motion } from 'framer-motion'
import { Award, ArrowRight } from 'lucide-react'

type ServiceItem = { name: string; price: number };

const Pricing = () => {
  const services: ServiceItem[] = [
    { name: '해초(스피큘니들샷 순도 99%)소프트', price: 100000 },
    { name: '해초(스피큘니들샷 순도 99%)딥', price: 200000 },
    { name: '두피탈모관리', price: 110000 },
    { name: '작은얼굴, 미백관리 1회', price: 66000 },
    { name: '작은얼굴, 미백관리 4회', price: 220000 },
    { name: '윤곽경락관리 1회', price: 88000 },
    { name: '피부속건조, 시술후재생, 민감,홍조관리', price: 77000 },
    { name: '황금비율 안면비대칭관리', price: 100000 },
    { name: '동안얼굴 - 주름,탄력,볼륨관리', price: 130000 },
    { name: '등드름 셀큐라스피큘필링', price: 88000 },
    { name: '등(후면) - 통증,체형,슬리밍관리', price: 99000 },
    { name: '다리 부종,셀룰 O,X다리(전+후면)', price: 99000 },
    { name: '디톡스,림프순환 EMS 전신다이어트', price: 180000 },
    { name: '맵시라인 체형관리 (AX슬리밍)', price: 250000 },
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

        {/* Services List */}
        <div className="card p-6 md:p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={item.name}
                className="border-b border-dotted border-gray-300 pb-3 flex items-baseline justify-between"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 7) * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-800 text-sm md:text-base pr-3">{item.name}</span>
                <span className="text-secondary-800 font-semibold text-sm md:text-base">
                  {item.price.toLocaleString()}원
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-4">표기 금액은 1회 기준이며, 프로그램 특성에 따라 시간이 상이할 수 있습니다.</div>
        </div>

        {/* 안내 문구 자리(추가 서비스 섹션 대체) */}

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
            {[
              '첫 상담 100% 무료',
              '만족하지 않으면 100% 환불',
              '무이자 할부 가능',
              '가족 추천 할인',
              '정기 고객 추가 혜택',
            ].map((benefit, index) => (
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