import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All', ...new Set(items.map((item)=>item.category))]

function App() {
  const [menuitems, setitems] = useState(items)
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category)=>{
    if(category === "All"){setitems(items); return;}

    const newItems = items.filter((item)=>item.category === category);
    setitems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>  
        </div>
        <Categories categories={categories} filterItem={filterItem}  ></Categories>
       <Menu items={menuitems} />

      </section>
    </main>
  )
}

export default App;
