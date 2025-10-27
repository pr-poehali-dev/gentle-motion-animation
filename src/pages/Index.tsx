const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-cosmic-dark via-cosmic-gray to-cosmic-dark flex items-center justify-center">
      <div className="relative w-full h-screen flex items-center justify-center p-8">
        <img
          src="https://cdn.poehali.dev/files/132268ab-f6b6-46b9-82fa-786e5dc3ec2a.png"
          alt="Floating artwork"
          className="max-w-[90vw] max-h-[90vh] object-contain animate-float-sway shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Index;
