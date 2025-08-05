// src/app/testimonials/constants.ts

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I've had the pleasure of working with Shaheem, and he's been an invaluable part of our team. His expertise in Django, problem-solving mindset, and dedication to writing clean, efficient code make him a standout developer. Beyond his technical skills, he's a great team player who's always proactive and eager to improve.",
    author: "Shahin Abdulla",
    position: "Co-Founder and CPO",
    company: "Agua India",
  },
  {
    quote:
      "Shaheem has a sharp grasp of product vision and executes with precision. He builds scalable, maintainable systems that align perfectly with business needs. His proactive communication, speed, and sense of ownership make him a key contributor to our success and a strong asset to any product-driven team.",
    author: "Muhammed Shajar",
    position: "Co-Founder & CEO",
    company: "Agua India",
  },
  //   lonest testimonial for testing
//   {
//     quote:
//       "Working with Shaheem has been an absolute pleasure. His technical expertise is matched only by his dedication to delivering high-quality work. He consistently goes above and beyond to ensure that our projects are not only completed on time but also exceed our expectations. Shaheem's ability to quickly grasp complex concepts and translate them into effective solutions has been invaluable to our team. His proactive approach to problem-solving and his willingness to take on new challenges make him a standout developer. Beyond his technical skills, Shaheem is a great team player who fosters a positive and collaborative work environment. I highly recommend him to any organization looking for a talented and reliable developer who can make a significant impact.",
//     author: "John Doe",
//     position: "Senior Developer",
//     company: "Tech Solutions",
//   },
];
