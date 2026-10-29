interface AparFeaturesProps {
  amenities: string[];
}

const AparFeatures = ({ amenities }: AparFeaturesProps) => {
  return (
    <>
      <h2>Amenidades</h2>

      <ul className="apar-features">
        {amenities.map((amenity) => (
          <li key={amenity}>{amenity}</li>
        ))}
      </ul>
    </>
  );
};

export default AparFeatures;