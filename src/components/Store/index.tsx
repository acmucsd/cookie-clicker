import React from 'react';
import './style.less';
import Manager from '../Manager';
import Upgrades from '../Upgrades';
import bread from '../../assets/bread.png';

// this part's kinda scuff so it should be fixed later lol
const Store: React.FC = () => (
  <div className="store">
    <h2>Store</h2>
    <Upgrades />
    <div className="store-items">
      <Manager image={bread} name="Cursor Upgrade" description="cat cat cat" number={666} />
      <Manager image={bread} name="Diamond Staff" description="cat cat cat" number={666} />
      <Manager image={bread} name="Dining Halls" description="cat cat cat" number={666} />
      <Manager image={bread} name="Side Projects Team" description="cat cat cat" number={666} />
      <Manager image={bread} name="3D Printer" description="cat cat cat" number={666} />
      <Manager image={bread} name="ACM Event" description="cat cat cat" number={666} />
      <Manager image={bread} name="ACM AI Competition" description="cat cat cat" number={666} />
      <Manager image={bread} name="BreadCon" description="cat cat cat" number={666} />
      <Manager image={bread} name="UC Campus" description="cat cat cat" number={666} />
      <Manager image={bread} name="Country" description="cat cat cat" number={666} />
      <Manager image={bread} name="TypeScript Console" description="cat cat cat" number={666} />
      <Manager image={bread} name="ACM Hack Event" description="cat cat cat" number={666} />
      <Manager image={bread} name="ACM Hypercube" description="cat cat cat" number={666} />
    </div>
  </div>
);

export default Store;
