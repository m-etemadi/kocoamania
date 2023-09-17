import { useApp } from '../../../contexts/AppContext';

function CoursesInfo() {
  const { contactUs } = useApp();
  const classes = contactUs.classes;

  return (
    <article className="contact-course-info text-center">
      <h3 className="heading heading-tertiary text-red pb-2">
        Baking is fun with Kocoa Mania
      </h3>
      {classes &&
        classes.map((cls, i) => (
          <div key={i}>
            <h4 className="heading heading-tertiary text-red">
              Class Type {cls.type}:
            </h4>
            <p className="pb-3">{cls.text}</p>
          </div>
        ))}
    </article>
  );
}

export default CoursesInfo;
