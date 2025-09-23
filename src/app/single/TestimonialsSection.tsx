"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "../testimonials/constants";

// Testimonials Section Component
const TestimonialsSection = () => {
	return (
		<section id="testimonials" className="py-12 md:py-16 px-4 md:px-6">
			<div className="container max-w-4xl mx-auto">
				<div className="space-y-6 md:space-y-8">
					<div className="text-center space-y-2 md:space-y-4">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Testimonials</h2>
						<p className="text-sm md:text-base text-muted-foreground">
							What colleagues and clients say about working with me.
						</p>
					</div>

					<Carousel
						className="w-full"
						opts={{
							loop: true,
						}}
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index}>
									<Card>
										<CardContent className="p-4 md:p-6">
											<div className="space-y-3 md:space-y-4">
												<blockquote className="text-sm md:text-lg leading-relaxed">
													"{testimonial.quote}"
												</blockquote>
												<div className="border-t pt-3 md:pt-4">
													<div className="font-semibold text-sm md:text-base">
														{testimonial.author}
													</div>
													<div className="text-xs md:text-sm text-muted-foreground">
														{testimonial.position} at {testimonial.company}
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="-left-8 sm:-left-12" />
						<CarouselNext className="-right-8 sm:-right-12" />
					</Carousel>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
