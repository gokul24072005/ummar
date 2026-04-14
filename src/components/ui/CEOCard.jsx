const CEOCard = ({ name, role, description, image }) => {
  const imageUrl = image || "https://www.izonetech.in/img/kesavan.jpg";

  return (
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-12">
      {/* Image */}
      <div className="flex justify-center md:justify-end shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full max-w-[240px] md:max-w-[280px] rounded-2xl shadow-xl object-cover aspect-[4/5]"
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left max-w-xl">
        <p className="text-primary font-medium mb-2">Leadership</p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          {name}
        </h2>

        <p className="text-lg font-medium text-foreground/80 mb-4">{role}</p>

        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          {description}
        </p>

        {/* Stats inline (no boxes) */}
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start text-sm md:text-base text-muted-foreground">
          <span>
            <strong className="text-foreground text-xl block md:inline">15+</strong>{" "}
            <span className="md:ml-1">Years</span>
          </span>
          <span>
            <strong className="text-foreground text-xl block md:inline">200+</strong>{" "}
            <span className="md:ml-1">Projects</span>
          </span>
          <span>
            <strong className="text-foreground text-xl block md:inline">200+</strong>{" "}
            <span className="md:ml-1">Team</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CEOCard;
