// src/components/homePage/TestimonialsSection.tsx

"use client";

import { testimonials } from "@/app/testimonials/constants";
import TestimonialModal from "@/components/TestimonialModal";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTestimonial, setModalTestimonial] = useState(testimonials[0]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [clampedStates, setClampedStates] = useState<boolean[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Function to check if text is clamped
  const isTextClamped = useCallback((element: HTMLElement | null) => {
    if (!element) return false;
    // Add a small tolerance to account for subpixel rendering
    return element.scrollHeight > element.clientHeight + 1;
  }, []);

  // Function to update clamped states for all testimonials
  const updateClampedStates = useCallback(() => {
    const newClampedStates = textRefs.current.map((ref) => isTextClamped(ref));
    setClampedStates(newClampedStates);
  }, [isTextClamped]);

  // Update clamped states on mount and resize
  useEffect(() => {
    updateClampedStates();

    const handleResize = () => {
      updateClampedStates();
    };

    window.addEventListener("resize", handleResize);
    // Use a slight delay to ensure DOM is fully rendered
    const timer = setTimeout(updateClampedStates, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [updateClampedStates]);

  // Update clamped states when testimonials change
  useEffect(() => {
    const timer = setTimeout(updateClampedStates, 100);
    return () => clearTimeout(timer);
  }, [currentTestimonial, updateClampedStates]);

  // Navigation functions for testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Functions to handle modal
  const openModal = (testimonial: (typeof testimonials)[0]) => {
    setModalTestimonial(testimonial);
    setIsModalOpen(true);
    setIsPaused(true); // Pause auto-rotation when modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPaused(false); // Resume auto-rotation when modal closes
  };

  // Auto-rotate testimonials every 10 seconds with elapsed time tracking
  useEffect(() => {
    if (isPaused || isModalOpen) return; // Don't rotate if paused or modal is open

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= 10000) {
          nextTestimonial();
          return 0;
        }
        return prev + 100;
      });
    }, 100); // Update every 100ms for smooth tracking

    return () => clearInterval(interval);
  }, [isPaused, isModalOpen]);

  // Reset elapsed time when testimonial changes manually
  useEffect(() => {
    setElapsedTime(0);
  }, [currentTestimonial]);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4">
              <Quote className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">
                Testimonials
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mb-2 md:mb-4">
              What Leadership Says
            </h2>
            <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-xl md:max-w-2xl mx-auto px-4">
              Hear from the leaders who've worked closely with me on building
              impactful products
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-200 hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-200 hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Testimonials Container */}
            <div className="mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-0 md:px-8 lg:px-12">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out ${
                      index === currentTestimonial
                        ? "opacity-100 transform translate-x-0 scale-100 relative"
                        : "opacity-0 transform translate-x-4 md:translate-x-8 scale-95 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    {/* Testimonial Card */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-white/20 shadow-2xl flex flex-col overflow-hidden relative">
                      {/* Play/Pause Button - Top Right Corner */}
                      <button
                        onClick={togglePause}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label={
                          isPaused ? "Resume slideshow" : "Pause slideshow"
                        }
                      >
                        {isPaused ? (
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                        ) : (
                          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        )}
                      </button>

                      {/* Quote Icon */}
                      <div className="flex justify-center mb-4 md:mb-6 flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <Quote className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-center flex-1 flex items-center justify-center px-2 sm:px-4 mb-6 md:mb-8">
                        <div className="max-w-full">
                          <p
                            ref={(el) => {
                              textRefs.current[index] = el;
                            }}
                            className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl leading-relaxed text-white/95 font-light max-w-full line-clamp-5"
                          >
                            "{testimonial.quote}"
                          </p>
                          {/* Show "read more" link if text is clamped - only for current testimonial */}
                          {index === currentTestimonial &&
                            clampedStates[index] && (
                              <button
                                onClick={() => openModal(testimonial)}
                                className="mt-2 text-white/80 hover:text-white text-sm underline transition-colors duration-200 font-medium"
                              >
                                read more
                              </button>
                            )}
                        </div>
                      </blockquote>

                      {/* Author Info */}
                      <div className="text-center flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                          <span className="text-lg md:text-xl lg:text-2xl font-bold">
                            {testimonial.author
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="font-semibold text-base md:text-lg lg:text-xl text-white mb-1">
                          {testimonial.author}
                        </div>
                        <div className="text-white/70 text-xs md:text-sm">
                          {testimonial.position}
                        </div>
                        <div className="text-white/60 text-xs md:text-sm font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center mt-6 md:mt-8">
              <div className="flex space-x-1.5 md:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="group relative"
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    <div
                      className={`w-8 md:w-12 h-1 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-white"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                    {index === currentTestimonial && (
                      <div className="absolute inset-0 w-8 md:w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Testimonial Counter */}
            <div className="text-center mt-3 md:mt-4">
              <span className="text-white/60 text-xs md:text-sm">
                {currentTestimonial + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        testimonial={modalTestimonial}
      />
    </section>
  );
}
