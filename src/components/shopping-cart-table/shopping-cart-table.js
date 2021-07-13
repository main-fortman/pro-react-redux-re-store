import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ShoppingCartTable = ({items, total, onInc, onDec, onDelete}) => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>

          {
            items.map((item, index) => {
              const {id, name, count, total} = item;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>{total}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={() => onDelete(id)}
                    >
                      <i className="fa fa-trash-o" />
                    </button>
                    <button
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={() => onInc(id)}
                    >
                      <i className="fa fa-plus-circle" />
                    </button>
                    <button
                      className="btn btn-outline-warning btn-sm float-right"
                      onClick={() => onDec(id)}
                    >
                      <i className="fa fa-minus-circle" />
                    </button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

      <div className="total">
        Total: {total}
      </div>
    </div>
  );
};

ShoppingCartTable.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  onInc: PropTypes.func,
  onDec: PropTypes.func,
  onDelete: PropTypes.func,
}

const mapsStateToProps = ({cartItems, orderTotal}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = () => {
  return {
    onInc: (id) => console.log('inc', id),
    onDec: (id) => console.log('dec', id),
    onDelete: (id) => console.log('delete', id),
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(ShoppingCartTable);