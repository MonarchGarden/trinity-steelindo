import React from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';

export default function App() {
  return (
    <Header>
      <Body>
        <div className="rounded-md bg-gray-200 p-6 shadow-md">
          <h1 className="mb-4 text-3xl font-bold">
            Hello, React with Tailwind CSS!
          </h1>
          <p className="text-gray-700">
            This is a basic React component styled with Tailwind CSS.
          </p>
        </div>
      </Body>
    </Header>
  );
}
