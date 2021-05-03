import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento Syngenta',
          type: 'deposit',
          amount: 6000,          
          category: 'Dev',
          createdAt: new Date('2021-04-12 09:00:00')
        },
        {
          id: 2,
          title: 'Financiamento Casa',
          type: 'withdraw',
          amount: 800,          
          category: 'Casa',
          createdAt: new Date('2021-04-12 10:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

