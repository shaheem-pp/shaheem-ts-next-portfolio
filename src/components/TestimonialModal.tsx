// src/components/TestimonialModal.tsx

"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Quote, X } from "lucide-react";
import { Fragment } from "react";

import { Testimonial } from "@/app/testimonials/constants";

interface TestimonialModalProps {
  isOpen: boolean;
  closeModal: () => void;
  testimonial: Testimonial;
}

export default function TestimonialModal({
  isOpen,
  closeModal,
  testimonial,
}: TestimonialModalProps) {
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 text-left align-middle shadow-xl transition-all">
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
                </div>

                {/* Content */}
                <div className="px-6 pb-6 text-white">
                  {/* Quote Text */}
                  <blockquote className="text-center mb-8">
                    <p className="text-base md:text-lg leading-relaxed text-white/95 font-light whitespace-pre-line">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center">
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
