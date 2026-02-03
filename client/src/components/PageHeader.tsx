interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative bg-primary/5 py-20 lg:py-28 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10" />
          {/* Unsplash image passed via props */}
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 fade-in-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance fade-in-up delay-100">
          {description}
        </p>
      </div>
    </div>
  );
}
