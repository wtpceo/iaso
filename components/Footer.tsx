'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, ArrowUp, Heart, Star, Shield, Award } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: '홈', href: '#home' },
    { name: '서비스', href: '#services' },
    { name: '소개', href: '#about' },
    { name: '갤러리', href: '#gallery' },
    { name: '가격', href: '#pricing' },
    { name: '연락처', href: '#contact' }
  ]

  const services = [
    { name: '황금비율 안면비대칭관리', href: '#services' },
    { name: 'EXbody 체형교정', href: '#services' },
    { name: '피부 디톡스 관리', href: '#services' },
    { name: '종합 패키지', href: '#pricing' }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: '경기 고양시 덕양구 화정로 53 새롬프라자 8층'
    },
    {
      icon: Phone,
      text: '0507-1447-3778'
    },
    {
      icon: Clock,
      text: '매일 10:00 ~ 21:00 (연중무휴)'
    },
    {
      icon: Mail,
      text: 'info@iaso-aesthetic.com'
    }
  ]

  const achievements = [
    { icon: Award, text: '24년 전문 경력' },
    { icon: Star, text: '10년 운영 전통' },
    { icon: Shield, text: '10,000+ 고객 만족' },
    { icon: Heart, text: '4.9/5 고객 평점' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gradient-to-br from-accent-900 via-accent-800 to-accent-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Main Footer */}
      <div className="relative z-10">
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-lg">이</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">이아소 에스테틱</h3>
                  <p className="text-sm text-gray-400">10년 전통 · 24년 경력</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                24년 경력의 전문가가 제공하는 과학적이고 체계적인 뷰티 솔루션으로 
                당신만의 아름다움을 완성해 드립니다.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.text}
                    className="flex items-center space-x-2 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <achievement.icon className="h-4 w-4 text-primary-400" />
                    <span className="text-gray-300">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-6 text-primary-300">빠른 링크</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors text-sm block py-1 hover:translate-x-1 transform transition-transform duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-6 text-primary-300">서비스</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors text-sm block py-1 hover:translate-x-1 transform transition-transform duration-200"
                    >
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-6 text-primary-300">연락처 정보</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.text}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <info.icon className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {info.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="tel:0507-1447-3778"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-sm font-semibold text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  지금 바로 상담받기
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-700 my-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} 이아소 에스테틱. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <span>사업자등록번호: 443-15-00287</span>
                <span>|</span>
                <span>대표: 이아소에스테틱</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-1 text-sm text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="h-4 w-4 text-primary-400" />
                <span>Made with love in Goyang</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg z-50 hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
    </footer>
  )
}

export default Footer