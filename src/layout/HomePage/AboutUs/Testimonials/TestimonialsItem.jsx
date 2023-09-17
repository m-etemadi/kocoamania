function TestimonialsItem({ testimonial }) {
  return (
    <p>
      {testimonial.comment} <br />
      <span className="name">{testimonial.fullName}</span>
    </p>
  );
}

export default TestimonialsItem;
