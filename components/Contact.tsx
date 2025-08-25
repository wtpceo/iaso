'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send, User, MessageSquare, Calendar, Check, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: '위치',
      content: '경기 고양시 덕양구 화정로 53',
      detail: '새롬프라자 8층',
      action: '길찾기',
      link: 'https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%ED%99%94%EC%A0%95%EB%A1%9C%2053'
    },
    {
      icon: Phone,
      title: '전화번호',
      content: '0507-1447-3778',
      detail: '예약 및 상담 문의',
      action: '전화걸기',
      link: 'tel:0507-1447-3778'
    },
    {
      icon: Clock,
      title: '운영시간',
      content: '매일 오전 10시 ~ 밤 9시',
      detail: '연중무휴 (공휴일 포함)',
      action: null,
      link: null
    },
    {
      icon: Mail,
      title: '이메일',
      content: 'info@iaso-aesthetic.com',
      detail: '온라인 상담 및 문의',
      action: '메일보내기',
      link: 'mailto:info@iaso-aesthetic.com'
    }
  ]

  const services = [
    '황금비율 안면비대칭관리',
    'EXbody 체형교정',
    '피부 디톡스 관리',
    '종합 패키지 상담',
    '기타 문의사항'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section bg-secondary-50">
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
            <Calendar className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">예약 및 상담</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            지금 바로 시작하세요
            <span className="text-gradient block">무료 상담 예약</span>
          </h2>
          <p className="text-body">
            전문가와의 1:1 상담을 통해 개인별 맞춤 솔루션을 제안해 드립니다. 
            부담 없이 연락주세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="heading-tertiary mb-8">연락처 정보</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="card p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600 font-medium">{info.content}</p>
                        <p className="text-sm text-gray-500 mb-3">{info.detail}</p>
                        {info.action && info.link && (
                          <a
                            href={info.link}
                            target={info.title === '위치' ? '_blank' : '_self'}
                            rel={info.title === '위치' ? 'noopener noreferrer' : ''}
                            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {info.action}
                            {info.title === '위치' && <ExternalLink className="ml-1 h-3 w-3" />}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-800 mb-4">오시는 길</h4>
              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">지도 영역</p>
                  <p className="text-xs">새롬프라자 8층</p>
                </div>
              </div>
              <a
                href="https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%ED%99%94%EC%A0%95%EB%A1%9C%2053"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                네이버 지도에서 보기
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              {!isSubmitted ? (
                <>
                  <h3 className="heading-tertiary mb-6">상담 예약 신청</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          성함 *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-colors"
                            placeholder="성함을 입력해 주세요"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          연락처 *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-colors"
                            placeholder="010-0000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        이메일
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
                          placeholder="이메일을 입력해 주세요 (선택)"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        관심 있는 서비스
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-colors"
                      >
                        <option value="">서비스를 선택해 주세요</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        문의사항
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-colors resize-none"
                          placeholder="궁금한 점이나 특별히 신경 쓰고 싶은 부분이 있다면 알려주세요"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full btn-primary justify-center group"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          전송 중...
                        </>
                      ) : (
                        <>
                          상담 예약 신청하기
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Check className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    상담 신청이 완료되었습니다!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    빠른 시일 내에 전문 상담사가 연락드리겠습니다. 
                    소중한 시간 내어주셔서 감사합니다.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500">
                    <p>📞 급한 문의사항은 전화로 연락 주세요</p>
                    <p className="font-semibold text-primary-600">0507-1447-3778</p>
                  </div>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn-secondary"
                    whileHover={{ scale: 1.05 }}
                  >
                    새로운 상담 신청
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Contact */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-gradient p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              바로 통화를 원하시나요?
            </h3>
            <p className="text-body mb-6">
              전문 상담사가 직접 안내해 드립니다. 
              운영시간 내 언제든지 편하게 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0507-1447-3778"
                className="btn-primary group"
              >
                <Phone className="mr-2 h-4 w-4" />
                지금 바로 전화하기
                <span className="ml-2 text-sm opacity-90">0507-1447-3778</span>
              </a>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>매일 10:00 ~ 21:00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact