function Features() {
  const featureList = [
    { id: 1, title: 'Fully Responsive', text: 'Adapts seamlessly across mobile, tablet, and desktop screens.' },
    { id: 2, title: 'Modular Code', text: 'Built with isolated JSX components and dedicated CSS styling.' },
    { id: 3, title: 'Optimized Performance', text: 'Fast render times with lightweight and clean layout logic.' },
    { id: 4, title: 'Easy Customization', text: 'Tweak colors, typography, and structure effortlessly.' },
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        {featureList.map((item) => (
          <div key={item.id} className="feature-item">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;