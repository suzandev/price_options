import PropTypes from "prop-types";

export default function Link({ route }) {
  return (
    <li>
      <a href={route.path}>{route.name}</a>
    </li>
  );
}

Link.propTypes = {
  route: PropTypes.object,
};
