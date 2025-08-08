// محسن الأداء للموقع
(function() {
  'use strict';
  
  // تشغيل محسن الأداء بصمت
  
  // تحسين تحميل الصور
  function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // إضافة lazy loading
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // إضافة معالج خطأ
      img.addEventListener('error', function() {
        // يمكن إضافة صورة بديلة هنا
      });
    });
    
  }
  
  // تحسين الطلبات
  function optimizeRequests() {
    // إضافة timeout للطلبات
    const originalFetch = window.fetch;
    
    window.fetch = function(url, options = {}) {
      const timeout = options.timeout || 30000;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      const fetchOptions = {
        ...options,
        signal: controller.signal
      };
      
      return originalFetch(url, fetchOptions)
        .then(response => {
          clearTimeout(timeoutId);
          return response;
        })
        .catch(error => {
          clearTimeout(timeoutId);
          if (error.name === 'AbortError') {
          }
          throw error;
        });
    };
    
  }
  
  // تحسين الذاكرة
  function optimizeMemory() {
    // مسح الـ cache القديم كل 30 دقيقة
    setInterval(() => {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            if (cacheName.includes('old') || cacheName.includes('temp')) {
              caches.delete(cacheName);
            }
          });
        });
      }
    }, 30 * 60 * 1000);
    
  }
  
  // مراقبة الأداء
  function monitorPerformance() {
    // مراقبة وقت التحميل
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      
      // إرسال إحصائيات الأداء (اختياري)
      if (loadTime > 5000) {
      }
    });
    
    // مراقبة استخدام الذاكرة
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
        
        if (usedMB > 100) {
        }
      }, 60000); // كل دقيقة
    }
    
  }
  
  // تحسين التمرير
  function optimizeScrolling() {
    let ticking = false;
    
    function updateScrollPosition() {
      // تحسين أداء التمرير
      ticking = false;
    }
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }, { passive: true });
    
  }
  
  // تحسين اللمس للأجهزة المحمولة
  function optimizeTouch() {
    // إضافة دعم أفضل للمس
    document.addEventListener('touchstart', function() {}, { passive: true });
    document.addEventListener('touchmove', function() {}, { passive: true });
    
  }
  
  // تشغيل جميع التحسينات
  function initializeOptimizations() {
    try {
      optimizeImages();
      optimizeRequests();
      optimizeMemory();
      monitorPerformance();
      optimizeScrolling();
      optimizeTouch();
      
    } catch (error) {
    }
  }
  
  // تشغيل التحسينات عند تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeOptimizations);
  } else {
    initializeOptimizations();
  }
  
  // إضافة دوال للنافذة العامة
  window.montajatiOptimizer = {
    clearCache: function() {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
        }).then(() => {
          location.reload();
        });
      }
    },
    
    getPerformanceInfo: function() {
      const info = {
        loadTime: Math.round(performance.now()),
        navigation: performance.getEntriesByType('navigation')[0],
        resources: performance.getEntriesByType('resource').length
      };
      
      if ('memory' in performance) {
        info.memory = {
          used: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB'
        };
      }
      
      console.table(info);
      return info;
    },
    
    testConnection: function() {
      if (window.testServerConnection) {
        return window.testServerConnection();
      } else {
      }
    }
  };
  
})();

