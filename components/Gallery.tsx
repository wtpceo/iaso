'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Camera, Eye, Heart } from 'lucide-react'
import Image from 'next/image'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: '전체', count: 12 },
    { id: 'facial', name: '안면관리', count: 4 },
    { id: 'body', name: '체형교정', count: 4 },
    { id: 'skin', name: '피부관리', count: 4 },
  ]

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'facial',
      title: '황금비율 안면관리',
      description: '자연스러운 얼굴 균형으로 완성된 아름다운 변화',
      likes: 24
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'skin',
      title: '디톡스 피부관리',
      description: '깊은 정화를 통한 투명하고 건강한 피부',
      likes: 31
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'body',
      title: 'EXbody 체형교정',
      description: '골반 균형으로 완성된 아름다운 체형 라인',
      likes: 18
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'facial',
      title: '전문 안면 케어',
      description: '개인별 맞춤 관리로 완성된 자연스러운 아름다움',
      likes: 27
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'skin',
      title: '고급 스킨케어',
      description: '프리미엄 제품으로 완성된 윤기 있는 피부',
      likes: 35
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'body',
      title: '전신 밸런스 케어',
      description: '전체적인 균형 잡힌 아름다운 실루엣',
      likes: 22
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'facial',
      title: '리프팅 케어',
      description: '탄력 있고 젊어 보이는 얼굴 라인',
      likes: 29
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'skin',
      title: '브라이트닝 케어',
      description: '맑고 환한 피부톤으로 완성된 자신감',
      likes: 33
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'body',
      title: '코어 강화 프로그램',
      description: '건강한 코어 근육으로 완성된 체형',
      likes: 20
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'facial',
      title: '미세 관리',
      description: '세밀한 터치로 완성된 완벽한 피부',
      likes: 26
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'skin',
      title: '재생 케어',
      description: '건강한 피부 재생으로 되찾은 젊음',
      likes: 30
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'body',
      title: '라인 교정',
      description: '아름다운 바디 라인으로 완성된 자신감',
      likes: 25
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            <Camera className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">관리 결과 갤러리</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            실제 고객들의
            <span className="text-gradient block">아름다운 변화 스토리</span>
          </h2>
          <p className="text-body">
            이아소 에스테틱에서 완성된 고객들의 실제 관리 사례와 
            뷰티 변화 과정을 확인해 보세요.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-200'
                  : 'bg-white text-gray-600 hover:bg-secondary-50 hover:text-primary-600 border border-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-transparent hover:border-primary-300 transition-all duration-300">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
                      </div>
                    </div>

                    {/* View Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-primary-50/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-primary-200">
                      <Eye className="h-4 w-4 text-primary-600" />
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          item.category === 'facial' 
                            ? 'bg-primary-500' 
                            : item.category === 'body' 
                            ? 'bg-secondary-500' 
                            : 'bg-accent-500'
                        }`}></div>
                        <span className="text-xs text-gray-500 capitalize">
                          {categories.find(cat => cat.id === item.category)?.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Heart className="h-3 w-3" />
                        <span className="text-xs">{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={filteredItems[selectedImage]?.src}
                    alt={filteredItems[selectedImage]?.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {filteredItems[selectedImage]?.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {filteredItems[selectedImage]?.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Heart className="h-4 w-4" />
                      <span>{filteredItems[selectedImage]?.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              당신도 이런 변화를 경험해 보세요
            </h3>
            <p className="text-body mb-6">
              개인별 맞춤 관리로 완성되는 자연스럽고 아름다운 변화, 
              지금 바로 시작해 보세요.
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              변화 시작하기
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery