'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: '서비스', href: '#services' },
    { name: '소개', href: '#about' },
    { name: '갤러리', href: '#gallery' },
    { name: '가격', href: '#pricing' },
    { name: '예약/문의', href: '#contact' }
  ];

  const services = [
    '황금비율 안면비대칭관리',
    '골반균형코어 체형교정',
    '피부 디톡스 관리',
    '해초 스피쿨리물샷',
    '작은얼굴 미백관리'
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: '전화',
      value: '0507-1447-3778',
      link: 'tel:0507-1447-3778'
    },
    {
      icon: MapPin,
      label: '주소',
      value: '경기 고양시 덕양구 화정로 53 새롬프라자 8층',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      label: '운영시간',
      value: '평일 10:00 - 21:00',
      link: null
    },
    {
      icon: MessageCircle,
      label: '카카오톡',
      value: '이아소에스테틱',
      link: 'https://pf.kakao.com'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://facebook.com',
      color: 'hover:text-blue-500'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://instagram.com',
      color: 'hover:text-pink-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      link: 'https://youtube.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">이</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">이아소에스테틱</h3>
                  <p className="text-sm text-gray-400">24년 경력 전문가</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                2016년부터 고양시 화정에서 시작된 이아소에스테틱은 개인별 맞춤 케어로 건강한 아름다움을 선사합니다.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">바로가기</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">주요 서비스</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">연락처</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-300 text-sm">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                <p>&copy; 2024 이아소에스테틱. All rights reserved.</p>
                <p className="mt-1">
                  사업자등록번호: 000-00-00000 | 대표: 이아소 | 
                  경기 고양시 덕양구 화정로 53 새롬프라자 8층
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  개인정보처리방침
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  이용약관
                </Link>
                
                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-primary-500 to-rose-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <motion.div
          className="text-center py-4 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <p className="text-xs text-gray-500 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              <span>by Professional Team</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;