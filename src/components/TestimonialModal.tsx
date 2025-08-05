// src/components/TestimonialModal.tsx

"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeft, ChevronRight, Quote, X } from "lucide-react";
import { Fragment, useCallback, useEffect, useState } from "react";

import { Testimonial } from "@/app/testimonials/constants";

interface TestimonialModalProps {
  isOpen: boolean;
  closeModal: () => void;
  testimonial: Testimonial;
  currentIndex: number;
  totalCount: number;
  onNext: () => void;
  onPrevious: () => void;
  onGoTo: (index: number) => void;
}

export default function TestimonialModal({
  isOpen,
  closeModal,
  testimonial,
  currentIndex,
  totalCount,
  onNext,
  onPrevious,
  onGoTo,
}: TestimonialModalProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Wrapper functions to handle transitions
  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    onNext();
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, onNext]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    onPrevious();
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, onPrevious]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || isTransitioning) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isTransitioning, handleNext, handlePrevious]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 text-left align-middle shadow-xl transition-all relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  disabled={isTransitioning}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white transition-transform group-hover:-translate-x-0.5" />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* Header */}
                <div className="relative p-6 text-white">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>

                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Counter */}
                  <div className="text-center">
                    <span className="text-white/60 text-sm">
                      {currentIndex + 1} / {totalCount}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`px-6 pb-6 text-white transition-all duration-300 ${
                    isTransitioning
                      ? "opacity-50 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {/* Quote Text */}
                  <blockquote className="text-center mb-8">
                    <p className="text-base md:text-lg leading-relaxed text-white/95 font-light whitespace-pre-line">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {testimonial.author
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="font-semibold text-xl text-white mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-white/70 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-white/60 text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {Array.from({ length: totalCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => !isTransitioning && onGoTo(index)}
                        disabled={isTransitioning}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed ${
                          index === currentIndex
                            ? "bg-white"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Swipe Hint */}
                  <div className="text-center">
                    <p className="text-white/50 text-xs">
                      Swipe, use arrow keys, or click dots to navigate
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
