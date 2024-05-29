import "./Country.css";
import PropTypes from "prop-types";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, population, area, region, cca3 } = country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h1>Name: {name.common}</h1>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
