import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Starry background component with parallax and twinkling effects
export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll events for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Create starry background effect using canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars array
    const starsCount = 200;
    const stars = Array.from({ length: starsCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.01,
      direction: Math.random() > 0.5 ? 1 : -1,
      parallaxSpeed: Math.random() * 0.5,
    }));
    
    // Animation loop
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with twinkling effect
      stars.forEach(star => {
        // Update star opacity for twinkling effect
        star.opacity += star.twinkleSpeed * star.direction;
        
        // Reverse direction when opacity limits are reached
        if (star.opacity > 1) {
          star.opacity = 1;
          star.direction = -1;
        } else if (star.opacity < 0.2) {
          star.opacity = 0.2;
          star.direction = 1;
        }
        
        // Apply parallax effect based on scroll position
        const scrollParallax = window.scrollY * star.parallaxSpeed * 0.01;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y + scrollParallax, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animateStars);
    };
    
    animateStars();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://lf3-static.bytednsdoc.com/obj/eden-cn/0077eh7fd/pngtree-pure-black-starry-minimalist-dreamy-business-background-picture-image_913719.jpg)',
          filter: isScrolled ? 'brightness(0.7)' : 'brightness(1)'
        }}
      />
      
      {/* Semi-transparent overlay */}  
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Canvas for star twinkling effect */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};