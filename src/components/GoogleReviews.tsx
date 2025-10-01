import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const placeId = "ChIJ32dHE_nzc0cRF4NmcjDDj3M";

  // Fallback reviews wenn Google Places API nicht verfügbar ist
  const fallbackReviews = [
    {
      author_name: "Hannah E.",
      rating: 5,
      text: "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
      time: 1736899200
    },
    {
      author_name: "Simone G.",
      rating: 5,
      text: "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
      time: 1736467200
    },
    {
      author_name: "Klaus F.",
      rating: 5,
      text: "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
      time: 1736640000
    },
    {
      author_name: "Silvio T.",
      rating: 5,
      text: "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen!",
      time: 1737158400
    },
    {
      author_name: "Christian Steller",
      rating: 5,
      text: "Ich bin absolut begeistert von ekDruck! Die Qualität ist erstklassig, jedes Detail wird sehr präzise und sauber umgesetzt. Die Kommunikation war von Anfang an ausgesprochen freundlich und professionell.",
      time: 1734220800
    }
  ];

  useEffect(() => {
    // Verwende fallback reviews
    setReviews(fallbackReviews);
  }, []);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('de-AT', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Google Bewertungen</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0</span>
              <span className="text-muted-foreground">(21 Bewertungen)</span>
            </div>
          </div>
          <a
            href={`https://search.google.com/local/writereview?placeid=${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Bewertung schreiben
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold">{review.author_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(review.time)}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Alle Bewertungen auf Google ansehen →
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;