import React, { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // 从文件中加载数据
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <h1>信息展示</h1>
      
      <ul>
        {items.map(item => (
          <li key={item.title}>
            <h2>{item.title}</h2>
            <p>类型:{item.type}</p>
            <a href={item.link}>链接</a>
            <p>时间:{item.time}</p>
          </li>
        ))}
      </ul>

    </div>
  );

}

export default App;