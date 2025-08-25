'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', count: 12 },
    { id: 'facial', name: '안면 관리', count: 4 },
    { id: 'body', name: '체형 교정', count: 4 },
    { id: 'skin', name: '피부 관리', count: 4 },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'facial',
      title: '황금비율 안면관리',
      description: '셀큐라스피큘을 활용한 안면 비대칭 개선',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    },
    {
      id: 2,
      category: 'body',
      title: 'EXbody 체형분석',
      description: '과학적 데이터 기반 체형 교정',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 3,
      category: 'skin',
      title: '피부 디톡스 관리',
      description: '아토피, 건선 전문 케어',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    },
    {
      id: 4,
      category: 'facial',
      title: '림프시스템 활성화',
      description: '얼굴 윤곽 개선 및 리프팅',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 5,
      category: 'body',
      title: '골반균형 교정',
      description: '코어 근력 강화 및 자세 교정',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    },
    {
      id: 6,
      category: 'skin',
      title: '안티에이징 프로그램',
      description: '피부 재생 및 탄력 개선',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 7,
      category: 'facial',
      title: '작은얼굴 미백관리',
      description: '얼굴 라인 정리 및 미백 효과',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    },
    {
      id: 8,
      category: 'body',
      title: '전신 밸런스 케어',
      description: '체형 불균형 종합 개선',
      image: 'https://images.unsplash.com/photo-1506629905607-62d8a25428f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 9,
      category: 'skin',
      title: '민감성 피부 진정',
      description: '알러지 피부 전문 관리',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    },
    {
      id: 10,
      category: 'facial',
      title: '황금비율 분석',
      description: '개인별 맞춤 얼굴 분석',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 11,
      category: 'body',
      title: '맞춤형 운동 솔루션',
      description: '개인별 체형에 맞는 운동법',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 12,
      category: 'skin',
      title: '피부 장벽 강화',
      description: '건강한 피부 톤 개선',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Camera className="w-4 h-4" />
            <span>관리 사례 갤러리</span>
          </motion.div>

          <h2 className="heading-2 text-gray-900 mb-6">
            실제 관리 사례로 보는
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-rose-600 bg-clip-text text-transparent">
              이아소에스테틱의 효과
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            10년간 5,000명 이상의 고객들이 경험한
            <br />
            전문적이고 체계적인 관리 결과를 확인해보세요.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(index)}
                layout
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Before/After Badge */}
                  {item.beforeAfter && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Before/After
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>

                  {/* Play Icon for Videos */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="relative aspect-[4/5] max-h-[80vh] rounded-2xl overflow-hidden">
                  <Image
                    src={filteredItems[selectedImage].image}
                    alt={filteredItems[selectedImage].title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image Info */}
                <div className="bg-white rounded-b-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {filteredItems[selectedImage].description}
                  </p>
                  {filteredItems[selectedImage].beforeAfter && (
                    <div className="mt-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-rose-500 text-white">
                        Before/After 사례
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-rose-500 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                나만의 변화 스토리를 시작해보세요
              </h3>
              <p className="text-primary-100 mb-6">
                전문가 상담을 통해 개인별 맞춤 관리 계획을 세워드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0507-1447-3778"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                >
                  상담 예약하기
                </a>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  온라인 문의
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;