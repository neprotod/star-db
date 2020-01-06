import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swapi from '../../services/swapi';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

import './ItemDetails.css';

const Record = ({ items, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{items[field]}</span>
    </li>
  );
};

Record.defaultProps = {
  items: {},
};

Record.propTypes = {
  items: PropTypes.shape({}),
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default class ItemDetails extends Component {
  static propTypes = {
    itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    getData: PropTypes.func.isRequired,
    image: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  state = {
    data: null,
    loaded: true,
    error: false,
  };

  swapi = new Swapi();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;
    if (itemId !== prevProps.itemId) {
      this.updateLoader();
      this.updatePerson();
    }
  }

  updateLoader() {
    this.setState({
      loaded: true,
    });
  }

  errorSet = () => {
    this.setState({
      error: true,
      loaded: false,
    });
  };

  async updatePerson() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    try {
      const data = await getData(itemId);

      this.setState({
        data,
        loaded: false,
        error: false,
      });
    } catch (e) {
      this.errorSet();
    }
  }

  render() {
    const { data, loaded, error } = this.state;
    const { image, children } = this.props;
    if (!data) {
      return <span>Select a data from a list</span>;
    }

    if (loaded) {
      return <Spinner />;
    }

    const content = loaded ? (
      <Spinner />
    ) : (
      (!error && (
        <ViewItem items={data} image={image(data.id)}>
          {children}
        </ViewItem>
      )) || <ErrorIndicator />
    );
    return <div className="person-details card">{content}</div>;
  }
}

const ViewItem = ({ items, image, children }) => {
  const { name } = items;

  return (
    <>
      <img className="person-image" src={image} alt={name} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { items });
          })}
        </ul>
      </div>
    </>
  );
};

ViewItem.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Record };
