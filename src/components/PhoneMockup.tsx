interface PhoneMockupProps {
  screenshot: string;
  delay?: number;
  className?: string;
}

export default function PhoneMockup({ screenshot, delay = 0, className = '' }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] h-[570px] animate-float ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl" />

        <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden">
          <img
            src={screenshot}
            alt="App Screenshot"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}
