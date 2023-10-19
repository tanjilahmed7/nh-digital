import Image from "next/image";

const Calendly = () => {
  return (
    <div className="text-center">
      <Image
        src="/images/book-consultation/calendly.png"
        alt="Consultation"
        className="img-fluid"
        width={635}
        height={400}
      />
    </div>
  );
};

export default Calendly;
