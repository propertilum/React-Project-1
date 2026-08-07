import './index.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  const cardsData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      title: 'Ocean Sunset',
      description: 'Explore the serene views of sunset over peaceful ocean waters.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
      title: 'Starry Mountains',
      description: 'Discover the breathtaking sights of mountain peaks under a clear night sky.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
      title: 'Misty Forest',
      description: 'Take a quiet walk through rich green woodland trails shrouded in morning fog.',
    },
  ];

  return (
    <div className="page-layout">
      <Navbar />

      <main className="container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App